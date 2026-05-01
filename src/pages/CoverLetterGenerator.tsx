import { useState } from "react";
import { Helmet } from "react-helmet-async";

export default function CoverLetterGenerator() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    employerName: "",
    opportunityTitle: "",
    category: "learnership",
    qualifications: "",
    motivation: ""
  });
  const [hasGenerated, setHasGenerated] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setHasGenerated(true);
  };

  const letterDate = new Date().toLocaleDateString('en-ZA', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <>
      <Helmet>
        <title>Cover Letter Generator | OpportunitiesZA</title>
        <meta name="description" content="Generate a professional cover letter for your learnership, bursary, or internship applications in South Africa." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-block bg-purple-100 p-3 rounded-full border border-purple-200 mb-4">
            <span className="text-3xl">📝</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-heading font-extrabold text-sa-ink mb-4">Cover Letter Generator</h1>
          <p className="text-gray-600">
            A strong cover letter helps you stand out. Fill in the details below and we will format a professional motivation letter for your application.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 bg-white border border-gray-200 rounded-xl p-8 shadow-sm h-fit">
            <form onSubmit={handleGenerate} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-sa-ink mb-1">Your Full Name</label>
                <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full border rounded-md px-4 py-2 bg-sa-cloud focus:ring-sa-green focus:border-sa-green" placeholder="e.g. Siyabonga Dlamini" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-sa-ink mb-1">Contact Number</label>
                  <input required type="tel" name="contact" value={formData.contact} onChange={handleChange} className="w-full border rounded-md px-4 py-2 bg-sa-cloud focus:ring-sa-green focus:border-sa-green" placeholder="e.g. 071 234 5678" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-sa-ink mb-1">Email Address</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border rounded-md px-4 py-2 bg-sa-cloud focus:ring-sa-green focus:border-sa-green" placeholder="e.g. siya@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-sa-ink mb-1">Applying For (Type)</label>
                <select name="category" value={formData.category} onChange={handleChange} className="w-full border rounded-md px-4 py-2 bg-sa-cloud focus:ring-sa-green focus:border-sa-green">
                  <option value="learnership">Learnership</option>
                  <option value="bursary">Bursary / Funding</option>
                  <option value="internship">Internship</option>
                  <option value="apprenticeship">Apprenticeship</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-sa-ink mb-1">Opportunity Title</label>
                <input required type="text" name="opportunityTitle" value={formData.opportunityTitle} onChange={handleChange} className="w-full border rounded-md px-4 py-2 bg-sa-cloud focus:ring-sa-green focus:border-sa-green" placeholder="e.g. Electrical Engineering Learnership" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-sa-ink mb-1">Employer / Company Name</label>
                <input required type="text" name="employerName" value={formData.employerName} onChange={handleChange} className="w-full border rounded-md px-4 py-2 bg-sa-cloud focus:ring-sa-green focus:border-sa-green" placeholder="e.g. Eskom" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-sa-ink mb-1">Your Highest Qualification</label>
                <input required type="text" name="qualifications" value={formData.qualifications} onChange={handleChange} className="w-full border rounded-md px-4 py-2 bg-sa-cloud focus:ring-sa-green focus:border-sa-green" placeholder="e.g. Matric / N6 / National Diploma" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-sa-ink mb-1">Why do you want this? (1 Sentence)</label>
                <textarea required name="motivation" value={formData.motivation} onChange={handleChange} rows={2} className="w-full border rounded-md px-4 py-2 bg-sa-cloud focus:ring-sa-green focus:border-sa-green" placeholder="e.g. I have a passion for technology and want to develop practical skills." />
              </div>
              <button type="submit" className="w-full bg-sa-green text-white font-bold py-3 rounded-md hover:bg-sa-green/90 transition-colors mt-4">
                Generate Letter
              </button>
            </form>
          </div>

          <div className="lg:col-span-7">
            {hasGenerated ? (
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm text-gray-800 flex flex-col h-full">
                <div className="p-8 md:p-12 flex-1 font-sans text-sm md:text-base leading-relaxed whitespace-pre-wrap">
{formData.name}
{formData.contact}
{formData.email}

{letterDate}

{formData.employerName}
Human Resources / Recruitment Department

Dear Hiring Manager,

APPLICATION FOR {formData.opportunityTitle.toUpperCase()}

I am writing to formally express my interest in the {formData.opportunityTitle} program currently available at {formData.employerName}. 

I recently obtained my {formData.qualifications}, and I am eager to apply my academic background within a practical, structured environment. {formData.motivation} 

I am particularly drawn to {formData.employerName} because of your commitment to skills development. I am a dedicated, hardworking individual with a strong willingness to learn. By participating in this {formData.category}, I aim to develop the critical competencies needed to add value to your organisation and build a foundation for my career.

I have attached my supporting documents, including my CV and certified qualifications, for your review. I am fully available to commence immediately and welcome the opportunity to discuss my application in an interview.

Thank you for your time and consideration.

Yours sincerely,

{formData.name}
                </div>
                <div className="bg-sa-cloud border-t border-gray-200 p-4 shrink-0 flex justify-end gap-3 rounded-b-xl">
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText(document.querySelector('.whitespace-pre-wrap')?.textContent || '');
                      alert("Copied to clipboard!");
                    }}
                    className="bg-white border border-gray-300 text-sa-ink px-4 py-2 rounded-md font-medium hover:bg-gray-50 flex items-center gap-2"
                  >
                    Copy Text
                  </button>
                  <button onClick={() => window.print()} className="bg-sa-ink text-white px-4 py-2 rounded-md font-medium hover:bg-slate-800">
                    Print / Save to PDF
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-sa-cloud border border-gray-200 rounded-xl flex items-center justify-center p-12 text-center h-full min-h-[400px]">
                <p className="text-gray-500">Fill in the form on the left and click "Generate" to preview your professional cover letter here.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
