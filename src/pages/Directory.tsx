import { useState, useMemo } from "react";
import opportunitiesData from "../data/opportunities.json";
import provincesList from "../data/provinces.json";
import OpportunityCard from "../components/OpportunityCard";
import { type Opportunity } from "../types";

export default function Directory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [province, setProvince] = useState("");
  const [qualification, setQualification] = useState("");
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 6;

  const opps = opportunitiesData as Opportunity[];

  const filtered = useMemo(() => {
    return opps.filter(opp => {
      // Exclude expired by default? The spec says to show them but grayed out, or hide if filters apply.
      // We'll show all and let users see which are closed if they don't filter them out, or we can filter them.
      // Let's hide expired for cleanliness during active search, or just keep them since they have an "expired" flag.
      
      const matchSearch = searchTerm === "" || 
        opp.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        (opp.description && opp.description.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchCategory = category === "" || opp.category === category;
      // "Nationwide" applies to all provinces, or exact match
      const matchProvince = province === "" || opp.province === province || opp.province === "Nationwide";
      const matchQual = qualification === "" || opp.qualification_level === qualification;
      const matchVerified = !verifiedOnly || opp.verified;

      return matchSearch && matchCategory && matchProvince && matchQual && matchVerified;
    }).sort((a, b) => new Date(a.closing_date).getTime() - new Date(b.closing_date).getTime());
  }, [searchTerm, category, province, qualification, verifiedOnly, opps]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginatedOpps = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filtered, currentPage]);

  // Reset to page 1 on filter changes
  useMemo(() => {
    setCurrentPage(1);
  }, [searchTerm, category, province, qualification, verifiedOnly]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 flex-shrink-0 sticky top-24 space-y-6 bg-white p-6 rounded-lg border border-gray-200">
          <div>
            <h3 className="font-heading font-bold mb-3 text-sa-ink">Search</h3>
            <input 
              type="text" 
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-sa-green"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">Category</label>
            <select 
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-sa-green"
            >
              <option value="">All Categories</option>
              <option value="learnership">Learnerships</option>
              <option value="bursary">Bursaries</option>
              <option value="internship">Internships</option>
              <option value="apprenticeship">Apprenticeships</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">Province</label>
            <select 
              value={province}
              onChange={(e) => setProvince(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-sa-green"
            >
              <option value="">All Provinces</option>
              {provincesList.map(prov => (
                <option key={prov} value={prov}>{prov}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">Qualification</label>
            <select 
              value={qualification}
              onChange={(e) => setQualification(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-sa-green"
            >
              <option value="">Any Qualification</option>
              <option value="Matric">Matric / Grade 12</option>
              <option value="Diploma">Diploma</option>
              <option value="Degree">Degree</option>
            </select>
          </div>

          <label className="flex items-center gap-2 cursor-pointer">
            <input 
              type="checkbox" 
              checked={verifiedOnly}
              onChange={(e) => setVerifiedOnly(e.target.checked)}
              className="rounded text-sa-green focus:ring-sa-green h-4 w-4"
            />
            <span className="text-sm font-medium">Verified only</span>
          </label>
        </aside>

        {/* Results */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-heading font-bold text-sa-ink">Browse Opportunities</h1>
            <span className="text-sm text-gray-500">{filtered.length} results</span>
          </div>

          {filtered.length > 0 ? (
            <div className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {paginatedOpps.map(opp => (
                  <OpportunityCard key={opp.id} opp={opp} />
                ))}
              </div>
              
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-8">
                  <button 
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 border border-gray-300 rounded-md disabled:opacity-50 hover:bg-gray-50"
                  >
                    Previous
                  </button>
                  <span className="text-sa-ink font-medium">Page {currentPage} of {totalPages}</span>
                  <button 
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 border border-gray-300 rounded-md disabled:opacity-50 hover:bg-gray-50"
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-white p-12 text-center rounded-lg border border-gray-200">
              <p className="text-gray-500">No opportunities found matching your filters.</p>
              <button 
                onClick={() => {
                  setSearchTerm("");
                  setCategory("");
                  setProvince("");
                  setQualification("");
                  setVerifiedOnly(false);
                }}
                className="mt-4 text-sa-green font-medium hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
