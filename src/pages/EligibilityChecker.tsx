import { useState } from "react";
import { Link } from "react-router-dom";
import opportunitiesData from "../data/opportunities.json";
import OpportunityCard from "../components/OpportunityCard";
import provincesList from "../data/provinces.json";
import { type Opportunity } from "../types";
import { Helmet } from "react-helmet-async";

const qualificationLevels: Record<string, number> = {
  "Matric": 4,
  "Diploma": 6,
  "Degree": 7
};

export default function EligibilityChecker() {
  const [province, setProvince] = useState("");
  const [qualification, setQualification] = useState("");
  const [hasChecked, setHasChecked] = useState(false);
  const [matches, setMatches] = useState<Opportunity[]>([]);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!province || !qualification) return;

    const userLevel = qualificationLevels[qualification] || 0;

    const results = (opportunitiesData as Opportunity[]).filter(opp => {
      // Must not be expired
      if (opp.expired) return false;

      // Province match (Nationwide matches everything)
      const provMatch = opp.province === "Nationwide" || opp.province === province;

      // Qualification match. For example, if opportunity needs Matric (4), and user has Diploma (6), they qualify.
      // But typically, they look for exact or minimum. We'll do exact OR user has higher qualification.
      const oppLevel = qualificationLevels[opp.qualification_level] || 0;
      const qualMatch = userLevel >= oppLevel;

      return provMatch && qualMatch;
    }).sort((a, b) => new Date(a.closing_date).getTime() - new Date(b.closing_date).getTime());

    setMatches(results);
    setHasChecked(true);
  };

  return (
    <>
      <Helmet>
        <title>Eligibility Checker | OpportunitiesZA</title>
        <meta name="description" content="Check your eligibility for learnerships, bursaries, and internships in South Africa based on your qualifications and province." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-block bg-sa-green/10 p-3 rounded-full border border-sa-green/20 mb-4">
            <span className="text-3xl">✅</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-heading font-extrabold text-sa-ink mb-4">Eligibility Checker</h1>
          <p className="text-gray-600">
            Tell us about your background, and we'll match you with verified opportunities you qualify for right now.
          </p>
        </div>

        <div className="max-w-xl mx-auto bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
          <form onSubmit={handleCheck} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-sa-ink mb-2">Highest Qualification</label>
              <select 
                value={qualification}
                onChange={(e) => setQualification(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-3 bg-sa-cloud focus:outline-none focus:border-sa-green focus:ring-1 focus:ring-sa-green"
                required
              >
                <option value="" disabled>Select your qualification</option>
                <option value="Matric">Matric / Grade 12</option>
                <option value="Diploma">Diploma / National Certificate</option>
                <option value="Degree">Bachelor's Degree or higher</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-sa-ink mb-2">Your Province</label>
              <select 
                value={province}
                onChange={(e) => setProvince(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-3 bg-sa-cloud focus:outline-none focus:border-sa-green focus:ring-1 focus:ring-sa-green"
                required
              >
                <option value="" disabled>Select your province</option>
                {provincesList.filter(p => p !== "Nationwide").map(p => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>

            <button 
              type="submit" 
              className="w-full bg-sa-green text-white font-bold py-3 rounded-md hover:bg-sa-green/90 transition-colors"
            >
              Find My Matches
            </button>
          </form>
        </div>

        {hasChecked && (
          <div className="mt-16 pt-12 border-t border-gray-200">
            <h2 className="text-2xl font-heading font-bold text-sa-ink mb-6 text-center">
              We found {matches.length} matching {matches.length === 1 ? 'opportunity' : 'opportunities'}
            </h2>
            
            {matches.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {matches.map(opp => (
                  <OpportunityCard key={opp.id} opp={opp} />
                ))}
              </div>
            ) : (
              <div className="text-center p-12 bg-sa-cloud rounded-lg">
                <p className="text-gray-500 mb-4">No open opportunities match your exact profile right now.</p>
                <p className="text-sm text-gray-400 mb-6">Opportunities change daily. Keep checking or subscribe to our newsletter for updates.</p>
                <Link to="/opportunities" className="text-sa-green font-medium hover:underline">
                  Browse all opportunities
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
