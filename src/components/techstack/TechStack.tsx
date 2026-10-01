'use client';

import { motion } from 'framer-motion';

const skills = [
  { name: 'Next.js 14/15', category: 'Framework' },
  { name: 'React', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Styling' },
  { name: 'GSAP Animations', category: 'Motion' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Python', category: 'AI / Backend' },
  { name: 'REST APIs', category: 'Architecture' },
  { name: 'AI/ML Integration', category: 'Intelligence' },
  { name: 'Git & GitHub', category: 'Version Control' },
  { name: 'Vercel', category: 'Deployment' },
  { name: 'UI/UX Architecture', category: 'Design' },
];

export default function TechStack() {
  return (
    <section className="py-20 px-6 border-y border-slate-800/60 bg-slate-950/40 relative">
      <div className="max-w-5xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-3"
        >
          Capabilities & Toolkit
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-4xl font-bold text-white mb-10"
        >
          Modern Tech Stack & Engineering Skills
        </motion.h2>

        <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              className="group relative px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800/90 transition-all duration-300 cursor-default shadow-sm flex items-center gap-2"
            >
              <span className="text-slate-200 text-sm font-semibold group-hover:text-cyan-400 transition-colors">
                {skill.name}
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-md bg-slate-800/80 text-slate-400 group-hover:text-cyan-300 group-hover:bg-cyan-950/50 transition-colors">
                {skill.category}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}