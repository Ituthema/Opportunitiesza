import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-sa-ink text-slate-400 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <Link to="/" className="font-heading font-extrabold text-white text-lg flex items-center gap-2 mb-4">
            🧭 OpportunitiesZA
          </Link>
          <p className="text-sm mb-4">
            South Africa's trusted guide to learnerships, bursaries, internships, and SETA opportunities. Verified. Free. Updated daily.
          </p>
          <div className="text-xs space-y-1">
            <p>✓ We never collect your documents</p>
            <p>✓ We never charge application fees</p>
            <p>✓ All listings link to official sources</p>
          </div>
        </div>
        
        <div>
          <h3 className="font-heading text-white text-sm mb-4">Opportunities</h3>
          <div className="flex flex-col space-y-2">
            <Link to="/learnerships" className="text-sm hover:text-white transition-colors">Learnerships</Link>
            <Link to="/bursaries" className="text-sm hover:text-white transition-colors">Bursaries</Link>
            <Link to="/internships" className="text-sm hover:text-white transition-colors">Internships</Link>
            <Link to="/apprenticeships" className="text-sm hover:text-white transition-colors">Apprenticeships</Link>
            <Link to="/tvet-pathways" className="text-sm hover:text-white transition-colors">TVET Pathways</Link>
            <Link to="/opportunities" className="text-sm hover:text-white transition-colors">Browse All</Link>
          </div>
        </div>

        <div>
          <h3 className="font-heading text-white text-sm mb-4">Guides</h3>
          <div className="flex flex-col space-y-2">
            <Link to="/seta-guides/what-is-a-seta" className="text-sm hover:text-white transition-colors">What Is a SETA?</Link>
            <Link to="/seta-guides/what-is-a-learnership" className="text-sm hover:text-white transition-colors">What Is a Learnership?</Link>
            <Link to="/seta-guides/how-to-apply-for-learnerships" className="text-sm hover:text-white transition-colors">How to Apply</Link>
            <Link to="/calendar" className="text-sm hover:text-white transition-colors">Deadline Calendar</Link>
          </div>
        </div>

        <div>
          <h3 className="font-heading text-white text-sm mb-4">Info</h3>
          <div className="flex flex-col space-y-2">
            <Link to="/about" className="text-sm hover:text-white transition-colors">About Us</Link>
            <Link to="/disclaimer" className="text-sm hover:text-white transition-colors">Disclaimer</Link>
            <Link to="/privacy-policy" className="text-sm hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-sm hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">
          <p>© 2026 OpportunitiesZA. For information purposes only. We are not an employer or recruitment agency.</p>
          <p className="mt-2 md:mt-0">South Africa 🇿🇦</p>
        </div>
      </div>
    </footer>
  );
}
