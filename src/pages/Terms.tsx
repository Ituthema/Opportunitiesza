import { Helmet } from "react-helmet-async";

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms of Use | OpportunitiesZA</title>
        <meta name="description" content="Terms of Use for OpportunitiesZA." />
      </Helmet>
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-heading font-extrabold text-sa-ink mb-6">Terms of Use</h1>
        
        <div className="prose prose-slate max-w-none">
          <p>
            By accessing and using OpportunitiesZA, you agree to comply with and be bound by the following terms and conditions of use.
          </p>

          <h3 className="text-sa-green">Content Accuracy</h3>
          <p>
            The content of the pages of this website is for your general information and use only. It is subject to change without notice. We strive to provide accurate and up-to-date information regarding career opportunities, but we do not provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness, or suitability of the information found or offered on this website for any particular purpose.
          </p>

          <h3 className="text-sa-green">User Responsibilities</h3>
          <p>
            Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services, or information available through this website meet your specific requirements. Always verify application details and deadlines directly with the official employer or institution.
          </p>

          <h3 className="text-sa-green">External Links</h3>
          <p>
            From time to time, this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).
          </p>

          <h3 className="text-sa-green">Modifications</h3>
          <p>
             OpportunitiesZA may revise these terms of use for its website at any time without notice. By using this website, you are agreeing to be bound by the then-current version of these Terms of Use.
          </p>
        </div>
      </div>
    </>
  );
}
