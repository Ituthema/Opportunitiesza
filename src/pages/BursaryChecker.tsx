import { useState } from "react";
import { Link } from "react-router-dom";
import opportunitiesData from "../data/opportunities.json";
import OpportunityCard from "../components/OpportunityCard";
import { type Opportunity } from "../types";
import { Helmet } from "react-helmet-async";

export default function BursaryChecker() {
  const [income, setIncome] = useState("");
  const [marks, setMarks] = useState("");
  const [hasChecked, setHasChecked] = useState(false);
  const [matches, setMatches] = useState<Opportunity[]>([]);
  const [scoreText, setScoreText] = useState("");
  const [scoreColor, setScoreColor] = useState("");

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!income || !marks) return;

    let probability = 0;
    
    // NSFAS is primarily driven by income < R350k
    if (income === "below350") {
      probability += 60;
    } else {
      probability += 10;
    }

    // Corporate bursaries driven heavily by marks
    if (marks === "above70") {
      probability += 35;
    } else if (marks === "60to70") {
      probability += 20;
    } else if (marks === "50to60") {
      probability += 5;
    } else {
      probability += 0;
    }

    if (probability > 75) {
      setScoreText(`High Match — ${probability}% Probability`);
      setScoreColor("bg-green-100 text-green-800 border-green-200");
    } else if (probability > 40) {
      setScoreText(`Medium Match — ${probability}% Probability`);
      setScoreColor("bg-amber-100 text-amber-800 border-amber-200");
    } else {
      setScoreText(`Low Match — ${probability}% Probability`);
      setScoreColor("bg-red-100 text-red-800 border-red-200");
    }

    // Fetch matching bursaries
    const results = (opportunitiesData as Opportunity[]).filter(o => 
      o.category === "bursary" && !o.expired
    );
    setMatches(results.slice(0, 3)); // show top 3 recommendations
    setHasChecked(true);
  };

  return (
    <>
      <Helmet>
        <title>Bursary Probability Checker | OpportunitiesZA</title>
        <meta name="description" content="Estimate your chances of qualifying for bursary funding in South Africa based on marks and household income." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-block bg-amber-100 p-3 rounded-full border border-amber-200 mb-4">
            <span className="text-3xl">🎲</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-heading font-extrabold text-sa-ink mb-4">Bursary Probability Checker</h1>
          <p className="text-gray-600">
            Find out if you are likely to qualify for NSFAS or corporate bursaries in South Africa.
          </p>
        </div>

        <div className="max-w-xl mx-auto bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
          <form onSubmit={handleCheck} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-sa-ink mb-2">Total Household Income (Before Tax)</label>
              <select 
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-3 bg-sa-cloud focus:outline-none focus:border-sa-green focus:ring-1 focus:ring-sa-green"
                required
              >
                <option value="" disabled>Select income bracket</option>
                <option value="below350">Below R350,000 per year</option>
                <option value="above350">Above R350,000 per year</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-sa-ink mb-2">Average Matric Percentage / Current Academic Average</label>
              <select 
                value={marks}
                onChange={(e) => setMarks(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-3 bg-sa-cloud focus:outline-none focus:border-sa-green focus:ring-1 focus:ring-sa-green"
                required
              >
                <option value="" disabled>Select average mark</option>
                <option value="above70">Above 70% (Distinction Average)</option>
                <option value="60to70">60% - 69% (Strong)</option>
                <option value="50to60">50% - 59% (Average)</option>
                <option value="below50">Below 50%</option>
              </select>
            </div>

            <button 
              type="submit" 
              className="w-full bg-sa-green text-white font-bold py-3 rounded-md hover:bg-sa-green/90 transition-colors"
            >
              Check My Probability
            </button>
          </form>
        </div>

        {hasChecked && (
          <div className="mt-16 pt-12 border-t border-gray-200 max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <div className={`inline-block px-6 py-2 rounded-full border font-bold text-lg ${scoreColor}`}>
                {scoreText}
              </div>
            </div>

            <div className="bg-sa-cloud p-6 rounded-lg border border-gray-200 mb-10">
              <h3 className="font-heading font-bold text-sa-ink mb-2">What this means:</h3>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
                {income === "below350" && (
                  <li>Your household income is in the NSFAS qualifying bracket (under R350,000 P.A). You should prioritize applying for NSFAS.</li>
                )}
                {income === "above350" && (
                  <li>Your income is above the NSFAS threshold. You should focus entirely on corporate and private bursaries which are primarily merit-based.</li>
                )}
                {(marks === "above70" || marks === "60to70") && (
                  <li>Your academic marks are strong enough to be highly competitive for private sector bursaries.</li>
                )}
                {(marks === "below50" || marks === "50to60") && (
                  <li>Your academic marks may limit private bursary options, but you can still explore SETA learnerships or TVET pathways which have more flexible entry requirements.</li>
                )}
              </ul>
            </div>

            {matches.length > 0 && (
              <>
                <h2 className="text-2xl font-heading font-bold text-sa-ink mb-6 text-center">Bursaries Open Right Now</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {matches.map(opp => (
                    <OpportunityCard key={opp.id} opp={opp} />
                  ))}
                </div>
                <div className="text-center mt-8">
                  <Link to="/bursaries" className="text-sa-green font-semibold hover:underline">View all Bursaries →</Link>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
}
