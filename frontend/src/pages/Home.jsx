import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MessageSquare } from 'lucide-react';
import JobAdvertisements from '../components/home/JobAdvertisements';
import CurrentOpeningsBanner from '../components/home/CurrentOpeningsBanner';
import OpportunitySelector from '../components/home/OpportunitySelector';
import ContactForm from '../components/forms/ContactForm';
import AboutNaviVisaSection from '../components/home/AboutNaviVisaSection';
import GermanStandardsSection from '../components/home/GermanStandardsSection';

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>GLOBALFLY | Germany Overseas Recruitment & Career Consultancy</title>
        <meta
          name="description"
          content="Explore simplified career pathways to Germany for Nursing, Chef, and Engineering professionals with GLOBALFLY Consultancy Pvt Ltd."
        />
      </Helmet>

      <main className="min-h-screen">
        {/* 1. Header is rendered in App.jsx layout with Instagram icon */}

        {/* 2. Three Job Advertisements: Nursing, Chef, Other Opportunities */}
        <JobAdvertisements />

        {/* 3. Current Job Openings banner — clean intentional empty state */}
        <CurrentOpeningsBanner />

        {/* 4. Opportunity dropdown leading to the relevant contact form */}
        <OpportunitySelector />

        {/* 5. General Contact GLOBALFLY form */}
        <section id="general-contact" className="py-16 sm:py-20 bg-white border-b border-[#E2E8F0]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2563EB] bg-[#EFF6FF] px-3.5 py-1.5 rounded-full">
                <MessageSquare className="w-3.5 h-3.5" />
                Direct Inquiry
              </span>
              <h2 className="text-3xl sm:text-4xl font-black font-display text-[#0F172A] tracking-tight">
                Contact GLOBALFLY
              </h2>
              <p className="text-base text-[#64748B] max-w-xl mx-auto leading-relaxed">
                Have a question? Tell us how we can help, and our team will get back to you.
              </p>
            </div>

            <div className="bg-[#F8FAFC] rounded-3xl border border-[#E2E8F0] p-6 sm:p-10 shadow-sm text-left">
              <ContactForm />
            </div>
          </div>
        </section>

        {/* 6. German standards and recruitment guidance */}
        <GermanStandardsSection />

        {/* 7. About GLOBALFLY section inspired by NaviVisa (Directly before footer as in screenshot) */}
        <AboutNaviVisaSection />

        {/* 8. Existing footer is rendered in App.jsx layout */}
      </main>
    </>
  );
};

export default Home;
