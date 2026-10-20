import React, { useState, useEffect } from 'react';
import { Mail, MessageCircle, Send, CheckCircle, Copy, Check, Clock, Calendar, Sparkles, MapPin, Phone } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Language } from '../types';

interface ContactSectionProps {
  lang: Language;
  prefilledScope?: {
    packageTitle: string;
    addOns: string[];
    totalCost: number;
    timeline: string;
  } | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  lang,
  prefilledScope,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceType: 'Shopify Store Development',
    budget: '$350 - $1,000',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookedCall, setBookedCall] = useState<string | null>(null);

  // If a scope is passed from the estimator, prepopulate the message
  useEffect(() => {
    if (prefilledScope) {
      setFormData((prev) => ({
        ...prev,
        serviceType: prefilledScope.packageTitle,
        message: `Hi Salman! I selected the "${prefilledScope.packageTitle}" package on your portfolio with add-ons: [${prefilledScope.addOns.join(', ') || 'None'}]. Estimated cost: $${prefilledScope.totalCost} (~${prefilledScope.timeline}). Let's discuss starting this project!`,
      }));
    }
  }, [prefilledScope]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
    });

    setSubmitted(true);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleBookSlot = (timeSlot: string) => {
    setBookedCall(timeSlot);
    confetti({ particleCount: 50, spread: 60 });
    setTimeout(() => {
      setBookingModalOpen(false);
    }, 1800);
  };

  return (
    <section id="contact" className="py-24 relative bg-neutral-950 overflow-hidden">
      {/* Glow lights */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 text-emerald-300 text-xs font-semibold tracking-wide">
            <Mail className="w-3.5 h-3.5 text-emerald-400" />
            <span>{lang === 'en' ? 'Start a Conversation' : 'যোগাযোগ করুন'}</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            {lang === 'en' ? (
              <>
                Let’s Build Something{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                  Extraordinary Together
                </span>
              </>
            ) : (
              <span className="font-bangla">
                আসুন একসাথে তৈরি করি আকর্ষণীয় ও সফল ই-কমার্স ব্র্যান্ড
              </span>
            )}
          </h2>
          <p className="text-neutral-400 text-xs sm:text-base leading-relaxed">
            {lang === 'en'
              ? 'Have a new Shopify store idea, need a fresh logo, or want to fix store speed? Fill out the form or reach out directly.'
              : 'নতুন শপিফাই স্টোর তৈরি, ইউনিক লোগো ডিজাইন অথবা স্টোর স্পিড বাড়ানোর জন্য সরাসরি যোগাযোগ করুন।'}
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Info Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Connect Card */}
            <div className="p-6 sm:p-7 rounded-3xl glass-card border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-white">Direct Communication</h3>
              
              <div className="space-y-4">
                {/* Email item */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-neutral-900/80 border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] text-neutral-400">Direct Email</div>
                      <div className="text-xs sm:text-sm font-semibold text-white font-mono">
                        {PERSONAL_INFO.email}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-2 rounded-lg bg-neutral-800 text-neutral-300 hover:text-emerald-400 hover:bg-neutral-700 transition-colors cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* WhatsApp item */}
                <a
                  href={`https://wa.me/8801852430258?text=${encodeURIComponent(
                    'Hello Salman! I saw your portfolio and would like to hire you for a project.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-neutral-900/80 border border-emerald-500/20 hover:border-emerald-500/50 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] text-neutral-400">WhatsApp (Direct)</div>
                      <div className="text-xs sm:text-sm font-semibold text-emerald-400 group-hover:underline font-mono">
                        01852430258
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-neutral-400 group-hover:text-emerald-300">
                    &lt; 15m reply
                  </span>
                </a>

                {/* Business Website: The Vylor */}
                <a
                  href="https://www.thevylor.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-neutral-900/80 border border-teal-500/20 hover:border-teal-500/50 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-teal-500/15 text-teal-400 flex items-center justify-center">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] text-neutral-400">Official Business Website</div>
                      <div className="text-xs sm:text-sm font-semibold text-teal-400 group-hover:underline font-mono">
                        www.thevylor.com
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-neutral-400 group-hover:text-teal-300">
                    Visit Site ↗
                  </span>
                </a>

                {/* Location */}
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-neutral-900/80 border border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-neutral-800 text-neutral-400 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-neutral-400">Base Location</div>
                    <div className="text-xs sm:text-sm font-semibold text-white">
                      {lang === 'en' ? PERSONAL_INFO.location : PERSONAL_INFO.locationBn}
                    </div>
                  </div>
                </div>
              </div>

              {/* Discovery Call Card */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-neutral-300">
                  <Calendar className="w-4 h-4 text-emerald-400" />
                  <span>{lang === 'en' ? 'Need a 1-on-1 Consultation?' : 'সরাসরি পরামর্শের জন্য কল বুক করুন'}</span>
                </div>
                <button
                  onClick={() => setBookingModalOpen(true)}
                  className="w-full py-2.5 px-4 rounded-xl border border-emerald-500/30 bg-emerald-950/30 hover:bg-emerald-900/40 text-emerald-300 text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span>{lang === 'en' ? 'Schedule Free 15-Min Discovery Call' : '১৫ মিনিটের ফ্রি মিটিং শিডিউল করুন'}</span>
                </button>
              </div>

            </div>

          </div>

          {/* Right Form Column (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-white/10 shadow-2xl">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-in fade-in zoom-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {lang === 'en' ? 'Message Sent Successfully!' : 'বার্তা সফলভাবে পাঠানো হয়েছে!'}
                  </h3>
                  <p className="text-neutral-300 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                    {lang === 'en'
                      ? `Thank you, ${formData.name}! Salman has received your inquiry. Expect a detailed response and roadmap within 2 to 4 hours.`
                      : `ধন্যবাদ ${formData.name}! সালমান আপনার বার্তা পেয়েছেন। খুব দ্রুত আপনার সাথে যোগাযোগ করা হবে।`}
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        serviceType: 'Shopify Store Development',
                        budget: '$350 - $1,000',
                        message: '',
                      });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-semibold cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {lang === 'en' ? 'Send a Project Inquiry' : 'প্রজেক্টের বিবরণ পাঠান'}
                  </h3>

                  {/* Prepopulated Banner Notice */}
                  {prefilledScope && (
                    <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs flex items-center justify-between">
                      <span className="flex items-center gap-1.5 font-medium">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Scope loaded from Estimator: <strong>${prefilledScope.totalCost}</strong></span>
                      </span>
                      <span className="text-[10px] text-emerald-400 font-mono">Ready to submit</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-neutral-300">
                        {lang === 'en' ? 'Your Name *' : 'আপনার নাম *'}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-white/10 focus:border-emerald-500 focus:outline-none text-white text-xs sm:text-sm placeholder:text-neutral-500"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-neutral-300">
                        {lang === 'en' ? 'Email Address *' : 'ইমেইল অ্যাড্রেস *'}
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@brand.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-white/10 focus:border-emerald-500 focus:outline-none text-white text-xs sm:text-sm placeholder:text-neutral-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Service Type */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-neutral-300">
                        {lang === 'en' ? 'Service Required' : 'প্রয়োজনীয় সেবা'}
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-white/10 focus:border-emerald-500 focus:outline-none text-white text-xs sm:text-sm"
                      >
                        <option value="Shopify Store Development">Shopify Store Development (Turnkey)</option>
                        <option value="Pixel Connector & Server-Side Tracking (CAPI)">Pixel Connector & Server-Side Tracking (CAPI)</option>
                        <option value="AI Integrator & Store Automation">AI Integrator & Store Automation</option>
                        <option value="Digital Marketing & Ad Funnels">Digital Marketing & ROAS Ad Funnels</option>
                        <option value="Theme Redesign & Sections">Theme Redesign & Custom Liquid</option>
                        <option value="Logo & Brand Identity">Logo & Brand Identity Pack</option>
                        <option value="Speed Optimization & Bug Fix">Speed Optimization (90+ PageSpeed)</option>
                        <option value="Complete Flagship Bundle">Full Bundle: Logo + Shopify Store</option>
                        <option value="Other / Consultation">Other / Custom Scope</option>
                      </select>
                    </div>

                    {/* Budget */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-neutral-300">
                        {lang === 'en' ? 'Approximate Budget' : 'আনুমানিক বাজেট'}
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-white/10 focus:border-emerald-500 focus:outline-none text-white text-xs sm:text-sm"
                      >
                        <option value="$120 - $300">$120 - $300 (Speed or Logo Starter)</option>
                        <option value="$350 - $600">$350 - $600 (Standard Store / Theme)</option>
                        <option value="$600 - $1,200">$600 - $1,200 (Custom Flagship)</option>
                        <option value="$1,200+">$1,200+ (Enterprise / Shopify Plus)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-neutral-300">
                      {lang === 'en' ? 'Project Details & Goals' : 'প্রজেক্টের বিবরণ'}
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={
                        lang === 'en'
                          ? 'Tell me about your product, your deadline, and what you want to achieve...'
                          : 'আপনার প্রোডাক্ট, ব্র্যান্ডের নাম এবং কী ধরনের কাজ চান বিস্তারিত লিখুন...'
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-white/10 focus:border-emerald-500 focus:outline-none text-white text-xs sm:text-sm placeholder:text-neutral-500 leading-relaxed"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-neutral-950 font-bold text-sm shadow-lg shadow-emerald-500/25 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{lang === 'en' ? 'Send Project Message' : 'বার্তা পাঠান'}</span>
                  </button>

                  <p className="text-center text-[11px] text-neutral-400">
                    {lang === 'en'
                      ? '🔒 No spam ever. Your project ideas and data are kept 100% confidential under NDA.'
                      : '🔒 আপনার দেওয়া সকল তথ্য সম্পূর্ণ নিরাপদ এবং গোপন রাখা হয়।'}
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>

      {/* Discovery Call Booking Modal */}
      {bookingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-md rounded-3xl bg-neutral-900 border border-white/10 shadow-2xl p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-emerald-400" />
                <h3 className="font-bold text-white text-base">Select a 15-Min Discovery Slot</h3>
              </div>
              <button
                onClick={() => setBookingModalOpen(false)}
                className="text-neutral-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            {bookedCall ? (
              <div className="text-center py-6 space-y-2">
                <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-bold text-white">Call Requested!</h4>
                <p className="text-xs text-neutral-300">
                  Confirmed slot for: <strong className="text-emerald-300">{bookedCall}</strong>. A calendar invite link will be sent to your email.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                <p className="text-xs text-neutral-300">
                  Pick a preferred time to discuss your Shopify store or logo architecture directly with Salman:
                </p>
                <div className="grid grid-cols-1 gap-2">
                  {[
                    'Tomorrow, 10:00 AM (EST) / 8:00 PM (BST)',
                    'Tomorrow, 02:00 PM (EST) / 12:00 AM (BST)',
                    'Thursday, 11:30 AM (EST) / 9:30 PM (BST)',
                    'Friday, 09:00 AM (EST) / 7:00 PM (BST)',
                  ].map((slot, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleBookSlot(slot)}
                      className="w-full text-left p-3 rounded-xl bg-neutral-950 border border-white/5 hover:border-emerald-500/50 hover:bg-neutral-800 transition-all text-xs font-medium text-neutral-200 flex items-center justify-between cursor-pointer"
                    >
                      <span>{slot}</span>
                      <Clock className="w-3.5 h-3.5 text-emerald-400" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

    </section>
  );
};
