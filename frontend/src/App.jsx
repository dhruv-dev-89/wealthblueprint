import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import InvestmentPlanning from "./pages/InvestmentPlanning";
import MutualFunds from "./pages/MutualFunds";
import SIP from "./pages/SIP";
import Insurance from "./pages/Insurance";
import TaxPlanning from "./pages/TaxPlanning";
import FinancialPlanning from "./pages/FinancialPlanning";
import RetirementPlanning from "./pages/RetirementPlanning";
import ChildPlanning from "./pages/ChildPlanning";
import EducationPlanning from "./pages/EducationPlanning";
import Blogs from "./pages/Blogs";
import Calculators from "./pages/Calculators";
import FAQs from "./pages/FAQs";
import OurStory from "./pages/OurStory";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/investment-plans" element={<InvestmentPlanning />} />
        <Route path="/mutual-funds" element={<MutualFunds />} />
        <Route path="/sip" element={<SIP />} />

        <Route path="/insurance" element={<Insurance />} />
        <Route path="/tax-planning" element={<TaxPlanning />} />

        <Route path="/financial-planning" element={<FinancialPlanning/>} />

        <Route path="/retirement-planning" element={<RetirementPlanning />} />

        <Route path="/child-planning" element={<ChildPlanning />} />

        <Route path="/education-planning" element={<EducationPlanning />} />

        <Route path="/blogs" element={<Blogs />} />

        <Route path="/calculators" element={<Calculators />} />

        <Route path="/faqs" element={<FAQs />} />

        <Route path="/our-story" element={<OurStory />}  />

        <Route path="/careers" element={<Careers />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        <Route path="/terms" element={<Terms />} />

      </Routes>
    </BrowserRouter>
  );
  
}

export default App;