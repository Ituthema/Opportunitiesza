import { useState, useMemo } from "react";
import opportunitiesData from "../data/opportunities.json";
import OpportunityCard from "../components/OpportunityCard";
import { type Opportunity } from "../types";
import { getDaysUntil, formatDate, getUrgencyClass, cn } from "../lib/utils";

export default function Calendar() {
  const opps = opportunitiesData as Opportunity[];

  const [category, setCategory] = useState("");
  const [province, setProvince] = useState("");

  const filtered = useMemo(() => {
    return opps.filter(opp => {
      const matchCategory = category === "" || opp.category === category;
      const matchProvince = province === "" || opp.province === province || opp.province === "Nationwide";
      return matchCategory && matchProvince && !opp.expired;
    }).sort((a, b) => new Date(a.closing_date).getTime() - new Date(b.closing_date).getTime());
  }, [category, province, opps]);

  // For the sake of the MVP, we render a list view categorized by month/urgency
  // as the full calendar grid can be complex to make responsive seamlessly without a library.

  const closingSoon = filtered.filter(o => getDaysUntil(o.closing_date) <= 14);
  const closingLater = filtered.filter(o => getDaysUntil(o.closing_date) > 14);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-heading font-bold text-sa-ink mb-4">Deadline Calendar</h1>
        <p className="text-gray-600">Track upcoming closing dates so you never miss an opportunity.</p>
      </div>

      <div className="bg-white p-4 border border-gray-200 rounded-lg flex flex-wrap gap-4 mb-8">
        <select 
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-sa-green"
        >
          <option value="">All Categories</option>
          <option value="learnership">Learnerships</option>
          <option value="bursary">Bursaries</option>
          <option value="internship">Internships</option>
          <option value="apprenticeship">Apprenticeships</option>
        </select>

        <select 
          value={province}
          onChange={(e) => setProvince(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-sa-green"
        >
          <option value="">All Provinces</option>
          <option value="Gauteng">Gauteng</option>
          <option value="Western Cape">Western Cape</option>
          <option value="KwaZulu-Natal">KwaZulu-Natal</option>
        </select>
        
        <div className="ml-auto text-sm text-gray-500 self-center">
          {filtered.length} upcoming deadlines
        </div>
      </div>

      {closingSoon.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xl font-heading font-bold text-sa-red mb-6 flex items-center gap-2">
            <span className="text-2xl">🚨</span> Closing Soon (Next 14 Days)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {closingSoon.map(opp => (
               <OpportunityCard key={opp.id} opp={opp} />
             ))}
          </div>
        </section>
      )}

      {closingLater.length > 0 && (
        <section>
          <h2 className="text-xl font-heading font-bold text-sa-ink mb-6 flex items-center gap-2">
            <span className="text-2xl">📅</span> Approaching Deadlines
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {closingLater.map(opp => (
               <OpportunityCard key={opp.id} opp={opp} />
             ))}
          </div>
        </section>
      )}

      {filtered.length === 0 && (
        <div className="bg-white p-12 text-center rounded-lg border border-gray-200">
          <p className="text-gray-500">No upcoming deadlines match your filters.</p>
        </div>
      )}
    </div>
  );
}
