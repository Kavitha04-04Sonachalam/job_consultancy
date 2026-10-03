import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Briefcase, Award } from 'lucide-react';
import Button from '../ui/Button';

export const SearchSection = () => {
  const navigate = useNavigate();
  const [industry, setIndustry] = useState('');
  const [experience, setExperience] = useState('');
  const [location, setLocation] = useState('Germany');

  const handleSearch = (e) => {
    e.preventDefault();
    const queryParams = new URLSearchParams();
    if (industry) queryParams.append('category', industry);
    if (experience) queryParams.append('experience', experience);
    if (location) queryParams.append('country', location);
    navigate(`/jobs?${queryParams.toString()}`);
  };

  return (
    <section className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 -mt-10 mb-16">
      <div className="bg-white rounded-3xl shadow-2xl border border-[#E2E8F0] p-6 sm:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 pb-4 border-b border-[#F1F5F9] gap-2">
          <div>
            <h3 className="text-xl font-bold text-[#0F172A] font-display">
              Quick Opportunity Search
            </h3>
            <p className="text-xs text-[#64748B]">
              Filter active Germany job vacancies, study options, and Ausbildung pathways.
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2563EB] bg-[#EFF6FF] px-3 py-1 rounded-full w-fit">
            <MapPin className="w-3.5 h-3.5" /> Primary Destination: Germany
          </span>
        </div>

        <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
          {/* Field 1: Industry */}
          <div className="md:col-span-4 space-y-1 text-left">
            <label className="flex items-center gap-1.5 text-xs font-bold text-[#0F172A] uppercase tracking-wider">
              <Briefcase className="w-3.5 h-3.5 text-[#2563EB]" /> Select Sector / Industry
            </label>
            <select
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className="w-full px-4 py-3 text-sm text-[#0F172A] bg-[#F8FAFC] border border-[#CBD5E1] rounded-xl outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 cursor-pointer"
            >
              <option value="">All Sectors</option>
              <option value="Healthcare">Healthcare & Nursing</option>
              <option value="Chef & Kitchen">Chef & Kitchen</option>
              <option value="Driving & Logistics">Driving & Logistics</option>
              <option value="Hospitality">Hospitality & Services</option>
              <option value="Skilled Trades">Skilled Trades</option>
              <option value="IT & Engineering">IT & Engineering</option>
              <option value="Manufacturing">Manufacturing & CNC</option>
              <option value="Education">Education</option>
              <option value="Ausbildung">Ausbildung Programs</option>
            </select>
          </div>

          {/* Field 2: Experience */}
          <div className="md:col-span-3 space-y-1 text-left">
            <label className="flex items-center gap-1.5 text-xs font-bold text-[#0F172A] uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 text-[#2563EB]" /> Experience Level
            </label>
            <select
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="w-full px-4 py-3 text-sm text-[#0F172A] bg-[#F8FAFC] border border-[#CBD5E1] rounded-xl outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 cursor-pointer"
            >
              <option value="">All Experience</option>
              <option value="Entry Level">Entry Level</option>
              <option value="1–3 Years">1–3 Years</option>
              <option value="3–5 Years">3–5 Years</option>
              <option value="5+ Years">5+ Years</option>
            </select>
          </div>

          {/* Field 3: Location */}
          <div className="md:col-span-3 space-y-1 text-left">
            <label className="flex items-center gap-1.5 text-xs font-bold text-[#0F172A] uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-[#2563EB]" /> Destination
            </label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-4 py-3 text-sm text-[#0F172A] bg-[#F8FAFC] border border-[#CBD5E1] rounded-xl outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 cursor-pointer"
            >
              <option value="Germany">Germany (Primary Focus)</option>
              <option value="Other Europe">Other EU Countries</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <Button
              type="submit"
              variant="primary"
              size="md"
              icon={Search}
              className="w-full py-3 justify-center"
            >
              Search
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SearchSection;
