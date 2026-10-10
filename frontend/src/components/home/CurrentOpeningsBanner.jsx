import React from 'react';
import { Briefcase, Clock, ShieldCheck, CheckCircle2, BellRing } from 'lucide-react';
import currentJobOpenings from '../../data/openings';

export const CurrentOpeningsBanner = () => {
  const hasOpenings = currentJobOpenings && currentJobOpenings.length > 0;

  return (
    <section className="py-14 sm:py-16 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2563EB] bg-[#EFF6FF] px-3.5 py-1.5 rounded-full">
            <Briefcase className="w-3.5 h-3.5" />
            Germany Vacancy Registry
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] font-display tracking-tight">
            Current Job Openings
          </h2>
          <p className="text-sm text-[#64748B] max-w-xl mx-auto">
            Direct vacancy listings updated in real time from our network of accredited German employers.
          </p>
        </div>

        {hasOpenings ? (
          /* When real openings are populated */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentJobOpenings.map((job) => (
              <div
                key={job.id}
                className="p-6 bg-white rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow text-left"
              >
                <h3 className="text-lg font-bold text-[#0F172A]">{job.title}</h3>
                <p className="text-xs text-[#64748B] mt-1">{job.company} • {job.location}</p>
                <p className="text-xs text-[#475569] mt-3">{job.description}</p>
              </div>
            ))}
          </div>
        ) : (
          /* Intentional Clean Empty State */
          <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-[#E2E8F0] p-8 sm:p-10 shadow-sm text-left">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              
              <div className="w-14 h-14 rounded-2xl bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] flex items-center justify-center shrink-0 shadow-inner">
                <BellRing className="w-7 h-7 text-[#2563EB]" />
              </div>

              <div className="space-y-2 flex-grow">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-md bg-[#FEF3C7] text-[#92400E]">
                    Upcoming Batch Notice
                  </span>
                  <span className="text-xs text-[#64748B] font-medium flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#2563EB]" /> Verified intake cycles
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold font-display text-[#0F172A]">
                  New Openings Are Updated Directly Through Employer Hiring Cycles
                </h3>

                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  We do not display simulated or unverified job listings. Real-time vacancies in German healthcare, gastronomy, and engineering are published as employer quotas are confirmed. Candidates who register below receive early candidate profiling and priority notification when matching roles become available.
                </p>
              </div>
            </div>

            {/* Quality Standards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-[#F1F5F9]">
              <div className="flex items-center gap-2.5 text-xs text-[#334155] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span>100% Verified German Employers</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#334155] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span>Zero Fictitious Postings</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#334155] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span>Early Pre-Screening Support</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default CurrentOpeningsBanner;
