import { useState } from "react";
import { Helmet } from "react-helmet-async";

export default function ChecklistGenerator() {
  const [category, setCategory] = useState("");
  const [hasGenerated, setHasGenerated] = useState(false);

  const getChecklist = () => {
    const universal = [
      "Certified Copy of South African ID (certified within last 3 months)",
      "Curriculum Vitae (CV) (maximum 2-3 pages)",
      "Motivation / Cover Letter (tailored to this specific opportunity)",
      "Proof of Residence (utility bill or affidavit, not older than 3 months)"
    ];

    let specific: string[] = [];

    switch (category) {
      case "learnership":
        specific = [
          "Certified Matric Certificate or latest academic record",
          "Proof of Unemployment (affidavit, if specifically requested)"
        ];
        break;
      case "bursary":
        specific = [
          "Proof of Household Income (parents/guardian payslips or sworn affidavit)",
          "Proof of Admission or Registration at an institution",
          "Academic Transcript or Matric results (must meet minimum % criteria)"
        ];
        break;
      case "internship":
        specific = [
          "Certified copy of your Degree or Diploma",
          "Full official Academic Transcript"
        ];
        break;
      case "apprenticeship":
        specific = [
          "Matric Certificate emphasizing Maths & Science results",
          "Medical Fitness Certificate (if working at heights or hazardous sites)"
        ];
        break;
    }

    return { universal, specific };
  };

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setHasGenerated(true);
  };

  return (
    <>
      <Helmet>
        <title>Application Checklist Generator | OpportunitiesZA</title>
        <meta name="description" content="Generate a custom checklist of required documents for learnership, bursary, and internship applications in South Africa." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-block bg-blue-100 p-3 rounded-full border border-blue-200 mb-4">
            <span className="text-3xl">📋</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-heading font-extrabold text-sa-ink mb-4">Document Checklist Generator</h1>
          <p className="text-gray-600">
            Never miss out because of a missing document. Select what you are applying for to generate a printable checklist.
          </p>
        </div>

        <div className="max-w-xl mx-auto bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
          <form onSubmit={handleGenerate} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-sa-ink mb-2">What are you applying for?</label>
              <select 
                value={category}
                onChange={(e) => { setCategory(e.target.value); setHasGenerated(false); }}
                className="w-full border border-gray-300 rounded-md px-4 py-3 bg-sa-cloud focus:outline-none focus:border-sa-green focus:ring-1 focus:ring-sa-green"
                required
              >
                <option value="" disabled>Select opportunity type</option>
                <option value="learnership">Learnership</option>
                <option value="bursary">Bursary</option>
                <option value="internship">Graduate Internship</option>
                <option value="apprenticeship">Apprenticeship / Trade</option>
              </select>
            </div>

            <button 
              type="submit" 
              disabled={!category}
              className="w-full bg-sa-green text-white font-bold py-3 rounded-md hover:bg-sa-green/90 transition-colors disabled:opacity-50"
            >
              Generate Checklist
            </button>
          </form>
        </div>

        {hasGenerated && (
          <div className="max-w-2xl mx-auto mt-12 bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <div className="bg-sa-ink text-white p-6">
              <h2 className="text-xl font-heading font-bold m-0 text-center">Your Application Checklist</h2>
            </div>
            
            <div className="p-8">
              {(() => {
                const docs = getChecklist();
                return (
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-wider text-sa-green mb-4">Universal Documents</h3>
                      <ul className="space-y-3">
                        {docs.universal.map((item, i) => (
                          <li key={i} className="flex gap-3">
                            <input type="checkbox" className="mt-1 w-4 h-4 text-sa-green rounded border-gray-300 focus:ring-sa-green" />
                            <span className="text-gray-700 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="border-t border-gray-100 pt-6">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-blue-600 mb-4">Specific Requirements</h3>
                      <ul className="space-y-3">
                        {docs.specific.map((item, i) => (
                          <li key={i} className="flex gap-3">
                            <input type="checkbox" className="mt-1 w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                            <span className="text-gray-700 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-md p-4 text-xs text-amber-800">
                      <strong>Certification Tip:</strong> Copies must be certified by a commissioner of oaths (e.g., SAPS, Post Office) and the certification stamp must not be older than 3 months. NEVER submit original documents!
                    </div>

                    <div className="text-center pt-4">
                       <button onClick={() => window.print()} className="bg-sa-ink text-white px-6 py-2 rounded-md text-sm hover:bg-slate-800 transition-colors">
                         🖨️ Print Checklist
                       </button>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
