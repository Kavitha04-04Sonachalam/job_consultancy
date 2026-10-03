import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, BookOpen, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

export const StudySection = () => {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2563EB] bg-[#EFF6FF] px-3.5 py-1.5 rounded-full mb-3">
            Higher Education & Vocational Training
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] font-display tracking-tight">
            Study & Ausbildung in Germany
          </h2>
          <p className="mt-3 text-base text-[#64748B] leading-relaxed">
            Choose between world-class university degree admissions or dual vocational training programs with monthly stipends.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
          {/* Card 1: Study in Germany */}
          <div className="bg-white rounded-3xl border border-[#E2E8F0] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div className="relative h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800"
                alt="University Study in Germany"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6 flex items-center gap-3 text-white">
                <div className="w-10 h-10 rounded-xl bg-[#2563EB] flex items-center justify-center text-white">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold font-display">Study in Germany</h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
              <p className="text-sm text-[#475569] leading-relaxed">
                Germany offers public university Bachelor's and Master's degree programs with low or zero tuition fees. Access top engineering, business, and computer science faculties.
              </p>

              <div className="pt-2">
                <Link to="/study-in-germany">
                  <Button variant="primary" size="md" icon={ArrowRight}>
                    Explore Study Programs
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Ausbildung */}
          <div className="bg-white rounded-3xl border border-[#E2E8F0] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div className="relative h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800"
                alt="German Ausbildung Training"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6 flex items-center gap-3 text-white">
                <div className="w-10 h-10 rounded-xl bg-[#F59E0B] flex items-center justify-center text-[#0F172A]">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold font-display">Ausbildung Programs</h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
              <p className="text-sm text-[#475569] leading-relaxed">
                Combine paid practical workplace training with vocational schooling. Earn a monthly stipend (approx. €900–€1,200/month) while mastering nursing, logistics, hospitality, or technical trades.
              </p>

              <div className="pt-2">
                <Link to="/ausbildung">
                  <Button variant="gold" size="md" icon={ArrowRight}>
                    Discover Ausbildung
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudySection;
