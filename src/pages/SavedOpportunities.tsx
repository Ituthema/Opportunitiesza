import { useSavedOpportunities } from "../lib/storage";
import opportunitiesData from "../data/opportunities.json";
import OpportunityCard from "../components/OpportunityCard";
import { type Opportunity } from "../types";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function SavedOpportunities() {
  const { savedIds } = useSavedOpportunities();
  
  const savedOpps = (opportunitiesData as Opportunity[]).filter(o => savedIds.includes(o.id));

  return (
    <>
      <Helmet>
        <title>Saved Opportunities | OpportunitiesZA</title>
        <meta name="description" content="View your bookmarked and saved learnerships, internally and bursaries." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-3xl">🔖</span>
          <h1 className="text-3xl font-heading font-bold text-sa-ink">Saved Opportunities</h1>
        </div>

        {savedOpps.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedOpps.map(opp => (
              <OpportunityCard key={opp.id} opp={opp} />
            ))}
          </div>
        ) : (
          <div className="bg-sa-cloud p-12 text-center rounded-lg border border-gray-200">
            <p className="text-gray-500 mb-6">No saved opportunities yet. Browse the directory and click the 🔖 bookmark icon to save them here for later.</p>
            <Link to="/opportunities" className="bg-sa-green text-white px-6 py-2 rounded-md font-semibold hover:bg-sa-green/90 transition-colors">
              Browse Directory
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
