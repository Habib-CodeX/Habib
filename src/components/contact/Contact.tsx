'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquare, MapPin, Sparkles, Send, Code, User, FileText, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const email = 'habibaiengineer@gmail.com'; 
  const phoneNumber = '+923001234567'; 

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/meaowvzd', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
        setTimeout(() => setSubmitted(false), 4000);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="relative py-28 px-6 text-white select-none overflow-hidden bg-[#020409]"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(2, 4, 9, 0.75), rgba(2, 4, 9, 0.92)), url('images.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      
      {/* Subtle Grid Lines Overlay */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex flex-col justify-between rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-xl rounded-bl-xl bg-slate-900/60 border border-slate-700/60 p-8 sm:p-12 backdrop-blur-3xl shadow-2xl group hover:border-amber-400/80 transition-all duration-500"
        >
          {/* Dynamic Gold Accent Top Line */}
          <div className="absolute top-0 left-10 right-12 h-[2px] bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 opacity-70 rounded-full" />

          {/* Top Badge */}
          <div className="flex items-center justify-center mb-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-950/80 border border-amber-500/30 text-amber-300 text-[11px] font-semibold tracking-widest uppercase backdrop-blur-xl shadow-xl">
              <Sparkles className="w-3 h-3 text-amber-400 animate-pulse" />
              Contact
            </div>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-white text-center mb-3 relative z-10 tracking-tight font-sans">
            Let's Build <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent">Something Elite</span>
          </h2>

          <p className="text-slate-300 max-w-md mx-auto mb-8 relative z-10 text-xs sm:text-sm leading-relaxed tracking-wide text-center">
            Fill out the form below or connect via quick actions to start your project right away.
          </p>

          {/* Contact Interactive Form */}
          <form 
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 relative z-10 mb-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name Input */}
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-500">
                  <User className="w-4 h-4 text-amber-400/70" />
                </span>
                <input 
                  type="text" 
                  name="name" 
                  required
                  placeholder="Your Name" 
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950/70 border border-slate-800 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>

              {/* Email Input */}
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-500">
                  <Mail className="w-4 h-4 text-amber-400/70" />
                </span>
                <input 
                  type="email" 
                  name="email" 
                  required
                  placeholder="Your Email Address" 
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950/70 border border-slate-800 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>
            </div>

            {/* Purpose / Message Input */}
            <div className="relative">
              <span className="absolute top-3 left-3.5 pointer-events-none text-slate-500">
                <FileText className="w-4 h-4 text-amber-400/70" />
              </span>
              <textarea 
                name="message" 
                rows={3} 
                required
                placeholder="Project Purpose / Message Details..."
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950/70 border border-slate-800 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors resize-none"
              ></textarea>
            </div>

            {/* Submit Button & Success Status inside Page */}
            <div className="flex flex-col gap-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-extrabold text-xs sm:text-sm hover:from-amber-400 hover:to-orange-400 transition-all duration-300 shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <Send className="w-4 h-4" /> {submitting ? 'Sending...' : 'Submit'}
              </motion.button>

              {submitted && (
                <motion.div 
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold"
                >
                  <CheckCircle2 className="w-4 h-4" /> Submit Successful! Message sent to Habib.
                </motion.div>
              )}
            </div>
          </form>

          {/* Copy Email Alternative Bar */}
          <div className="flex items-center justify-center gap-3 mb-8 relative z-10">
            <button
              onClick={handleCopy}
              className="text-[11px] font-medium text-slate-400 hover:text-amber-300 transition-colors bg-slate-950/50 px-4 py-2 rounded-lg border border-slate-800/80 flex items-center gap-2 cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>{copied ? '✓ Email Copied Successfully!' : `Copy email: ${email}`}</span>
            </button>
          </div>

          {/* Compact Mini Icon Buttons at Bottom (Call, WhatsApp, Location) */}
          <div className="flex items-center justify-center gap-6 sm:gap-10 border-t border-slate-800/80 pt-6 relative z-10">
            {/* Call Button */}
            <a
              href={`tel:${+923146995305}`}
              className="flex flex-col items-center gap-1.5 group/btn"
              title="Direct Call"
            >
              <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-emerald-400 group-hover/btn:border-emerald-500 group-hover/btn:scale-110 transition-all shadow-inner">
                <Phone className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-semibold text-slate-400 group-hover/btn:text-white transition-colors">Call</span>
            </a>

            {/* WhatsApp Button */}
            <a
              href={`https://wa.me/${phoneNumber.replace('+', '')}?text=Hi%20Habib,%20I%20saw%20your%20portfolio%20and%20want%20to%20discuss%20a%20project.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1.5 group/btn"
              title="WhatsApp Chat"
            >
              <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-emerald-500 group-hover/btn:border-emerald-400 group-hover/btn:scale-110 transition-all shadow-inner">
                <MessageSquare className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-semibold text-slate-400 group-hover/btn:text-white transition-colors">WhatsApp</span>
            </a>

            {/* Location */}
            <div className="flex flex-col items-center gap-1.5 group/btn cursor-default" title="Location">
              <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-amber-400 group-hover/btn:scale-110 transition-all shadow-inner">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-semibold text-slate-400">Gujranwala, Pakistan</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}