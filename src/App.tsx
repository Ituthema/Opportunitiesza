import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Directory from "./pages/Directory";
import CategoryPage from "./pages/CategoryPage";
import OpportunityDetail from "./pages/OpportunityDetail";
import Guides from "./pages/Guides";
import GuideDetail from "./pages/GuideDetail";
import Tools from "./pages/Tools";
import EligibilityChecker from "./pages/EligibilityChecker";
import ScamChecker from "./pages/ScamChecker";
import ChecklistGenerator from "./pages/ChecklistGenerator";
import BursaryChecker from "./pages/BursaryChecker";
import StipendBudget from "./pages/StipendBudget";
import InterviewPrep from "./pages/InterviewPrep";
import CoverLetterGenerator from "./pages/CoverLetterGenerator";
import Calendar from "./pages/Calendar";
import SavedOpportunities from "./pages/SavedOpportunities";
import About from "./pages/About";
import Terms from "./pages/Terms";
import Disclaimer from "./pages/Disclaimer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Placeholder from "./pages/Placeholder";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="opportunities" element={<Directory />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="tools" element={<Tools />} />
        <Route path="tools/eligibility-checker" element={<EligibilityChecker />} />
        <Route path="tools/scam-checker" element={<ScamChecker />} />
        <Route path="tools/checklist-generator" element={<ChecklistGenerator />} />
        <Route path="tools/bursary-checker" element={<BursaryChecker />} />
        <Route path="tools/stipend-budget" element={<StipendBudget />} />
        <Route path="tools/interview-prep" element={<InterviewPrep />} />
        <Route path="tools/cover-letter" element={<CoverLetterGenerator />} />
        <Route path="seta-guides" element={<Guides />} />
        <Route path="seta-guides/:slug" element={<GuideDetail />} />
        <Route path="saved" element={<SavedOpportunities />} />
        <Route path="about" element={<About />} />
        <Route path="disclaimer" element={<Disclaimer />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms" element={<Terms />} />
        <Route path=":category" element={<CategoryPage />} />
        <Route path=":category/:slug" element={<OpportunityDetail />} />
      </Route>
    </Routes>
  );
}

