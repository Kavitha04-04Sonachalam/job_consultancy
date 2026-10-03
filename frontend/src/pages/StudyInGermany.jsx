import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { GraduationCap, BookOpen, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';

export const StudyInGermany = () => {
  return (
    <>
      <Helmet>
        <title>Study in Germany | Higher Education Guidance | GlobalFly</title>
        <meta
          name="description"
          content="Explore public university admissions in Germany. Low/zero tuition fees, top engineering, science, and business faculties."
        />
      </Helmet>

      <div className="bg-[#0F172A] text-white py-16 border-b border-[#1E293B]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2563EB] bg-[#2563EB]/20 px-3 py-1 rounded-full border border-[#2563EB]/40">
            Higher Education Pathway
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-display">
            Study in Germany
          </h1>
          <p className="text-sm sm:text-base text-[#94A3B8] max-w-2xl mx-auto">
            Access world-renowned public universities in Germany with low or no tuition fees and post-study work opportunities.
          </p>
        </div>
      </div>

      <div className="py-16 bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-10">
          
          <div className="bg-white rounded-3xl p-8 border border-[#E2E8F0] shadow-sm space-y-6">
            <h2 className="text-2xl font-bold font-display text-[#0F172A]">
              Why Study at German Public Universities?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[#475569]">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#0F172A] block font-bold">Low / Zero Tuition Fees</strong>
                  <span>Most state-funded public universities charge no tuition fees for domestic and international students.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#0F172A] block font-bold">18-Month Post-Study Visa</strong>
                  <span>Graduates receive an 18-month job-seeker visa to seek full-time employment in their field.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#0F172A] block font-bold">English-Taught Programs</strong>
                  <span>Numerous Master's degrees in engineering, IT, data science, and management are offered in English.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#0F172A] block font-bold">Part-Time Work Rights</strong>
                  <span>Students can work up to 120 full days (or 240 half days) per year during their studies.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-[#E2E8F0] shadow-sm text-center space-y-4">
            <h3 className="text-xl font-bold text-[#0F172A] font-display">
              Get Personal Guidance on German University Admissions
            </h3>
            <p className="text-sm text-[#64748B] max-w-xl mx-auto">
              Our education consultants assist with university selection, uni-assist application filing, document verification, and student visa guidance.
            </p>
            <div className="pt-2">
              <Link to="/contact">
                <Button variant="primary" size="lg" icon={MessageSquare}>
                  Talk to a Consultant
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default StudyInGermany;
