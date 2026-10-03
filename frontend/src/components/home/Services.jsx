import React from 'react';
import { Link } from 'react-router-dom';
import {
  UserCheck,
  FileSpreadsheet,
  Search,
  Building2,
  Languages,
  FileText,
  FileCheck2,
  Compass,
  ArrowRight
} from 'lucide-react';
import { servicesData } from '../../data/services';

const iconMap = {
  UserCheck,
  FileSpreadsheet,
  Search,
  Building2,
  Languages,
  FileText,
  Passport: FileCheck2,
  Compass
};

export const Services = () => {
  return (
    <section className="py-20 bg-white border-y border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2563EB] bg-[#EFF6FF] px-3.5 py-1.5 rounded-full mb-3">
            End-to-End Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] font-display tracking-tight">
            Comprehensive Consultancy Services
          </h2>
          <p className="mt-3 text-base text-[#64748B] leading-relaxed">
            From your initial profile assessment to visa submission and arrival in Germany, we provide structured support every step of the way.
          </p>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {servicesData.map((service) => {
            const IconComp = iconMap[service.icon] || FileText;
            return (
              <div
                key={service.id}
                className="group p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:bg-white hover:border-[#2563EB]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center mb-5 group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-[#0F172A] font-display mb-2">
                    {service.title}
                  </h3>

                  <p className="text-xs text-[#64748B] leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                <Link
                  to="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2563EB] group-hover:translate-x-1 transition-transform"
                >
                  <span>Learn details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
