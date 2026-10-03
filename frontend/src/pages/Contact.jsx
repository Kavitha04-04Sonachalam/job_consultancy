import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Mail, Phone, MessageSquare, Clock } from 'lucide-react';
import ContactForm from '../components/forms/ContactForm';
import Button from '../components/ui/Button';

export const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | GlobalFly Overseas Consultancy</title>
        <meta
          name="description"
          content="Get in touch with GlobalFly overseas recruitment consultants for Germany job opportunities, nursing placement, study applications, and employer hiring."
        />
      </Helmet>

      <div className="bg-[#0F172A] text-white py-14 border-b border-[#1E293B]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F59E0B] bg-[#F59E0B]/10 px-3 py-1 rounded-full border border-[#F59E0B]/20">
            Get in Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-display">
            Contact Our Consultancy Team
          </h1>
          <p className="text-sm sm:text-base text-[#94A3B8] max-w-2xl mx-auto">
            We are here to answer your questions regarding Germany career pathways, candidate eligibility, and recruitment requirements.
          </p>
        </div>
      </div>

      <div className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
            
            {/* Contact Details Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-3xl p-8 border border-[#E2E8F0] shadow-sm space-y-6">
                <h3 className="text-2xl font-bold font-display text-[#0F172A]">
                  Office & Communication
                </h3>

                <div className="space-y-4 text-sm text-[#475569]">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0F172A] block">Headquarters Office</strong>
                      <span>GlobalFly Overseas Recruitment Pvt. Ltd., India & Representation in Germany</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0F172A] block">Email Inquiries</strong>
                      <span>info@GlobalFlyrecruiters.com</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0F172A] block">Phone Lines</strong>
                      <span>+91 (0) 900 000 0000 / +49 (0) 30 0000 0000</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0F172A] block">Working Hours</strong>
                      <span>Monday – Saturday: 9:30 AM – 6:30 PM (IST)</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#F1F5F9]">
                  <a
                    href="https://wa.me/919000000000?text=Hello%20GlobalFly%2C%20I%20would%20like%20to%20inquire%20about%20Germany%20opportunities."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <Button variant="whatsapp" size="md" icon={MessageSquare} className="w-full justify-center">
                      Instant WhatsApp Chat
                    </Button>
                  </a>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white rounded-3xl p-6 border border-[#E2E8F0] shadow-sm text-center">
                <div className="h-48 rounded-2xl bg-[#F1F5F9] border border-[#CBD5E1] flex items-center justify-center text-xs text-[#64748B] font-semibold">
                  [ Interactive Map Placeholder — India & Germany Locations ]
                </div>
              </div>
            </div>

            {/* Contact Form Column */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 border border-[#E2E8F0] shadow-sm space-y-6">
                <h3 className="text-2xl font-bold font-display text-[#0F172A]">
                  Send Us a Direct Message
                </h3>
                <p className="text-xs text-[#64748B]">
                  Fill out the form below and one of our Germany recruitment consultants will get back to you within 24 hours.
                </p>
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
