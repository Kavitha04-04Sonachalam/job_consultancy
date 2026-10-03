import React from 'react';
import { Quote, Star } from 'lucide-react';
import Badge from '../ui/Badge';

export const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rohan Sharma',
      role: 'Registered Nurse',
      location: 'Frankfurt, Germany',
      text: 'The guidance provided by GlobalFly during my document translation and German B1 exam preparation made my journey smooth. The team gave realistic expectations at every step.',
      isSample: true
    },
    {
      name: 'Anil Kumar',
      role: 'Specialty Chef',
      location: 'Munich, Germany',
      text: 'GlobalFly evaluated my culinary diploma and matched me with a high-standard employer in Bavaria. Their pre-departure orientation helped me adapt easily.',
      isSample: true
    },
    {
      name: 'Priya Nair',
      role: 'Ausbildung Trainee (Healthcare)',
      location: 'Stuttgart, Germany',
      text: 'Joining an Ausbildung program in Germany was my dream. GlobalFly helped me understand the stipend structure, contract details, and embassy paperwork.',
      isSample: true
    }
  ];

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2563EB] bg-[#EFF6FF] px-3.5 py-1.5 rounded-full mb-3">
            Candidate Experiences
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] font-display tracking-tight">
            Stories from Our Candidates
          </h2>
          <p className="mt-3 text-base text-[#64748B] leading-relaxed">
            Read experience feedback from candidates guided through overseas career pathways.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] shadow-sm flex flex-col justify-between relative"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Quote className="w-8 h-8 text-[#2563EB]/20" />
                  <div className="flex text-[#F59E0B] gap-1">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed italic mb-6">
                  "{t.text}"
                </p>
              </div>

              <div className="border-t border-[#F1F5F9] pt-4">
                <h4 className="text-sm font-bold text-[#0F172A] font-display">
                  {t.name}
                </h4>
                <p className="text-xs font-medium text-[#2563EB]">
                  {t.role} • <span className="text-[#64748B]">{t.location}</span>
                </p>
                <div className="mt-2">
                  <Badge variant="demo" className="text-[10px]">
                    Sample testimonial — replace with approved client testimonial before production.
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
