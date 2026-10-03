import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/home/Hero';
import SearchSection from '../components/home/SearchSection';
import Categories from '../components/home/Categories';
import FeaturedJobs from '../components/home/FeaturedJobs';
import AboutSection from '../components/home/AboutSection';
import Services from '../components/home/Services';
import WhyChooseUs from '../components/home/WhyChooseUs';
import HowItWorks from '../components/home/HowItWorks';
import GermanySection from '../components/home/GermanySection';
import StudySection from '../components/home/StudySection';
import LanguageSection from '../components/home/LanguageSection';
import EmployerSection from '../components/home/EmployerSection';
import Testimonials from '../components/home/Testimonials';
import FAQ from '../components/home/FAQ';
import FinalCTA from '../components/home/FinalCTA';
import ApplyModal from '../components/jobs/ApplyModal';

export const Home = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setIsApplyModalOpen(true);
  };

  return (
    <>
      <Helmet>
        <title>GlobalFly | Build Your Career in Germany</title>
        <meta
          name="description"
          content="Explore jobs in Germany, nursing recruitment, professional chef opportunities, heavy driving, study programs, and Ausbildung training with GlobalFly."
        />
      </Helmet>

      <main className="min-h-screen">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Quick Search */}
        <SearchSection />

        {/* 3. Career Categories */}
        <Categories />

        {/* 4. Featured Jobs */}
        <FeaturedJobs onApplyClick={handleApplyClick} />

        {/* 5. About GlobalFly */}
        <AboutSection />

        {/* 6. Services */}
        <Services />

        {/* 7. Why Choose Us */}
        <WhyChooseUs />

        {/* 8. How It Works */}
        <HowItWorks />

        {/* 9. Work in Germany */}
        <GermanySection />

        {/* 10. Study & Ausbildung */}
        <StudySection />

        {/* 11. German Language */}
        <LanguageSection />

        {/* 12. Employer Section */}
        <EmployerSection />

        {/* 13. Testimonials */}
        <Testimonials />

        {/* 14. FAQ */}
        <FAQ />

        {/* 15. Final CTA */}
        <FinalCTA />

        {/* Application Modal */}
        <ApplyModal
          isOpen={isApplyModalOpen}
          onClose={() => setIsApplyModalOpen(false)}
          job={selectedJob}
        />
      </main>
    </>
  );
};

export default Home;
