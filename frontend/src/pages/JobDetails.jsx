import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MapPin, Briefcase, Clock, Languages, Compass, ArrowLeft, CheckCircle2, ShieldAlert } from 'lucide-react';
import { jobsData } from '../data/jobs';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import ApplyModal from '../components/jobs/ApplyModal';

export const JobDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  useEffect(() => {
    const found = jobsData.find((j) => j.slug === slug || j.id === slug);
    if (found) {
      setJob(found);
    } else {
      setJob(jobsData[0]); // Fallback
    }
  }, [slug]);

  if (!job) return null;

  return (
    <>
      <Helmet>
        <title>{`${job.title} in ${job.location}, Germany | GlobalFly`}</title>
        <meta name="description" content={job.shortDescription} />
      </Helmet>

      {/* Header Banner */}
      <div className="bg-[#0F172A] text-white py-12 border-b border-[#1E293B]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-4">
          <Link to="/jobs" className="inline-flex items-center gap-2 text-xs font-semibold text-[#94A3B8] hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Jobs Listing
          </Link>

          <div className="flex flex-wrap items-center gap-3">
            <Badge variant={job.isDemo ? 'demo' : 'blue'}>
              {job.badgeText || 'Demo Opportunity'}
            </Badge>
            <span className="text-xs font-semibold text-[#3B82F6] bg-[#2563EB]/20 px-3 py-1 rounded-full border border-[#2563EB]/40 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" /> {job.location}, {job.country}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold font-display">
            {job.title}
          </h1>

          <p className="text-sm sm:text-base text-[#94A3B8]">
            {job.company} • Employment Type: {job.employmentType}
          </p>
        </div>
      </div>

      <div className="py-12 bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Main Content */}
            <div className="lg:col-span-8 space-y-8">
              {/* Demo Disclaimer notice */}
              {job.isDemo && (
                <div className="p-4 rounded-xl bg-[#FFF7ED] border border-[#FFEDD5] text-xs text-[#C2410C] flex items-start gap-2.5">
                  <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>
                    <strong>Demo Vacancy Notice:</strong> This profile represents a sample opportunity illustrating typical German employer requirements. Positions change depending on current recruitment intakes.
                  </span>
                </div>
              )}

              {/* Overview Card */}
              <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 sm:p-8 space-y-4 shadow-sm">
                <h3 className="text-xl font-bold text-[#0F172A] font-display">
                  Role Overview
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  {job.fullDescription}
                </p>

                {/* Responsibilities */}
                {job.responsibilities && (
                  <div className="pt-4 border-t border-[#F1F5F9] space-y-3">
                    <h4 className="text-base font-bold text-[#0F172A] font-display">
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#475569]">
                      {job.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Requirements */}
                {job.requirements && (
                  <div className="pt-4 border-t border-[#F1F5F9] space-y-3">
                    <h4 className="text-base font-bold text-[#0F172A] font-display">
                      Qualifications & Requirements
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#475569]">
                      {job.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Benefits */}
                {job.benefits && (
                  <div className="pt-4 border-t border-[#F1F5F9] space-y-3">
                    <h4 className="text-base font-bold text-[#0F172A] font-display">
                      Benefits & Social Package
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#475569]">
                      {job.benefits.map((ben, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                          <span>{ben}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar Summary Card */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 space-y-5 shadow-sm sticky top-24">
                <h4 className="text-lg font-bold text-[#0F172A] font-display border-b border-[#F1F5F9] pb-3">
                  Summary Details
                </h4>

                <div className="space-y-3 text-xs text-[#475569]">
                  <div>
                    <span className="block text-[#94A3B8] font-medium">Estimated Compensation</span>
                    <strong className="text-sm text-[#0F172A] font-bold">{job.salary}</strong>
                  </div>
                  <div>
                    <span className="block text-[#94A3B8] font-medium">Required Experience</span>
                    <strong className="text-sm text-[#0F172A] font-bold">{job.experience}</strong>
                  </div>
                  <div>
                    <span className="block text-[#94A3B8] font-medium">Language Requirement</span>
                    <strong className="text-sm text-[#0F172A] font-bold">{job.language}</strong>
                  </div>
                  <div>
                    <span className="block text-[#94A3B8] font-medium">Location</span>
                    <strong className="text-sm text-[#0F172A] font-bold">{job.location}, {job.country}</strong>
                  </div>
                </div>

                <div className="pt-4 space-y-3">
                  <Button
                    variant="primary"
                    size="md"
                    onClick={() => setIsApplyModalOpen(true)}
                    className="w-full justify-center"
                  >
                    Apply Now for Opportunity
                  </Button>
                  <Link to="/check-eligibility" className="block w-full">
                    <Button variant="gold" size="md" icon={Compass} className="w-full justify-center">
                      Check Your Eligibility
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <ApplyModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        job={job}
      />
    </>
  );
};

export default JobDetails;
