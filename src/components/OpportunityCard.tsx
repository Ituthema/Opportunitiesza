import { Link } from "react-router-dom";
import { type Opportunity } from "../types";
import { getDaysUntil, formatDate, getUrgencyClass, cn } from "../lib/utils";
import { useSavedOpportunities } from "../lib/storage";
import { Bookmark, BookmarkCheck } from "lucide-react";

export default function OpportunityCard({ opp }: { opp: Opportunity }) {
  const days = getDaysUntil(opp.closing_date);
  const urgencyClass = getUrgencyClass(days);
  const isExpired = days < 0;
  
  const { isSaved, toggleSave } = useSavedOpportunities();
  const saved = isSaved(opp.id);

  const categoryColors: Record<string, string> = {
    learnership: "bg-green-100 text-green-800",
    internship: "bg-blue-100 text-blue-800",
    bursary: "bg-amber-100 text-amber-800",
    apprenticeship: "bg-purple-100 text-purple-800"
  };

  return (
    <article className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-sa-green transition-all flex flex-col gap-3 relative">
      <button 
        onClick={(e) => { e.preventDefault(); toggleSave(opp.id); }}
        className="absolute top-4 right-4 text-gray-400 hover:text-sa-green transition-colors"
        aria-label={saved ? "Unsave opportunity" : "Save opportunity"}
      >
        {saved ? <BookmarkCheck className="w-5 h-5 text-sa-green fill-sa-green" /> : <Bookmark className="w-5 h-5" />}
      </button>

      <div className="flex items-center justify-between gap-2 flex-wrap pr-8">
        <span className={cn("px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide", categoryColors[opp.category] || "bg-gray-100 text-gray-800")}>
          {opp.category}
        </span>
        {opp.verified && (
          <span className="text-sa-green text-xs font-semibold">
            ✓ Verified
          </span>
        )}
      </div>
      
      <h3 className="font-heading text-lg font-bold leading-tight mt-1">
        <Link to={`/${opp.category}s/${opp.slug}`} className="text-sa-ink hover:text-sa-green">
          {opp.title}
        </Link>
      </h3>
      
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-600">
        <span>📍 {opp.province}</span>
        {opp.stipend && <span>💰 {opp.stipend}</span>}
      </div>
      
      <div className={cn("text-sm", urgencyClass)}>
        ⏳ Closing: {formatDate(opp.closing_date)}
        {(days >= 0 && days <= 7) && (
          <span className="bg-sa-red text-white px-2 py-0.5 rounded-full text-[11px] ml-2 font-normal">
            {days}d left
          </span>
        )}
      </div>
      
      <Link 
        to={`/${opp.category}s/${opp.slug}`} 
        className={cn(
          "inline-block mt-auto text-center px-4 py-2 rounded-md font-semibold text-sm transition-colors",
          isExpired 
            ? "bg-gray-200 text-gray-500 cursor-not-allowed pointer-events-none" 
            : "bg-sa-green text-white hover:bg-sa-green/90"
        )}
      >
        {isExpired ? "Closed" : "View & Apply"}
      </Link>
    </article>
  );
}
