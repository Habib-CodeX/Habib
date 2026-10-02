'use client';

import { motion, useMotionTemplate, useMotionValue, Variants } from 'framer-motion';
import { MouseEvent } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Terminal, Mail, Sparkles, Download } from 'lucide-react';

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center bg-[#03050a] text-white overflow-hidden px-6 py-20 select-none group"
    >
      {/* Top Right Download Resume Button */}
      <div className="absolute top-6 right-6 z-30">
        <a
          href="/HabibResume.pdf"
          download="Habib-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/80 text-slate-200 hover:text-white hover:border-emerald-500/50 hover:bg-slate-800 text-xs font-medium backdrop-blur-md transition-all duration-300 shadow-lg"
        >
          <Download className="w-3.5 h-3.5 text-emerald-400" />
          Download CV
        </a>
      </div>

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Dynamic Cursor Spotlight */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              rgba(99, 102, 241, 0.15),
              rgba(16, 185, 129, 0.05) 50%,
              transparent 80%
            )
          `,
        }}
      />

      {/* Cursor Grid Box Effect */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[linear-gradient(to_right,#6366f125_1px,transparent_1px),linear-gradient(to_bottom,#6366f125_1px,transparent_1px)] bg-[size:40px_40px]"
        style={{
          maskImage: useMotionTemplate`
            radial-gradient(
              180px circle at ${mouseX}px ${mouseY}px,
              black 20%,
              transparent 100%
            )
          `,
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              180px circle at ${mouseX}px ${mouseY}px,
              black 20%,
              transparent 100%
            )
          `,
        }}
      />

      {/* Main Grid Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
      >
        {/* LEFT COLUMN: Compact & Smart Text */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left gap-5">
          
          {/* Status Badge */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-300 text-xs font-semibold tracking-wide backdrop-blur-xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              Full-Stack AI & Web Engineer
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-tight leading-[1.1] text-white"
          >
            Hi, I'm <span className="text-white underline decoration-indigo-500/80 decoration-4 underline-offset-4">Habib</span>. <br />
            <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
              Building Intelligent Systems
            </span>
          </motion.h1>

          {/* Short & Clean Bio */}
          <motion.p
            variants={itemVariants}
            className="text-slate-300 text-sm sm:text-base max-w-lg font-normal leading-relaxed"
          >
            I engineer high-performance web applications with Next.js, modern UI animations, and seamless AI integrations.
          </motion.p>

          {/* Compact CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-emerald-500 text-white font-bold text-xs tracking-wider uppercase shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_28px_rgba(16,185,129,0.4)] transition-all duration-300 hover:scale-[1.02]"
            >
              Explore Works
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-slate-200 font-semibold text-xs tracking-wide hover:text-white hover:bg-slate-800/90 hover:border-slate-600 transition-all duration-300 backdrop-blur-md"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              Contact
            </a>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Compact Cutout Image (No Giant Card Box) */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-5 flex items-center justify-center relative"
        >
          <div className="relative w-64 h-80 sm:w-72 sm:h-96 flex items-center justify-center">
            {/* Soft Ambient Radial Glow */}
            <div className="absolute w-56 h-56 bg-gradient-to-tr from-indigo-500/20 to-emerald-500/20 rounded-full blur-3xl" />

            {/* Compact Cutout Transparent PNG */}
            <Image
              src="/profile.jpg"
              alt="Habib - AI Engineer"
              fill
              className="object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)] hover:scale-105 transition duration-500"
              priority
            />

            {/* Mini Float Badge */}
            <div className="absolute -bottom-2 right-0 z-20 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700/60 backdrop-blur-md shadow-xl flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-[11px] font-semibold text-slate-200">Next.js & AI</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}