import React from 'react';
import { Helmet } from 'react-helmet-async';
import AboutSection from '../components/home/AboutSection';
import WhyChooseUs from '../components/home/WhyChooseUs';

export const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | GlobalFly Overseas Recruitment</title>
        <meta
          name="description"
          content="GlobalFly is an India-based overseas recruitment and consultancy company focused on legitimate Germany employment, study, and Ausbildung pathways."
        />
      </Helmet>

      <div className="bg-[#0F172A] text-white py-14 border-b border-[#1E293B]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F59E0B] bg-[#F59E0B]/10 px-3 py-1 rounded-full border border-[#F59E0B]/20">
            About GlobalFly
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-display">
            Your Path to Germany
          </h1>
          <p className="text-sm sm:text-base text-[#94A3B8] max-w-2xl mx-auto">
            Ethical, transparent, and structured overseas recruitment consultancy for global professionals.
          </p>
        </div>
      </div>

      <AboutSection />
      <WhyChooseUs />
    </>
  );
};

export default About;
