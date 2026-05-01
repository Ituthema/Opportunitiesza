import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ScamChecker() {
  const [feeRequested, setFeeRequested] = useState<string | null>(null);
  const [docsUpfront, setDocsUpfront] = useState<string | null>(null);
  const [whatsappOnly, setWhatsappOnly] = useState<string | null>(null);
  const [hasWebsite, setHasWebsite] = useState<string | null>(null);
  const [highStipend, setHighStipend] = useState<string | null>(null);
  const [hasChecked, setHasChecked] = useState(false);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    setHasChecked(true);
  };

  const getRiskAssessment = () => {
    let score = 0;
    const flags: string[] = [];

    if (feeRequested === "yes") {
      score += 10; // Auto high risk
      flags.push("Requested an application or administrative fee (this is strictly illegal for learnerships).");
    }
    if (docsUpfront === "yes") {
      score += 3;
      flags.push("Requested original documents or certified copies before an interview.");
    }
    if (whatsappOnly === "yes") {
      score += 4;
      flags.push("Communication is solely via WhatsApp or personal email (e.g. Gmail) instead of a corporate domain.");
    }
    if (hasWebsite === "no") {
      score += 4;
      flags.push("The company does not have a verifiable official website.");
    }
    if (highStipend === "yes") {
      score += 6;
      flags.push("The promised stipend is unusually high for an entry-level position (e.g. > R10,000 for a Matric learnership).");
    }

    let riskLevel = "Low";
    let colorClass = "bg-green-100 text-green-800 border-green-200";
    if (score >= 3 && score < 8) {
      riskLevel = "Medium";
      colorClass = "bg-amber-100 text-amber-800 border-amber-200";
    } else if (score >= 8) {
      riskLevel = "High";
      colorClass = "bg-red-100 text-red-800 border-red-200";
    }

    return { riskLevel, colorClass, flags };
  };

  return (
    <>
      <Helmet>
        <title>Scam Awareness Checker | OpportunitiesZA</title>
        <meta name="description" content="Verify whether a learnership or job opportunity might be a scam with our free awareness checker." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-block bg-sa-red/10 p-3 rounded-full border border-sa-red/20 mb-4">
            <span className="text-3xl">🛡️</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-heading font-extrabold text-sa-ink mb-4">Scam Awareness Checker</h1>
          <p className="text-gray-600">
            Fake learnerships are common in South Africa. Use this tool to identify red flags before you send personal documents or money.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-xl p-6 md:p-10 shadow-sm">
          <form onSubmit={handleCheck} className="space-y-8">
            
            <div className="space-y-4">
              <label className="block text-base font-semibold text-sa-ink">
                1. Did they ask you to pay an application, background check, or uniform fee?
              </label>
              <div className="flex gap-4">
                <button type="button" onClick={() => setFeeRequested("yes")} className={`flex-1 py-3 px-4 border rounded-md font-medium transition-colors ${feeRequested === "yes" ? "bg-sa-ink text-white border-sa-ink" : "bg-white text-gray-600 hover:bg-gray-50"}`}>Yes</button>
                <button type="button" onClick={() => setFeeRequested("no")} className={`flex-1 py-3 px-4 border rounded-md font-medium transition-colors ${feeRequested === "no" ? "bg-sa-ink text-white border-sa-ink" : "bg-white text-gray-600 hover:bg-gray-50"}`}>No</button>
              </div>
            </div>

            <div className="space-y-4">
              <label className="block text-base font-semibold text-sa-ink">
                2. Did they demand your ID or certificates via WhatsApp before you even had an interview?
              </label>
              <div className="flex gap-4">
                <button type="button" onClick={() => setDocsUpfront("yes")} className={`flex-1 py-3 px-4 border rounded-md font-medium transition-colors ${docsUpfront === "yes" ? "bg-sa-ink text-white border-sa-ink" : "bg-white text-gray-600 hover:bg-gray-50"}`}>Yes</button>
                <button type="button" onClick={() => setDocsUpfront("no")} className={`flex-1 py-3 px-4 border rounded-md font-medium transition-colors ${docsUpfront === "no" ? "bg-sa-ink text-white border-sa-ink" : "bg-white text-gray-600 hover:bg-gray-50"}`}>No</button>
              </div>
            </div>

            <div className="space-y-4">
              <label className="block text-base font-semibold text-sa-ink">
                3. Are they communicating ONLY via WhatsApp or a free email (like @gmail.com or @yahoo.com)?
              </label>
              <div className="flex gap-4">
                <button type="button" onClick={() => setWhatsappOnly("yes")} className={`flex-1 py-3 px-4 border rounded-md font-medium transition-colors ${whatsappOnly === "yes" ? "bg-sa-ink text-white border-sa-ink" : "bg-white text-gray-600 hover:bg-gray-50"}`}>Yes</button>
                <button type="button" onClick={() => setWhatsappOnly("no")} className={`flex-1 py-3 px-4 border rounded-md font-medium transition-colors ${whatsappOnly === "no" ? "bg-sa-ink text-white border-sa-ink" : "bg-white text-gray-600 hover:bg-gray-50"}`}>No</button>
              </div>
            </div>

            <div className="space-y-4">
              <label className="block text-base font-semibold text-sa-ink">
                4. Do they have a professional, working official website?
              </label>
              <div className="flex gap-4">
                <button type="button" onClick={() => setHasWebsite("yes")} className={`flex-1 py-3 px-4 border rounded-md font-medium transition-colors ${hasWebsite === "yes" ? "bg-sa-ink text-white border-sa-ink" : "bg-white text-gray-600 hover:bg-gray-50"}`}>Yes</button>
                <button type="button" onClick={() => setHasWebsite("no")} className={`flex-1 py-3 px-4 border rounded-md font-medium transition-colors ${hasWebsite === "no" ? "bg-sa-ink text-white border-sa-ink" : "bg-white text-gray-600 hover:bg-gray-50"}`}>No</button>
              </div>
            </div>

            <div className="space-y-4">
              <label className="block text-base font-semibold text-sa-ink">
                5. Is the promised salary/stipend unusually high for the role? (e.g. R15,000+ for a matric learnership)
              </label>
              <div className="flex gap-4">
                <button type="button" onClick={() => setHighStipend("yes")} className={`flex-1 py-3 px-4 border rounded-md font-medium transition-colors ${highStipend === "yes" ? "bg-sa-ink text-white border-sa-ink" : "bg-white text-gray-600 hover:bg-gray-50"}`}>Yes</button>
                <button type="button" onClick={() => setHighStipend("no")} className={`flex-1 py-3 px-4 border rounded-md font-medium transition-colors ${highStipend === "no" ? "bg-sa-ink text-white border-sa-ink" : "bg-white text-gray-600 hover:bg-gray-50"}`}>No</button>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={!feeRequested || !docsUpfront || !whatsappOnly || !hasWebsite || !highStipend}
              className="w-full bg-sa-green text-white font-bold py-4 rounded-md hover:bg-sa-green/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-4"
            >
              Analyze Answers
            </button>
          </form>

          {hasChecked && (
            <div className="mt-10 p-6 border rounded-lg bg-slate-50">
              {(() => {
                const { riskLevel, colorClass, flags } = getRiskAssessment();
                return (
                  <>
                    <div className={`inline-block px-4 py-1 rounded-full border mb-4 font-bold ${colorClass}`}>
                      {riskLevel} Risk Assessment
                    </div>
                    
                    {flags.length > 0 ? (
                      <>
                        <h3 className="font-heading font-bold text-lg mb-2">Red Flags Identified:</h3>
                        <ul className="space-y-2 mb-6">
                          {flags.map((flag, idx) => (
                            <li key={idx} className="flex gap-2 text-sm text-gray-700">
                              <span className="text-sa-red">❌</span> {flag}
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <p className="text-sm text-gray-700 mb-6">
                        We didn't detect any immediate red flags based on your answers. However, always remain cautious. Only apply through official company portals.
                      </p>
                    )}

                    <div className="bg-white p-4 border border-gray-200 rounded-md">
                      <h4 className="font-bold text-sa-ink text-sm mb-2">Safety Recommendations:</h4>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li>Never pay money to secure a job or learnership.</li>
                        <li>Do not send a photo of your ID or proof of residence via WhatsApp to unknown parties.</li>
                        <li>Verify the company name on the <a href="https://www.cipc.co.za" target="_blank" rel="noreferrer" className="text-sa-green underline">CIPC website</a>.</li>
                        <li>Check our directory to see if the opportunity is officially verified.</li>
                      </ul>
                    </div>
                  </>
                );
              })()}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
