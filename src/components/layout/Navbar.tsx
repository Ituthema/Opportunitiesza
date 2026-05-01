import { Link } from "react-router-dom";
import { Compass, Menu, Search, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "../../lib/utils";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 flex-shrink-0 text-sa-ink">
          <Compass className="w-6 h-6 text-sa-green" />
          <span className="font-heading font-extrabold text-lg">OpportunitiesZA</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-sa-green transition-colors py-4">
              Opportunities <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full left-0 w-48 bg-white border border-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 flex flex-col z-50">
              <Link to="/opportunities" className="px-4 py-2 text-sm text-gray-700 hover:bg-sa-cloud hover:text-sa-green">Browse All</Link>
              <Link to="/learnerships" className="px-4 py-2 text-sm text-gray-700 hover:bg-sa-cloud hover:text-sa-green">Learnerships</Link>
              <Link to="/bursaries" className="px-4 py-2 text-sm text-gray-700 hover:bg-sa-cloud hover:text-sa-green">Bursaries</Link>
              <Link to="/internships" className="px-4 py-2 text-sm text-gray-700 hover:bg-sa-cloud hover:text-sa-green">Internships</Link>
              <Link to="/apprenticeships" className="px-4 py-2 text-sm text-gray-700 hover:bg-sa-cloud hover:text-sa-green">Apprenticeships</Link>
              <Link to="/tvet-pathways" className="px-4 py-2 text-sm text-gray-700 hover:bg-sa-cloud hover:text-sa-green">TVET Pathways</Link>
              <Link to="/graduates" className="px-4 py-2 text-sm text-gray-700 hover:bg-sa-cloud hover:text-sa-green">Graduate Programs</Link>
            </div>
          </div>
          
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-sa-green transition-colors py-4">
              Tools <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full left-0 w-64 bg-white border border-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 flex flex-col z-50">
              <Link to="/tools" className="px-4 py-2 text-sm text-gray-700 hover:bg-sa-cloud hover:text-sa-green font-semibold">View All Tools</Link>
              <Link to="/tools/cover-letter" className="px-4 py-2 text-sm text-gray-700 hover:bg-sa-cloud hover:text-sa-green">Cover Letter Generator</Link>
              <Link to="/tools/interview-prep" className="px-4 py-2 text-sm text-gray-700 hover:bg-sa-cloud hover:text-sa-green">Interview Simulator</Link>
              <Link to="/tools/stipend-budget" className="px-4 py-2 text-sm text-gray-700 hover:bg-sa-cloud hover:text-sa-green">Stipend Budget Calculator</Link>
              <Link to="/tools/scam-checker" className="px-4 py-2 text-sm text-gray-700 hover:bg-sa-cloud hover:text-sa-green">Scam Checker</Link>
              <Link to="/tools/bursary-checker" className="px-4 py-2 text-sm text-gray-700 hover:bg-sa-cloud hover:text-sa-green">Bursary Eligibility</Link>
              <Link to="/tools/eligibility-checker" className="px-4 py-2 text-sm text-gray-700 hover:bg-sa-cloud hover:text-sa-green">Learnership Eligibility</Link>
              <Link to="/tools/checklist-generator" className="px-4 py-2 text-sm text-gray-700 hover:bg-sa-cloud hover:text-sa-green">Application Checklist</Link>
            </div>
          </div>

          <Link to="/seta-guides" className="text-sm font-medium text-gray-600 hover:text-sa-green transition-colors py-4">SETA Guides</Link>
          <Link to="/calendar" className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-sa-green transition-colors py-4">
            <span>📅</span> Calendar
          </Link>
          
          <Link to="/saved" className="bg-sa-cloud text-sa-ink border border-gray-200 px-4 py-2 rounded-md text-sm font-semibold hover:bg-gray-100 transition-colors hidden lg:block">
            Saved
          </Link>
        </nav>

        <div className="flex items-center md:hidden gap-4">
          <Link to="/saved" className="text-sa-ink">
            Saved
          </Link>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-sa-ink">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col border-t border-gray-200 bg-white max-h-[80vh] overflow-y-auto shadow-inner">
          <div className="p-4 border-b border-gray-100">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Category</h3>
            <Link to="/opportunities" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 font-medium text-sa-ink hover:text-sa-green">Browse All Opportunities</Link>
            <Link to="/learnerships" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 font-medium text-gray-600 hover:text-sa-green">🎓 Learnerships</Link>
            <Link to="/bursaries" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 font-medium text-gray-600 hover:text-sa-green">📚 Bursaries</Link>
            <Link to="/internships" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 font-medium text-gray-600 hover:text-sa-green">💼 Internships</Link>
            <Link to="/apprenticeships" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 font-medium text-gray-600 hover:text-sa-green">🔧 Apprenticeships</Link>
          </div>
          
          <div className="p-4 border-b border-gray-100">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Tools</h3>
            <Link to="/tools" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 font-medium text-sa-ink hover:text-sa-green">🛠️ View All Tools</Link>
            <Link to="/tools/cover-letter" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-gray-600 hover:text-sa-green">Cover Letter Generator</Link>
            <Link to="/tools/interview-prep" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-gray-600 hover:text-sa-green">Interview Simulator</Link>
            <Link to="/tools/stipend-budget" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-gray-600 hover:text-sa-green">Stipend Budget</Link>
            <Link to="/tools/scam-checker" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-gray-600 hover:text-sa-green">Scam Checker</Link>
          </div>

          <div className="p-4">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Resources</h3>
            <Link to="/seta-guides" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 font-medium text-gray-600 hover:text-sa-green">📖 SETA Guides</Link>
            <Link to="/calendar" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 font-medium text-gray-600 hover:text-sa-green">📅 Deadline Calendar</Link>
          </div>
        </div>
      )}
    </header>
  );
}
