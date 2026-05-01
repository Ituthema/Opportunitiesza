import { Helmet } from "react-helmet-async";

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | OpportunitiesZA</title>
        <meta name="description" content="Privacy policy for OpportunitiesZA, outlining our data collection and protection practices." />
      </Helmet>
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-heading font-extrabold text-sa-ink mb-2">PRIVACY POLICY — OpportunitiesZA</h1>
        <p className="text-sm font-mono text-gray-500 mb-8 pb-8 border-b border-gray-200">Last updated: April 2026</p>

        <div className="prose prose-slate max-w-none">
          <h3 className="text-sa-green">WHAT INFORMATION WE COLLECT</h3>
          <p>OpportunitiesZA collects only the minimum information necessary to operate the site. We collect:</p>
          <ul>
            <li>Anonymous usage data via Google Analytics (page views, session duration, traffic sources). This data contains no personally identifiable information.</li>
            <li>Email addresses, voluntarily provided by users who subscribe to our newsletter.</li>
            <li>No ID documents, certificates, or personal records of any kind.</li>
          </ul>

          <h3 className="text-sa-green">HOW WE USE YOUR INFORMATION</h3>
          <ul>
            <li>Analytics data is used to understand which content is most useful and to improve the site experience.</li>
            <li>Email addresses are used solely to send the newsletter you subscribed to. We never sell, share, or rent email addresses to any third party.</li>
          </ul>

          <h3 className="text-sa-green">COOKIES</h3>
          <p>We use cookies for Google Analytics and Google AdSense. These cookies do not store personally identifiable information. You may decline cookies in your browser settings without affecting site functionality.</p>

          <h3 className="text-sa-green">GOOGLE ADSENSE</h3>
          <p>This site uses Google AdSense to display advertisements. Google may use cookies to serve ads based on prior visits to this and other websites. You can opt out of personalised advertising at www.aboutads.info.</p>

          <h3 className="text-sa-green">EMAIL NEWSLETTER</h3>
          <p>Newsletter subscription is voluntary. You may unsubscribe at any time using the link at the bottom of any newsletter email. Unsubscribe requests are processed within 48 hours.</p>

          <h3 className="text-sa-green">DATA RETENTION</h3>
          <p>Email addresses are retained until you unsubscribe. Analytics data is retained for 26 months per Google Analytics default settings.</p>

          <h3 className="text-sa-green">YOUR RIGHTS (POPIA)</h3>
          <p>Under the Protection of Personal Information Act (POPIA), South African residents have the right to access, correct, and request deletion of personal information we hold. Email us at contact@opportunitiesza.co.za to exercise these rights.</p>

          <h3 className="text-sa-green">CONTACT</h3>
          <p>For privacy-related queries: contact@opportunitiesza.co.za</p>
        </div>
      </div>
    </>
  );
}
