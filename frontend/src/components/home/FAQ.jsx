import React from 'react';
import { faqData } from '../../data/faq';
import Accordion from '../ui/Accordion';

export const FAQ = () => {
  return (
    <section className="py-20 bg-white border-y border-[#E2E8F0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2563EB] bg-[#EFF6FF] px-3.5 py-1.5 rounded-full mb-3">
            Common Inquiries
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] font-display tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-[#64748B]">
            Clear answers to common questions about Germany job opportunities, document requirements, and language prerequisites.
          </p>
        </div>

        <div className="text-left">
          <Accordion items={faqData} />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
