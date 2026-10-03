import React from 'react';
import { Helmet } from 'react-helmet-async';
import Services from '../components/home/Services';

export const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Recruitment & Consultancy Services | GlobalFly</title>
        <meta
          name="description"
          content="Full list of overseas recruitment and consultancy services: profile assessment, language guidance, document recognition, visa support, and pre-departure briefings."
        />
      </Helmet>

      <div className="bg-[#0F172A] text-white py-14 border-b border-[#1E293B]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2563EB] bg-[#2563EB]/20 px-3 py-1 rounded-full border border-[#2563EB]/40">
            Professional Guidance
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-display">
            GlobalFly Services
          </h1>
          <p className="text-sm sm:text-base text-[#94A3B8] max-w-2xl mx-auto">
            Comprehensive overseas recruitment solutions designed to support candidates and employers through every phase.
          </p>
        </div>
      </div>

      <Services />
    </>
  );
};

export default ServicesPage;
