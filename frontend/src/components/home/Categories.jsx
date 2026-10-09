import React from 'react';
import { Link } from 'react-router-dom';
import { HeartPulse, UtensilsCrossed, Wrench, ArrowRight } from 'lucide-react';
import { categoriesData } from '../../data/categories';

const iconMap = {
  HeartPulse,
  UtensilsCrossed,
  Wrench
};

export const Categories = () => {
  return (
    <section className="py-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2563EB] bg-[#EFF6FF] px-3.5 py-1.5 rounded-full mb-3">
            Primary Placement Domains
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] font-display tracking-tight">
            Explore Core Germany Sectors
          </h2>
          <p className="mt-3 text-base text-[#64748B] leading-relaxed">
            Specialized overseas recruitment programs for Nursing Professionals, Chefs & Culinary Specialists, and Engineering Professionals.
          </p>
        </div>

        {/* 3 Domain Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {categoriesData.map((cat) => {
            const IconComponent = iconMap[cat.iconName] || Wrench;
            return (
              <div
                key={cat.id}
                className="group relative bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Category Image Header */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-[#0F172A]/20 to-transparent" />
                  <span className="absolute top-3 right-3 text-[11px] font-bold text-white bg-[#0F172A]/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    {cat.demand}
                  </span>
                  <div className="absolute bottom-3 left-4 flex items-center gap-2.5 text-white">
                    <div className="w-9 h-9 rounded-xl bg-[#2563EB] flex items-center justify-center shadow-md">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold font-display leading-snug">
                      {cat.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-sm text-[#475569] leading-relaxed">
                    {cat.description}
                  </p>
                  
                  <Link
                    to={cat.route}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#2563EB] group-hover:text-[#1D4ED8] transition-colors pt-2"
                  >
                    <span>View Opportunities</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
