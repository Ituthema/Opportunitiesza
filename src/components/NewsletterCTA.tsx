export default function NewsletterCTA() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="bg-sa-ink rounded-xl border border-gray-800 p-8 md:p-12 text-center text-white">
        <h2 className="text-3xl font-heading font-extrabold mb-4">Get Opportunities in Your Inbox</h2>
        <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
          Join thousands of South Africans receiving verified learnerships, bursaries, and career guides straight to their inbox every week.
        </p>

        <form className="max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col md:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Your email address" 
              required
              className="flex-1 px-4 py-3 rounded-md bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-sa-green"
            />
            <button 
              type="submit" 
              className="bg-sa-green font-bold px-6 py-3 rounded-md hover:bg-sa-green/90 transition-colors"
            >
              Subscribe Free
            </button>
          </div>
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm text-slate-400">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded border-slate-700 text-sa-green bg-slate-800 focus:ring-sa-green" defaultChecked />
              Learnerships
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded border-slate-700 text-sa-green bg-slate-800 focus:ring-sa-green" defaultChecked />
              Bursaries
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded border-slate-700 text-sa-green bg-slate-800 focus:ring-sa-green" defaultChecked />
              Internships
            </label>
          </div>
          <p className="text-xs text-slate-500 mt-6">No spam. Unsubscribe anytime. We protect your privacy.</p>
        </form>
      </div>
    </section>
  );
}
