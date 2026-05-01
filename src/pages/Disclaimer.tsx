import { Helmet } from "react-helmet-async";

export default function Disclaimer() {
  return (
    <>
      <Helmet>
        <title>Disclaimer | OpportunitiesZA</title>
        <meta name="description" content="Legal disclaimer for OpportunitiesZA, clarifying our status as an independent information platform." />
      </Helmet>
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-heading font-extrabold text-sa-ink mb-2">DISCLAIMER — OpportunitiesZA</h1>
        <p className="text-sm font-mono text-gray-500 mb-8 pb-8 border-b border-gray-200">Last updated: April 2026</p>

        <div className="prose prose-slate max-w-none">
          <h3 className="text-sa-green">INFORMATION PURPOSES ONLY</h3>
          <p>OpportunitiesZA is an independent information platform. All content published on this site is for informational and educational purposes only. We are not an employer, recruiter, placement agency, or government department.</p>

          <h3 className="text-sa-green">NOT AN OFFICIAL SETA OR GOVERNMENT PORTAL</h3>
          <p>This website is not affiliated with, endorsed by, or connected to any SETA, the Department of Higher Education and Training (DHET), NSFAS, or any government body. Official SETA communications are issued directly by SETAs and their accredited providers.</p>

          <h3 className="text-sa-green">ACCURACY OF INFORMATION</h3>
          <p>We make every effort to ensure that opportunity listings, closing dates, and eligibility requirements are accurate at the time of publishing. However, information can change without notice. Always verify information directly with the official source before submitting any application.</p>

          <h3 className="text-sa-green">NO FEES</h3>
          <p>We do not charge any fees for access to listings or information on this site. If you are asked to pay a fee to apply for any opportunity listed on this site, this is not from us — it is a scam. Report such requests to the South African Police Service (SAPS).</p>

          <h3 className="text-sa-green">NO DOCUMENT COLLECTION</h3>
          <p>We do not collect, store, or process any personal documents or identity information. Never send your ID, certificates, or personal details to this website. Apply only via the official links provided.</p>

          <h3 className="text-sa-green">EXTERNAL LINKS</h3>
          <p>This website contains links to third-party websites. We have no control over the content of those sites and are not responsible for their content, accuracy, or practices. Link inclusion does not imply endorsement.</p>

          <h3 className="text-sa-green">LIMITATION OF LIABILITY</h3>
          <p>OpportunitiesZA shall not be held liable for any loss, damage, or consequence arising from the use of information on this site or from applications made to opportunities listed here.</p>
        </div>
      </div>
    </>
  );
}
