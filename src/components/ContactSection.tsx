import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const { personalInfo, integrations, socialLinks } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Video Editing',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setStatusMessage('');

    try {
      const messageText = `🚀 *New Portfolio Inquiry*\n\n👤 *Name:* ${formData.name}\n📞 *Phone:* ${formData.phone}\n✉️ *Email:* ${formData.email}\n🎯 *Service:* ${formData.service}\n\n📝 *Message:*\n${formData.message}`;

      let sentViaTelegram = false;
      let sentViaGoogle = false;

      // 1. Try Telegram Bot if configured
      if (integrations.telegramBotToken && integrations.telegramChatId) {
        try {
          const tgUrl = `https://api.telegram.org/bot${integrations.telegramBotToken}/sendMessage`;
          const res = await fetch(tgUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              chat_id: integrations.telegramChatId,
              text: messageText,
              parse_mode: 'Markdown',
            }),
          });
          if (res.ok) sentViaTelegram = true;
        } catch (tgErr) {
          console.warn('Telegram send failed:', tgErr);
        }
      }

      // 2. Try Google Script / Sheet Webhook if configured
      if (integrations.googleScriptUrl) {
        try {
          await fetch(integrations.googleScriptUrl, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
          });
          sentViaGoogle = true;
        } catch (gsErr) {
          console.warn('Google script send failed:', gsErr);
        }
      }

      // Successful dispatch feedback
      setStatus('success');
      setStatusMessage(
        sentViaTelegram || sentViaGoogle
          ? 'Thank you! Your message was delivered successfully. I will get back to you shortly.'
          : 'Thank you! Your message has been received. You can also chat directly on WhatsApp or Email below.'
      );

      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: 'Video Editing',
        message: '',
      });
    } catch (err) {
      console.error(err);
      setStatus('error');
      setStatusMessage('Something went wrong. Please connect directly via WhatsApp or Email below.');
    }
  };

  const encodedWhatsAppMsg = encodeURIComponent(
    `Hello Mahadi Hasan Manon, I saw your portfolio and would like to discuss a project!`
  );

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#080b14]">
      {/* Glow backgrounds */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#3a86ff]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#3a86ff] px-3.5 py-1.5 rounded-full bg-[#3a86ff]/10 border border-[#3a86ff]/20">
            Let's Collaborate
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 tracking-tight">
            Have a Project in <span className="text-[#3a86ff]">Mind?</span>
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            Let's create something extraordinary together. Send a message, give me a call, or connect on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info & Quick Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-3xl p-8 border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#3a86ff]/15 text-[#3a86ff] flex items-center justify-center text-lg shrink-0 border border-[#3a86ff]/30">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                      Phone Number
                    </p>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-base font-bold text-white hover:text-[#3a86ff] transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                    <p className="text-[11px] text-slate-500 mt-0.5">Available 10 AM - 10 PM (BST)</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#3a86ff]/15 text-[#3a86ff] flex items-center justify-center text-lg shrink-0 border border-[#3a86ff]/30">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                      Email Address
                    </p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-base font-bold text-white hover:text-[#3a86ff] transition-colors break-all"
                    >
                      {personalInfo.email}
                    </a>
                    <p className="text-[11px] text-slate-500 mt-0.5">Quick response within 24 hours</p>
                  </div>
                </div>

                {/* Location: Work Place & Hometown */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#3a86ff]/15 text-[#3a86ff] flex items-center justify-center text-lg shrink-0 border border-[#3a86ff]/30">
                    <i className="fa-solid fa-briefcase"></i>
                  </div>
                  <div>
                    <p className="text-xs text-[#3a86ff] font-semibold uppercase tracking-wider">
                      Work Place
                    </p>
                    <p className="text-sm sm:text-base font-bold text-white">
                      {personalInfo.workplace || 'Holding No-99, Kazibari, Satarkul, Badda, Dhaka'}
                    </p>
                    <p className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
                      <i className="fa-solid fa-house text-slate-500"></i>
                      <span>Hometown: {personalInfo.hometown || 'Feni, Bangladesh'}</span>
                    </p>
                    <p className="text-[11px] text-slate-500 mt-1">
                      Accepting global remote & on-site briefs
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="mt-8 pt-6 border-t border-slate-800">
                <a
                  href={`https://wa.me/${integrations.whatsappNumber}?text=${encodedWhatsAppMsg}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-sm flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-600/25 transition-all"
                >
                  <i className="fa-brands fa-whatsapp text-lg"></i>
                  <span>Chat on WhatsApp Directly</span>
                </a>
              </div>
            </div>

            {/* Social Network Links */}
            <div className="glass-card rounded-2xl p-6 border border-slate-800 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Follow My Works
                </p>
                <p className="text-xs text-slate-500 mt-0.5">Behance • Facebook • LinkedIn</p>
              </div>

              <div className="flex items-center gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    title={social.name}
                    className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-[#3a86ff] text-slate-300 hover:text-white flex items-center justify-center text-sm transition-all"
                  >
                    <i className={social.iconClass}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-8 sm:p-10 border border-slate-800 relative">
              <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-8">
                Fill in the details below. Connected with Telegram Bot & Google Sheet automation.
              </p>

              {status === 'success' && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-sm flex items-center gap-3 animate-in fade-in">
                  <i className="fa-solid fa-circle-check text-lg shrink-0"></i>
                  <div>{statusMessage}</div>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 p-4 rounded-2xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-sm flex items-center gap-3 animate-in fade-in">
                  <i className="fa-solid fa-triangle-exclamation text-lg shrink-0"></i>
                  <div>{statusMessage}</div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Your Name <span className="text-[#3a86ff]">*</span>
                    </label>
                    <div className="relative">
                      <i className="fa-regular fa-user absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm"></i>
                      <input
                        id="contact-input-name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-[#3a86ff] focus:ring-1 focus:ring-[#3a86ff] text-white text-sm placeholder-slate-500 transition-all outline-none"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Phone Number <span className="text-[#3a86ff]">*</span>
                    </label>
                    <div className="relative">
                      <i className="fa-solid fa-phone absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm"></i>
                      <input
                        id="contact-input-phone"
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+880 1..."
                        className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-[#3a86ff] focus:ring-1 focus:ring-[#3a86ff] text-white text-sm placeholder-slate-500 transition-all outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Email Address <span className="text-[#3a86ff]">*</span>
                    </label>
                    <div className="relative">
                      <i className="fa-regular fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm"></i>
                      <input
                        id="contact-input-email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-[#3a86ff] focus:ring-1 focus:ring-[#3a86ff] text-white text-sm placeholder-slate-500 transition-all outline-none"
                      />
                    </div>
                  </div>

                  {/* Service Interested In */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Interested In
                    </label>
                    <div className="relative">
                      <i className="fa-solid fa-list-check absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm"></i>
                      <select
                        id="contact-select-service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-[#3a86ff] focus:ring-1 focus:ring-[#3a86ff] text-white text-sm transition-all outline-none"
                      >
                        <option value="Video Editing">Video Editing & Pacing</option>
                        <option value="Motion Graphics">Motion Graphics & VFX</option>
                        <option value="Viral Shorts">Viral Shorts / Reels</option>
                        <option value="Graphic Design">Graphic Design & Photo Manipulation</option>
                        <option value="Complete Package">Complete Post-Production Package</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Project Message / Brief <span className="text-[#3a86ff]">*</span>
                  </label>
                  <textarea
                    id="contact-input-message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, timeline, and vision..."
                    className="w-full p-4 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-[#3a86ff] focus:ring-1 focus:ring-[#3a86ff] text-white text-sm placeholder-slate-500 transition-all outline-none resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  id="contact-btn-submit"
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-[#3a86ff] to-[#1e60d5] hover:from-[#2a74ee] hover:to-[#174eb0] shadow-lg shadow-[#3a86ff]/30 hover:shadow-xl hover:shadow-[#3a86ff]/50 disabled:opacity-70 transition-all flex items-center justify-center gap-2 text-base"
                >
                  {status === 'submitting' ? (
                    <>
                      <i className="fa-solid fa-circle-notch fa-spin text-sm"></i>
                      <span>Sending Information...</span>
                    </>
                  ) : (
                    <>
                      <i className="fa-solid fa-paper-plane text-sm"></i>
                      <span>Submit Inquiry</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-slate-500 text-center">
                  🔒 Your information is confidential and will never be shared with third parties.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
