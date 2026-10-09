import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import JobDetails from './pages/JobDetails';
import Nursing from './pages/Nursing';
import Chef from './pages/Chef';
import Engineering from './pages/Engineering';
import WorkInGermany from './pages/WorkInGermany';
import StudyInGermany from './pages/StudyInGermany';
import Ausbildung from './pages/Ausbildung';
import ServicesPage from './pages/ServicesPage';
import About from './pages/About';
import Contact from './pages/Contact';
import Eligibility from './pages/Eligibility';
import CandidateRegister from './pages/CandidateRegister';
import Employer from './pages/Employer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import CookiePolicy from './pages/CookiePolicy';
import VisaDisclaimer from './pages/VisaDisclaimer';
import NotFound from './pages/NotFound';

export const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/jobs/nursing" element={<Nursing />} />
            <Route path="/jobs/chef" element={<Chef />} />
            <Route path="/jobs/engineering" element={<Engineering />} />
            <Route path="/jobs/:slug" element={<JobDetails />} />
            <Route path="/work-in-germany" element={<WorkInGermany />} />
            <Route path="/study-in-germany" element={<StudyInGermany />} />
            <Route path="/ausbildung" element={<Ausbildung />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/candidate/register" element={<CandidateRegister />} />
            <Route path="/employer" element={<Employer />} />
            <Route path="/check-eligibility" element={<Eligibility />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/visa-disclaimer" element={<VisaDisclaimer />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
