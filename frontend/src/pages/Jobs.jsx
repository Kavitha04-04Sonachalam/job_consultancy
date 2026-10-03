import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Search, Filter, MapPin, Briefcase, Clock, Languages, X } from 'lucide-react';
import { jobsData } from '../data/jobs';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import ApplyModal from '../components/jobs/ApplyModal';

export const Jobs = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [categoryFilter, setCategoryFilter] = useState(searchParams.get('category') || 'All');
  const [experienceFilter, setExperienceFilter] = useState(searchParams.get('experience') || 'All');
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');

  const [selectedJob, setSelectedJob] = useState(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  useEffect(() => {
    setCategoryFilter(searchParams.get('category') || 'All');
    setExperienceFilter(searchParams.get('experience') || 'All');
  }, [searchParams]);

  const filteredJobs = jobsData.filter((job) => {
    const matchesCategory =
      categoryFilter === 'All' ||
      job.category.toLowerCase().includes(categoryFilter.toLowerCase());

    const matchesExperience =
      experienceFilter === 'All' || job.experience === experienceFilter;

    const matchesSearch =
      !searchQuery ||
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesExperience && matchesSearch;
  });

  const clearFilters = () => {
    setCategoryFilter('All');
    setExperienceFilter('All');
    setSearchQuery('');
    setSearchParams({});
  };

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setIsApplyModalOpen(true);
  };

  return (
    <>
      <Helmet>
        <title>Jobs in Germany | GlobalFly Overseas Recruitment</title>
        <meta
          name="description"
          content="Search verified jobs in Germany including nursing, chefs, heavy vehicle drivers, warehouse associates, CNC operators, and engineering roles."
        />
      </Helmet>

      <div className="bg-[#0F172A] text-white py-14 border-b border-[#1E293B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F59E0B] bg-[#F59E0B]/10 px-3.5 py-1.5 rounded-full border border-[#F59E0B]/20">
            Live & Demo Opportunities
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display">
            Germany Career Vacancies
          </h1>
          <p className="text-sm sm:text-base text-[#94A3B8] max-w-2xl mx-auto">
            Explore active job profiles for qualified professionals in Germany. All roles require valid credential verification.
          </p>
        </div>
      </div>

      <div className="py-12 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters & Search Bar */}
          <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 mb-10 shadow-sm space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              {/* Search text input */}
              <div className="md:col-span-5 relative">
                <Search className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by job title, skill, or city..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-sm text-[#0F172A] bg-[#F8FAFC] border border-[#CBD5E1] rounded-xl outline-none focus:border-[#2563EB]"
                />
              </div>

              {/* Category Dropdown */}
              <div className="md:col-span-3">
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm text-[#0F172A] bg-[#F8FAFC] border border-[#CBD5E1] rounded-xl outline-none focus:border-[#2563EB]"
                >
                  <option value="All">All Categories</option>
                  <option value="Healthcare">Healthcare & Nursing</option>
                  <option value="Chef & Kitchen">Chef & Kitchen</option>
                  <option value="Driving & Logistics">Driving & Logistics</option>
                  <option value="Hospitality">Hospitality</option>
                  <option value="Manufacturing">Manufacturing</option>
                </select>
              </div>

              {/* Experience Dropdown */}
              <div className="md:col-span-2">
                <select
                  value={experienceFilter}
                  onChange={(e) => setExperienceFilter(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm text-[#0F172A] bg-[#F8FAFC] border border-[#CBD5E1] rounded-xl outline-none focus:border-[#2563EB]"
                >
                  <option value="All">All Experience</option>
                  <option value="Entry Level">Entry Level</option>
                  <option value="1–3 Years">1–3 Years</option>
                  <option value="3–5 Years">3–5 Years</option>
                  <option value="5+ Years">5+ Years</option>
                </select>
              </div>

              {/* Clear Filters */}
              <div className="md:col-span-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  icon={X}
                  className="w-full justify-center text-xs"
                >
                  Reset Filters
                </Button>
              </div>
            </div>
          </div>

          {/* Results Listing */}
          {filteredJobs.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-[#E2E8F0] space-y-4">
              <div className="w-12 h-12 bg-[#F1F5F9] text-[#64748B] rounded-full flex items-center justify-center mx-auto text-xl">
                🔍
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] font-display">No matching vacancies found</h3>
              <p className="text-sm text-[#64748B] max-w-sm mx-auto">
                Try broadening your filter criteria or submit an eligibility check for future openings.
              </p>
              <Button variant="primary" size="sm" onClick={clearFilters}>
                Clear All Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-sm hover:shadow-xl hover:border-[#CBD5E1] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <Badge variant={job.isDemo ? 'demo' : 'blue'}>
                        {job.badgeText || 'Demo Opportunity'}
                      </Badge>
                      <span className="text-xs font-semibold text-[#2563EB] bg-[#EFF6FF] px-2.5 py-1 rounded-full flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {job.country}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#0F172A] font-display leading-snug hover:text-[#2563EB] transition-colors">
                      <Link to={`/jobs/${job.slug}`}>{job.title}</Link>
                    </h3>
                    <p className="text-xs font-medium text-[#64748B] mt-1 mb-4">
                      {job.company} • {job.location}
                    </p>

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

                    <p className="text-xs text-[#64748B] line-clamp-2 leading-relaxed border-t border-[#F1F5F9] pt-3 mb-6">
                      {job.shortDescription}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <Link to={`/jobs/${job.slug}`} className="flex-1">
                      <Button variant="outline" size="sm" className="w-full justify-center">
                        View Details
                      </Button>
                    </Link>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => handleApplyClick(job)}
                      className="flex-1 justify-center"
                    >
                      Apply Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <ApplyModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        job={selectedJob}
      />
    </>
  );
};

export default Jobs;
