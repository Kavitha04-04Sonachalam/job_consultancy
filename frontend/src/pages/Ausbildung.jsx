import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BookOpen, Compass, CheckCircle2, ShieldAlert } from 'lucide-react';
import Button from '../components/ui/Button';

export const Ausbildung = () => {
  const fields = [
    { title: 'Healthcare & Nursing Assistant', desc: '3-year dual nursing training leading to accredited German state nurse certification.' },
    { title: 'Hospitality & Culinary Crafts', desc: 'Hotel management, restaurant specialist, and professional chef training.' },
    { title: 'Mechatronics & Electronics', desc: 'Industrial machine setup, electrical installation, and robotics technician.' },
    { title: 'Logistics & Warehouse Operations', desc: 'Freight management, distribution systems, and supply chain logistics.' },
    { title: 'IT & Software Development', desc: 'System integration, software development, and network administration.' },
    { title: 'Technical Construction & Automotive', desc: 'Automotive mechanics, HVAC, plumbing, and structural trades.' }
  ];

  return (
    <>
      <Helmet>
        <title>Ausbildung in Germany | Dual Vocational Training | GlobalFly</title>
        <meta
          name="description"
          content="Learn about German dual vocational Ausbildung programs. Combine practical workplace training with vocational school studies while earning a monthly stipend."
        />
      </Helmet>

      <div className="bg-[#0F172A] text-white py-16 border-b border-[#1E293B]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F59E0B] bg-[#F59E0B]/10 px-3 py-1 rounded-full border border-[#F59E0B]/20">
            Dual Vocational Training
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-display">
            Ausbildung Programs in Germany
          </h1>
          <p className="text-sm sm:text-base text-[#94A3B8] max-w-2xl mx-auto">
            Earn a monthly stipend while obtaining an officially accredited German vocational qualification.
          </p>
        </div>
      </div>

      <div className="py-16 bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-10">
          
          <div className="p-4 rounded-xl bg-[#FFF7ED] border border-[#FFEDD5] text-xs text-[#C2410C] flex items-start gap-2.5">
            <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5" />
            <p>
              <strong>Legal Disclaimer:</strong> Ausbildung placements depend on employer contract offers, school admissions, German language certificates (B1/B2), and embassy visa approvals. GlobalFly provides structured consultancy and does not guarantee placement outcomes.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-[#E2E8F0] shadow-sm space-y-4">
            <h2 className="text-2xl font-bold font-display text-[#0F172A]">
              What is Ausbildung?
            </h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              Ausbildung is Germany’s renowned dual vocational education system. Trainees spend 3 to 4 days per week gaining practical experience with a German company, and 1 to 2 days at a vocational school (Berufsschule). Throughout the 3-year program, trainees receive a monthly stipend (typically €900 to €1,300/month) from the training employer.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-[#E2E8F0] shadow-sm space-y-6">
            <h3 className="text-xl font-bold font-display text-[#0F172A]">
              Popular Ausbildung Sectors
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {fields.map((f, i) => (
                <div key={i} className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                  <h4 className="text-base font-bold text-[#0F172A] font-display flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#F59E0B]" />
                    <span>{f.title}</span>
                  </h4>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center pt-4">
            <Link to="/check-eligibility">
              <Button variant="gold" size="lg" icon={Compass}>
                Check Your Ausbildung Eligibility
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};

export default Ausbildung;
