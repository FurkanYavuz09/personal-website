import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check, Github, Linkedin, ArrowRight } from 'lucide-react';
import { cvData } from '../data/cvData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Software Engineering Opportunity',
    message: '',
  });

  const [copied, setCopied] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide at least 10 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      subject: 'Software Engineering Opportunity',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-20 bg-[#090a0f]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
            Get In Touch
          </h2>
          <p className="text-sm text-neutral-400 font-sans max-w-2xl">
            Currently working at ETE Technology as C++ Software Engineer. Feel free to reach out directly for technical discussions, engineering inquiries, or collaborations via email, phone, or the contact form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct CV Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0e1017] border border-neutral-800 p-6 space-y-6">
              <h3 className="text-lg font-bold text-white font-sans border-b border-neutral-800 pb-3">
                Contact Details
              </h3>

              <div className="space-y-4 text-xs font-mono">
                {/* Email */}
                <div className="p-3 bg-neutral-900/60 border border-neutral-800 flex items-center justify-between">
                  <div className="space-y-0.5 truncate">
                    <span className="text-[10px] text-neutral-500 uppercase block">EMAIL</span>
                    <a
                      href={`mailto:${cvData.personal.email}`}
                      className="text-neutral-200 hover:text-emerald-400 truncate block font-sans"
                    >
                      {cvData.personal.email}
                    </a>
                  </div>
                  <button
                    onClick={() => copyToClipboard(cvData.personal.email, 'email')}
                    title="Copy email"
                    className="p-1.5 hover:text-emerald-400 text-neutral-500 cursor-pointer"
                  >
                    {copied === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="p-3 bg-neutral-900/60 border border-neutral-800 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-neutral-500 uppercase block">PHONE / WHATSAPP</span>
                    <a
                      href={`tel:${cvData.personal.phoneRaw}`}
                      className="text-neutral-200 hover:text-emerald-400 block font-sans"
                    >
                      {cvData.personal.phone}
                    </a>
                  </div>
                  <button
                    onClick={() => copyToClipboard(cvData.personal.phoneRaw, 'phone')}
                    title="Copy phone"
                    className="p-1.5 hover:text-emerald-400 text-neutral-500 cursor-pointer"
                  >
                    {copied === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="p-3 bg-neutral-900/60 border border-neutral-800 space-y-0.5">
                  <span className="text-[10px] text-neutral-500 uppercase block">LOCATION</span>
                  <div className="text-neutral-200 font-sans">
                    {cvData.personal.location}
                  </div>
                  <div className="text-[10px] text-neutral-500">Timezone: UTC+3 (TRT)</div>
                </div>
              </div>

              {/* Profiles */}
              <div className="pt-2 border-t border-neutral-800/80 space-y-2">
                <span className="text-[10px] text-neutral-500 uppercase font-mono block">
                  EXTERNAL PROFILES
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <a
                    href={cvData.personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white flex items-center gap-2 transition-colors"
                  >
                    <Github className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={cvData.personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white flex items-center gap-2 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Sharp Contact Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="bg-[#0e1017] border border-emerald-500/40 p-8 space-y-5">
                <div className="flex items-center gap-3 text-emerald-400 font-mono text-sm">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Message Sent Successfully</span>
                </div>
                <h3 className="text-2xl font-bold text-white font-sans">
                  Thank you, {formData.name}.
                </h3>
                <p className="text-sm text-neutral-300 font-sans leading-relaxed">
                  Your message regarding <span className="text-emerald-400 font-mono font-medium">{formData.subject}</span> has been received. I will review and reply to <span className="text-white font-medium">{formData.email}</span> shortly.
                </p>

                <div className="pt-4 flex flex-wrap gap-3">
                  <a
                    href={`mailto:${cvData.personal.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message)}`}
                    className="px-4 py-2 bg-emerald-400 hover:bg-emerald-300 text-black font-mono text-xs uppercase font-semibold transition-colors flex items-center gap-1.5"
                  >
                    <span>Open in Email Client</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={handleReset}
                    className="px-4 py-2 bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white font-mono text-xs uppercase transition-colors cursor-pointer"
                  >
                    Send Another
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-[#0e1017] border border-neutral-800 p-6 md:p-8 space-y-5 font-sans"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400">
                      Your Name <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full bg-[#090a0f] border border-neutral-800 px-3.5 py-2.5 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-emerald-400 transition-colors"
                    />
                    {errors.name && <p className="text-[11px] text-rose-400 font-mono">{errors.name}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400">
                      Your Email <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      className="w-full bg-[#090a0f] border border-neutral-800 px-3.5 py-2.5 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-emerald-400 transition-colors"
                    />
                    {errors.email && <p className="text-[11px] text-rose-400 font-mono">{errors.email}</p>}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400">
                    Subject / Topic
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-[#090a0f] border border-neutral-800 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-400 transition-colors"
                  >
                    <option value="Software Engineering Opportunity">Software Engineering Opportunity</option>
                    <option value="NLP / ML Project Inquiry">NLP / Machine Learning Project</option>
                    <option value="Backend Development Role">Backend Development Role</option>
                    <option value="Technical Collaboration">Technical Collaboration / Research</option>
                    <option value="General Hello">General Inquiry</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400">
                    Message <span className="text-emerald-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Furkan, I came across your profile and thesis work on NLP..."
                    className="w-full bg-[#090a0f] border border-neutral-800 px-3.5 py-2.5 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-emerald-400 transition-colors"
                  />
                  {errors.message && <p className="text-[11px] text-rose-400 font-mono">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-emerald-400 hover:bg-emerald-300 text-black font-mono text-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Transmit Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
