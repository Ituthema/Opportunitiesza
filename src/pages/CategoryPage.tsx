import { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import opportunitiesData from "../data/opportunities.json";
import categoriesData from "../data/categories.json";
import OpportunityCard from "../components/OpportunityCard";
import { type Opportunity, type Category } from "../types";

export default function CategoryPage() {
  const { category } = useParams();
  const catParam = category?.replace(/s$/, "");
  const catObj = (categoriesData as Category[]).find(c => c.id === catParam);
  
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 6;

  if (!catObj) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="text-3xl font-heading font-bold mb-4">Category Not Found</h1>
        <p className="text-gray-500 mb-8">This category does not exist.</p>
        <Link to="/opportunities" className="text-white bg-sa-green px-6 py-2 rounded-md hover:bg-sa-green/90">Browse All</Link>
      </div>
    );
  }

  const opps = useMemo(() => {
    return (opportunitiesData as Opportunity[])
      .filter(o => o.category === catObj.id && !o.expired)
      .sort((a, b) => new Date(a.closing_date).getTime() - new Date(b.closing_date).getTime());
  }, [catObj.id]);

  const totalPages = Math.ceil(opps.length / ITEMS_PER_PAGE);
  const paginatedOpps = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return opps.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [opps, currentPage]);

  return (
    <div>
      <section className="bg-sa-cloud py-12 px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl">{catObj.icon}</span>
            <h1 className="text-3xl font-heading font-bold text-sa-ink">
              {catObj.label} in South Africa
            </h1>
          </div>
          <p className="text-gray-600 max-w-2xl">{catObj.description}</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
           <h2 className="text-xl font-medium text-gray-600">{opps.length} Opportunities Open Now</h2>
        </div>
        
        {opps.length > 0 ? (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <p className="text-gray-500">No {catObj.label.toLowerCase()} available at the moment. Please check back later.</p>
          </div>
        )}
      </section>
    </div>
  );
}
