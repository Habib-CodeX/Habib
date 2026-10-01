'use client';

import { motion, Variants } from 'framer-motion';
import { ExternalLink, ShieldCheck, GraduationCap, Building2, Sparkles, Code2, ArrowUpRight, Cpu } from 'lucide-react';

// Strict 4-number tuple type for Framer Motion Easing
const customEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Projects() {
  const projectsData = [
    {
      id: '01',
      title: 'Alpha Security',
      subtitle: 'AI Biometric Authentication Matrix',
      description:
        'High-performance passwordless facial authentication architecture engineered with TypeScript, React, and Next.js. Powered by advanced neural face-recognition engines (FaceCheck and Yandex AI integration), it features real-time liveness detection, high-frequency canvas scanning animations, and a secure PostgreSQL relational database backend managed via Prisma ORM for zero-latency credential verification.',
      tags: ['Next.js','TypeScript','Face-api.js','Node.js', 'React', 'Tailwind CSS', 'FaceCheck / Yandex AI', 'PostgreSQL', 'Motion', ],
      icon: ShieldCheck,
      shapeClass: 'rounded-tl-[4rem] rounded-br-[4rem] rounded-tr-xl rounded-bl-xl',
      borderColor: 'group-hover:border-amber-400/90 border-slate-800/80',
      glowShadow: 'group-hover:shadow-[0_0_50px_rgba(251,191,36,0.3)]',
      accentGradient: 'from-amber-400 via-yellow-500 to-orange-500',
      badgeColor: 'bg-amber-500/15 text-amber-300 border-amber-500/40',
      iconBg: 'bg-amber-500/10 border-amber-500/30 text-amber-400',
      liveLink: '#',
      githubLink: '#',
    },
    {
      id: '02',
      title: 'Matric AI Study Planner',
      subtitle: 'Smart Punjab Syllabus Ecosystem',
      description:
        'An advanced AI-powered academic platform built with Next.js, TypeScript, and Tailwind CSS, backed by a secure Supabase SQL database. It features a custom routine generation API, automated Punjab Board syllabus integration, and a smart 3-step interactive wizard designed to generate personalized daily study plans with persistent real-time progress tracking.',
      tags: ['Next.js','Node.js', 'TypeScript', 'Tailwind CSS', 'Supabase SQL','AI Engine','Chatbot API','Testing System', 'Vercel'],
      icon: GraduationCap,
      shapeClass: 'rounded-tr-[4rem] rounded-bl-[4rem] rounded-tl-2xl rounded-br-2xl',
      borderColor: 'group-hover:border-cyan-400/90 border-slate-800/80',
      glowShadow: 'group-hover:shadow-[0_0_50px_rgba(34,211,238,0.3)]',
      accentGradient: 'from-cyan-400 via-teal-400 to-blue-500',
      badgeColor: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/40',
      iconBg: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400',
      liveLink: 'https://matric-ai-ten.vercel.app/',
      githubLink: 'https://matric-ai-ten.vercel.app/',
    },
    {
      id: '03',
      title: 'Basra Interiors',
      subtitle: 'Commercial Architectural Visualization',
      description:
        'Sophisticated spatial design and multi-story structural layout showcase platform. Powered by robust SQL database architecture, ultra-responsive spatial grids, GSAP motion, and high-end interactive client presentation suites. Designed specifically to exhibit elite fiber-composite doors, waterproof paneling, and custom interior solutions with seamless administrative control and live interactive customer support.',
      tags: ['Next.js', 'React', 'Tailwind CSS', 'GSAP Motion', 'UI Architecture', 'SQL Database'],
      icon: Building2,
      shapeClass: 'rounded-l-[3.5rem] rounded-r-xl',
      borderColor: 'group-hover:border-emerald-400/90 border-slate-800/80',
      glowShadow: 'group-hover:shadow-[0_0_50px_rgba(52,211,153,0.3)]',
      accentGradient: 'from-emerald-400 via-green-500 to-teal-600',
      badgeColor: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/40',
      iconBg: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
      liveLink: '#',
      githubLink: '#',
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: customEase },
    },
  };

  return (
    <section 
      id="projects" 
      className="relative py-36 px-6 text-white select-none overflow-hidden bg-[#020409]"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(2, 4, 9, 0.75), rgba(2, 4, 9, 0.92)), url('1234.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: customEase }}
          className="flex flex-col items-center text-center gap-5 mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/60 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-widest uppercase backdrop-blur-xl shadow-xl">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            Next-Gen Engineering Systems
          </div>

          <h2 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight font-sans">
            Architecting <span className="bg-gradient-to-r from-amber-300 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">The Impossible</span>
          </h2>

          <p className="text-slate-300 text-base max-w-2xl font-normal leading-relaxed tracking-wide">
            Uncompromising high-performance code, luxury aesthetics, and futuristic biometric interfaces built for absolute dominance.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsData.map((project) => {
            const Icon = project.icon;

            return (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ duration: 0.4, ease: customEase }}
                className={`group relative flex flex-col justify-between ${project.shapeClass} bg-slate-900/50 border ${project.borderColor} p-8 backdrop-blur-3xl transition-all duration-500 shadow-2xl ${project.glowShadow}`}
              >
                <div className={`absolute top-0 left-10 right-14 h-[2px] bg-gradient-to-r ${project.accentGradient} opacity-70 group-hover:opacity-100 transition-opacity duration-500 rounded-full`} />

                <div className="flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <div className={`p-3.5 rounded-2xl bg-slate-950/80 border shadow-inner group-hover:scale-110 transition-all duration-300 ${project.iconBg}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 border border-slate-800 text-[11px] font-mono font-bold tracking-widest text-slate-300">
                      <Cpu className="w-3 h-3 text-slate-400 animate-pulse" />
                      SYS_{project.id}
                    </div>
                  </div>

                  <div>
                    <span className={`inline-block px-3 py-1 rounded-md text-[11px] font-bold tracking-wide uppercase border ${project.badgeColor} mb-3`}>
                      {project.subtitle}
                    </span>
                    <h3 className="text-2xl font-black text-white group-hover:text-slate-200 transition-colors duration-300 flex items-center justify-between">
                      {project.title}
                      <ArrowUpRight className="w-5 h-5 text-slate-400 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </h3>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed font-normal tracking-wide">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium px-3 py-1 rounded-lg bg-slate-950/60 border border-slate-800/80 text-slate-200 shadow-sm group-hover:border-slate-700 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 mt-8 border-t border-slate-800/80">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-slate-300 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 text-slate-400" />
                    Live Preview
                  </a>

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
                  >
                    <Code2 className="w-4 h-4" />
                    Source
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}