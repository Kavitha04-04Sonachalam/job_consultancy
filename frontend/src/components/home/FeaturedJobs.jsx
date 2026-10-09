import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Briefcase, Clock, Languages, ArrowRight } from 'lucide-react';
import { jobsData } from '../../data/jobs';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

export const FeaturedJobs = () => {
  return (
    <section className="py-16 bg-white border-y border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2563EB] bg-[#EFF6FF] px-3.5 py-1.5 rounded-full mb-3">
              Core Recruitment Sectors
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] font-display tracking-tight">
              Featured Germany Pathways
            </h2>
            <p className="mt-2 text-base text-[#64748B] max-w-xl">
              Specialized Germany recruitment pathways for Nursing, Chef, and Engineering professionals.
            </p>
          </div>
          <Link to="/jobs" className="mt-4 md:mt-0">
            <Button variant="outline" size="md" icon={ArrowRight}>
              View All Opportunities
            </Button>
          </Link>
        </div>

        {/* 3 Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {jobsData.map((job) => (
            <div
              key={job.id}
              className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-6 hover:shadow-xl hover:border-[#2563EB]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header row */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <Badge variant="blue">
                    {job.badgeText}
                  </Badge>
                  <span className="text-xs font-semibold text-[#2563EB] bg-[#EFF6FF] px-2.5 py-1 rounded-full flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {job.country}
                  </span>
                </div>

                {/* Job Title */}
                <h3 className="text-xl font-bold text-[#0F172A] font-display leading-snug hover:text-[#2563EB] transition-colors">
                  <Link to={job.route}>{job.title}</Link>
                </h3>
                <p className="text-xs font-medium text-[#64748B] mt-1 mb-4">
                  {job.company} • {job.location}
                </p>

                {/* Key Tags */}
                <div className="space-y-2 mb-4 text-xs text-[#475569]">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                    <span>Sector: <strong>{job.category}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                    <span>Exp: <strong>{job.experience}</strong> • {job.employmentType}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Languages className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                    <span>Language: <strong>{job.language}</strong></span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-[#64748B] line-clamp-2 leading-relaxed border-t border-[#E2E8F0] pt-3 mb-6">
                  {job.shortDescription}
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <Link to={job.route} className="block w-full">
                  <Button variant="primary" size="md" icon={ArrowRight} className="w-full justify-center">
                    {job.ctaText}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
