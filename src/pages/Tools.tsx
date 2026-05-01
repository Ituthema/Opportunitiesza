import { Link } from "react-router-dom";

export default function Tools() {
  const tools = [
    {
      id: "calendar",
      path: "/calendar",
      title: "Deadline Calendar",
      icon: "📅",
      description: "Visual calendar to track upcoming opportunity deadlines and identify which ones are closing soon."
    },
    {
      id: "eligibility",
      path: "/tools/eligibility-checker",
      title: "Eligibility Checker",
      icon: "✅",
      description: "Enter your qualifications and province to find learnerships and bursaries you qualify for."
    },
    {
      id: "scam",
      path: "/tools/scam-checker",
      title: "Scam Checker",
      icon: "🛡️",
      description: "Identify red flags for fake learnerships and how to verify legitimate employers."
    },
    {
      id: "checklist",
      path: "/tools/checklist-generator",
      title: "Checklist Generator",
      icon: "📋",
      description: "Generate a custom checklist of required documents for your specific application type."
    },
    {
      id: "bursary-checker",
      path: "/tools/bursary-checker",
      title: "Bursary Checker",
      icon: "🎲",
      description: "Estimate your chances of qualifying for NSFAS or corporate bursaries."
    },
    {
      id: "cover-letter",
      path: "/tools/cover-letter",
      title: "Cover Letter Generator",
      icon: "📝",
      description: "Fill in the details and generate a professional cover letter template for your applications."
    },
    {
      id: "interview-prep",
      path: "/tools/interview-prep",
      title: "Interview Simulator",
      icon: "🎤",
      description: "Practice answering common learnership interview questions using flashcards."
    },
    {
      id: "stipend-budget",
      path: "/tools/stipend-budget",
      title: "Stipend Budget Calculator",
      icon: "💰",
      description: "Calculate how to survive and manage expenses on a standard learnership stipend."
    }
  ];

  return (
    <div>
      <section className="bg-sa-cloud py-12 px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-heading font-bold text-sa-ink mb-4">
            Career Tools
          </h1>
          <p className="text-gray-600 max-w-2xl">
            Interactive tools to help you track deadlines, check requirements, and apply safely.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tools.map(t => (
            <Link key={t.id} to={t.path} className="bg-white border text-left border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md hover:border-sa-green transition-all group flex flex-col items-start gap-4">
               <div className="text-4xl bg-sa-green/10 p-4 rounded-xl border border-sa-green/20">
                 {t.icon}
               </div>
               <div>
                 <h2 className="text-xl font-heading font-bold text-sa-ink mb-2 group-hover:text-sa-green transition-colors">
                   {t.title}
                 </h2>
                 <p className="text-gray-600 text-sm">
                   {t.description}
                 </p>
               </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
