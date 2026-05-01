import { Link } from "react-router-dom";
import opportunities from "../data/opportunities.json";
import categories from "../data/categories.json";
import OpportunityCard from "../components/OpportunityCard";
import NewsletterCTA from "../components/NewsletterCTA";
import { getDaysUntil } from "../lib/utils";
import { type Opportunity } from "../types";

export default function Home() {
  const opps = opportunities as Opportunity[];
  
  const featured = [...opps].filter(o => !o.expired && o.verified)
    .sort((a, b) => new Date(a.closing_date).getTime() - new Date(b.closing_date).getTime())
    .slice(0, 6);

  const closingSoon = [...opps].filter(o => !o.expired && getDaysUntil(o.closing_date) <= 30)
    .sort((a, b) => getDaysUntil(a.closing_date) - getDaysUntil(b.closing_date))
    .slice(0, 6);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-sa-cloud py-16 px-6 border-b border-gray-200 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-sa-ink mb-4 leading-tight tracking-tight">
            Find Learnerships, Bursaries & Internships in <span className="text-sa-green">South Africa</span>
          </h1>
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
            Your free guide to SETA opportunities, bursaries, and career pathways — verified, up to date, and South Africa only.
          </p>
          
          <div className="max-w-xl mx-auto bg-white p-2 rounded-lg shadow-sm border border-gray-200 flex flex-col md:flex-row gap-2 mb-6">
            <input 
              type="text" 
              placeholder="Search opportunities..." 
              className="flex-1 px-4 py-3 outline-none rounded-md"
            />
            <Link to="/opportunities" className="bg-sa-ink text-white px-8 py-3 rounded-md font-semibold hover:bg-sa-ink/90 transition-colors text-center">
              Search
            </Link>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-sm text-gray-500 mr-2">Quick links:</span>
            {categories.map(c => (
              <Link key={c.id} to={c.path} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-600 hover:text-sa-green hover:border-sa-green transition-colors">
                {c.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(cat => (
            <Link key={cat.id} to={cat.path} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md hover:border-sa-green transition-all flex items-start gap-4 group">
              <div className="text-3xl">{cat.icon}</div>
              <div>
                <h3 className="font-heading font-bold text-lg text-sa-ink group-hover:text-sa-green">{cat.label}</h3>
                <p className="text-sm text-gray-500 mt-1">{cat.description}</p>
              </div>
            </Link>
          ))}
          <Link to="/seta-guides" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md hover:border-sa-green transition-all flex items-start gap-4 group">
            <div className="text-3xl">📖</div>
            <div>
              <h3 className="font-heading font-bold text-lg text-sa-ink group-hover:text-sa-green">SETA Guides</h3>
              <p className="text-sm text-gray-500 mt-1">Learn how the system works</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Featured Opportunities */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-heading font-bold text-sa-ink">Latest Opportunities</h2>
          <Link to="/opportunities" className="text-sa-green font-semibold text-sm hover:underline">View All →</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map(opp => (
            <OpportunityCard key={opp.id} opp={opp} />
          ))}
        </div>
      </section>

      {/* Tools Block */}
      <section className="bg-sa-cloud border-y border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-heading font-bold text-sa-ink mb-8">Tools to Help You Apply Smarter</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/calendar" className="bg-white p-6 rounded-lg border border-gray-200 hover:border-sa-green hover:shadow-md transition-all">
              <div className="text-2xl mb-3">📅</div>
              <h3 className="font-heading font-bold text-sa-ink">Deadline Calendar</h3>
              <p className="text-xs text-gray-500 mt-2">Track upcoming closing dates</p>
            </Link>
            <Link to="/tools/eligibility-checker" className="bg-white p-6 rounded-lg border border-gray-200 hover:border-sa-green hover:shadow-md transition-all">
              <div className="text-2xl mb-3">✅</div>
              <h3 className="font-heading font-bold text-sa-ink">Eligibility Checker</h3>
              <p className="text-xs text-gray-500 mt-2">Match with opportunities</p>
            </Link>
            <Link to="/tools/scam-checker" className="bg-white p-6 rounded-lg border border-gray-200 hover:border-sa-green hover:shadow-md transition-all">
              <div className="text-2xl mb-3">🛡️</div>
              <h3 className="font-heading font-bold text-sa-ink">Scam Checker</h3>
              <p className="text-xs text-gray-500 mt-2">Verify legitimacy</p>
            </Link>
            <Link to="/saved" className="bg-white p-6 rounded-lg border border-gray-200 hover:border-sa-green hover:shadow-md transition-all">
              <div className="text-2xl mb-3">🔖</div>
              <h3 className="font-heading font-bold text-sa-ink">Saved Opportunities</h3>
              <p className="text-xs text-gray-500 mt-2">Your bookmarked list</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Block */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <div className="max-w-3xl mx-auto bg-sa-green-light border border-sa-green/30 rounded-xl p-8">
          <h2 className="text-xl font-heading font-bold text-sa-ink mb-6">Why Trust OpportunitiesZA?</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm font-medium text-sa-green">
            <span>✓ All sources verified</span>
            <span>✓ Updated regularly</span>
            <span>✓ South Africa only</span>
            <span>✓ We never collect documents</span>
          </div>
          <div className="mt-6">
             <Link to="/about" className="text-sm text-gray-600 hover:text-sa-green">Read more about us →</Link>
          </div>
        </div>
      </section>

      <NewsletterCTA />
    </div>
  );
}
