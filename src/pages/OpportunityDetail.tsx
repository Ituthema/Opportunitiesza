import { useParams, Link } from "react-router-dom";
import opportunitiesData from "../data/opportunities.json";
import OpportunityCard from "../components/OpportunityCard";
import AdSlot from "../components/AdSlot";
import { type Opportunity } from "../types";
import { formatDate, getDaysUntil, getUrgencyClass, cn } from "../lib/utils";
import { useSavedOpportunities } from "../lib/storage";
import { Helmet } from "react-helmet-async";
import { Bookmark, BookmarkCheck, Share2 } from "lucide-react";

export default function OpportunityDetail() {
  const { category, slug } = useParams();
  
  // Notice that URL category has an "s" (e.g. /learnerships/slug).
  // So we strip the 's' for lookup.
  const cat = category?.replace(/s$/, "");
  
  const opp = (opportunitiesData as Opportunity[]).find(
    o => o.slug === slug && o.category === cat
  );

  const { isSaved, toggleSave } = useSavedOpportunities();

  if (!opp) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="text-3xl font-heading font-bold mb-4">Opportunity Not Found</h1>
        <p className="text-gray-500 mb-8">The opportunity you are looking for does not exist or has been removed.</p>
        <Link to="/opportunities" className="text-white bg-sa-green px-6 py-2 rounded-md hover:bg-sa-green/90">Browse All Opportunities</Link>
      </div>
    );
  }

  const days = getDaysUntil(opp.closing_date);
  const isExpired = days < 0;
  const urgencyClass = getUrgencyClass(days);
  const saved = isSaved(opp.id);

  const related = (opportunitiesData as Opportunity[])
    .filter(o => o.category === opp.category && o.id !== opp.id && !o.expired)
    .slice(0, 3);

  const handleShare = async () => {
    const shareData = {
      title: opp.title,
      text: `Check out this ${opp.category} opportunity in ${opp.province}. Closes ${formatDate(opp.closing_date)}`,
      url: window.location.href,
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error("Error sharing", err);
      }
    } else {
      // Fallback to WhatsApp link
      const text = encodeURIComponent(`${shareData.text} \n\n ${shareData.url}`);
      window.open(`https://wa.me/?text=${text}`, '_blank');
    }
  };

  // Generate JobPosting Schema
  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": opp.title,
    "description": opp.description,
    "validThrough": opp.closing_date,
    "datePosted": opp.posted_date,
    "hiringOrganization": {
      "@type": "Organization",
      "name": opp.source_name
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": opp.province,
        "addressCountry": "ZA"
      }
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": window.location.origin },
      { "@type": "ListItem", "position": 2, "name": `${opp.category}s`, "item": `${window.location.origin}/${opp.category}s` },
      { "@type": "ListItem", "position": 3, "name": opp.title }
    ]
  };

  const metaTitle = `${opp.title} 2026: Apply, Requirements & Closing Date`;
  const metaDescription = `Apply for the ${opp.title} in ${opp.province}. Closing ${formatDate(opp.closing_date)}. Requirements: ${opp.qualification_level}. ${opp.stipend ? 'Stipend: ' + opp.stipend : ''} Verified official source.`;

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={`${window.location.origin}/${opp.category}s/${opp.slug}`} />
        <script type="application/ld+json">{JSON.stringify(jobPostingSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>
      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-500 mb-8 flex items-center space-x-2">
          <Link to="/" className="hover:text-sa-green">Home</Link>
          <span>›</span>
          <Link to={`/${opp.category}s`} className="hover:text-sa-green capitalize">{opp.category}s</Link>
          <span>›</span>
          <span className="text-gray-800 font-medium truncate">{opp.title}</span>
        </nav>

        {/* Header */}
        <div className="flex items-center gap-3 mb-4 justify-between">
          <div className="flex items-center gap-3">
            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
              {opp.category}
            </span>
            {opp.verified && (
              <span className="text-sa-green text-xs font-semibold">✓ Verified Source</span>
            )}
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={handleShare}
              className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-sa-green transition-colors"
            >
              <Share2 className="w-5 h-5" />
              <span className="hidden sm:inline">Share</span>
            </button>
            <button 
              onClick={() => toggleSave(opp.id)}
              className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-sa-green transition-colors"
            >
              {saved ? <BookmarkCheck className="w-5 h-5 text-sa-green fill-sa-green" /> : <Bookmark className="w-5 h-5" />}
              <span className="hidden sm:inline">{saved ? "Saved" : "Save"}</span>
            </button>
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-heading font-bold text-sa-ink mb-6 leading-tight">
          {opp.title}
        </h1>

        {/* Quick Facts */}
        <div className="flex flex-wrap items-center gap-6 bg-sa-cloud border border-gray-200 rounded-lg p-4 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">📍</span>
            <span className="text-sm font-medium">{opp.province}</span>
          </div>
          <div className="flex items-center gap-2">
             <span className="text-xl">⏳</span>
             <span className={cn("text-sm font-medium", urgencyClass)}>
               Closes: {formatDate(opp.closing_date)}
             </span>
          </div>
          {opp.stipend && (
            <div className="flex items-center gap-2">
               <span className="text-xl">💰</span>
               <span className="text-sm font-medium">{opp.stipend}</span>
            </div>
          )}
          <div className="flex items-center gap-2">
             <span className="text-xl">📋</span>
             <span className="text-sm font-medium">{opp.qualification_level}</span>
          </div>
        </div>

        <AdSlot />

        {/* Content */}
        <div className="prose prose-slate max-w-none mb-12">
          <p className="text-lg leading-relaxed text-gray-700">{opp.description}</p>
          
          {opp.eligibility && opp.eligibility.length > 0 && (
            <>
              <h2 className="font-heading text-xl font-bold mt-8 mb-4 border-b pb-2">Who Can Apply</h2>
              <ul className="list-disc pl-5 space-y-2">
                {opp.eligibility.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </>
          )}

          <AdSlot />

          {opp.documents_needed && opp.documents_needed.length > 0 && (
            <>
              <h2 className="font-heading text-xl font-bold mt-8 mb-4 border-b pb-2">Documents Needed</h2>
              <ul className="list-disc pl-5 space-y-2">
                {opp.documents_needed.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </>
          )}
        </div>

        {/* CTA */}
        <div className="bg-white border text-center border-gray-200 rounded-lg p-8 shadow-sm mb-12">
          {isExpired ? (
            <div>
              <h3 className="text-lg font-bold text-gray-500 mb-2">This Opportunity Has Closed</h3>
              <p className="text-sm text-gray-400">The deadline for this opportunity was {formatDate(opp.closing_date)}.</p>
            </div>
          ) : (
            <div>
              <h3 className="text-lg font-heading font-bold text-sa-ink mb-4">Ready to Apply?</h3>
              <a 
                href={opp.application_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-sa-green text-white px-8 py-3 rounded-md font-bold hover:bg-sa-green/90 transition-transform hover:-translate-y-0.5 shadow-md"
              >
                Apply Now — Official Link ↗
              </a>
            </div>
          )}
          <div className="mt-6 pt-6 border-t border-gray-100 text-xs text-gray-500 flex flex-col md:flex-row items-center justify-center gap-4">
            <span>Source: <a href={opp.source_url} target="_blank" rel="noopener noreferrer" className="text-sa-green hover:underline">{opp.source_name}</a></span>
            <span className="hidden md:inline">•</span>
            <span>Last updated: {formatDate(opp.updated_date)}</span>
          </div>
        </div>

        {/* Trust Notice */}
        <div className="bg-red-50 border border-red-100 rounded-lg p-4 mb-12 flex gap-3 text-red-800 text-sm">
          <span className="text-xl">⚠️</span>
          <p>
            <strong>Safety Warning:</strong> Legitimate opportunities in South Africa will NEVER ask you to pay an application fee. Do not send money or original documents.
          </p>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="border-t border-gray-200 pt-12">
            <h2 className="text-2xl font-heading font-bold text-sa-ink mb-6">More {opp.category}s</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map(r => (
                <OpportunityCard key={r.id} opp={r} />
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}
