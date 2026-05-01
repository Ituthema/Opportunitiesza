import { useParams, Link } from "react-router-dom";
import guidesData from "../data/guides.json";
import AdSlot from "../components/AdSlot";
import { type Guide } from "../types";
import { formatDate } from "../lib/utils";
import { Helmet } from "react-helmet-async";

export default function GuideDetail() {
  const { slug } = useParams();
  
  const guide = (guidesData as Guide[]).find(g => g.slug === slug);

  if (!guide) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="text-3xl font-heading font-bold mb-4">Guide Not Found</h1>
        <p className="text-gray-500 mb-8">This guide does not exist.</p>
        <Link to="/seta-guides" className="text-white bg-sa-green px-6 py-2 rounded-md hover:bg-sa-green/90">Browse Guides</Link>
      </div>
    );
  }

  const faqSchema = guide.faq && guide.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": guide.faq.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  } : null;

  return (
    <>
      <Helmet>
        <title>{guide.meta_title}</title>
        <meta name="description" content={guide.meta_description} />
        {faqSchema && <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>}
      </Helmet>
      <article className="max-w-3xl mx-auto px-6 py-16">
        <nav className="text-sm text-gray-500 mb-8 flex items-center space-x-2">
          <Link to="/" className="hover:text-sa-green">Home</Link>
          <span>›</span>
          <Link to="/seta-guides" className="hover:text-sa-green">Guides</Link>
          <span>›</span>
          <span className="text-gray-800 font-medium truncate">{guide.title}</span>
        </nav>

        <header className="mb-10 pb-8 border-b border-gray-200">
          <span className="text-xs font-mono tracking-wider text-sa-green uppercase mb-4 block">
            {guide.category.replace("-", " ")}
          </span>
          <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-sa-ink mb-6">
            {guide.title}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            {guide.intro}
          </p>
          <div className="text-sm text-gray-500 flex items-center gap-4">
            <span>Updated: {formatDate(guide.updated_date)}</span>
          </div>
        </header>

        <div className="prose prose-slate lg:prose-lg max-w-none">
          <AdSlot />
          {guide.body_sections?.map((section, idx) => (
            <div key={idx} className="mb-10">
              <h2 className="font-heading text-2xl font-bold text-sa-ink mb-4">{section.heading}</h2>
              <p>{section.content}</p>
              {idx === Math.floor((guide.body_sections?.length || 0) / 2) && <AdSlot />}
            </div>
          ))}

          {guide.faq && guide.faq.length > 0 && (
            <div className="mt-12 bg-sa-cloud p-8 rounded-xl border border-gray-200">
              <h2 className="font-heading text-2xl font-bold text-sa-ink mb-6 mt-0">Common Questions</h2>
              <div className="space-y-6">
                {guide.faq.map((f, i) => (
                  <div key={i}>
                    <h3 className="font-heading text-lg font-bold text-sa-ink mb-2 mt-0">{f.q}</h3>
                    <p className="m-0">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500 mb-6">Looking for opportunities?</p>
          <Link to="/opportunities" className="bg-sa-green text-white px-8 py-3 rounded-md font-bold hover:bg-sa-green/90 transition-colors">
            Browse All Opportunities
          </Link>
        </div>
      </article>
    </>
  );
}
