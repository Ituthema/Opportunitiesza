import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | OpportunitiesZA</title>
        <meta name="description" content="Learn more about OpportunitiesZA, South Africa's trusted guide to learnerships, bursaries, internships, and SETA opportunities." />
      </Helmet>
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-heading font-extrabold text-sa-ink mb-6">About OpportunitiesZA</h1>
        
        <div className="prose prose-slate max-w-none">
          <p className="text-lg">
            Welcome to OpportunitiesZA, South Africa's career opportunity intelligence platform for learnerships, bursaries, internships, and SETA-linked opportunities.
          </p>

          <h2 className="text-sa-green mt-8">Our Mission</h2>
          <p>
            We help South African job seekers, students, and graduates answer four critical questions instantly:
          </p>
          <ul>
            <li>What is this opportunity?</li>
            <li>Am I eligible?</li>
            <li>How do I apply?</li>
            <li>What should I do next?</li>
          </ul>

          <h2 className="text-sa-green mt-8">Why We Built This</h2>
          <p>
            Finding reliable, verified information about skills development and career opportunities in South Africa can be frustrating. We saw a need for a platform that doesn't just list jobs, but actually guides you through the process. We believe in providing structured decision support—helping you discover, filter, and take action without the noise and scams.
          </p>

          <h2 className="text-sa-green mt-8">Our Promise to You</h2>
          <ul>
            <li><strong>Verified Sources:</strong> We manually verify every opportunity we list, ensuring it comes from an official employer, government department, or institution.</li>
            <li><strong>Free to Use:</strong> You will never be asked to pay an application fee.</li>
            <li><strong>Privacy First:</strong> We never collect or store your personal documents.</li>
          </ul>

          <p className="mt-8">
            Start exploring our directory, use our tools to check your eligibility, and take the next step in your career journey safely.
          </p>
        </div>
      </div>
    </>
  );
}
