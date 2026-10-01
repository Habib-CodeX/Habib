'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const fullText = 'Habib AI Engineer';
  const [displayText, setDisplayText] = useState('');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i <= fullText.length) {
        setDisplayText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(typingInterval);
        // Exact 1 Second Hold Pause
        setTimeout(() => {
          setIsDone(true);
          setTimeout(onComplete, 600);
        }, 1000);
      }
    }, 40);

    return () => clearInterval(typingInterval);
  }, [onComplete]);

  const renderStyledText = () => {
    const targetBase = 'Habib AI ';

    if (displayText.startsWith(targetBase)) {
      const engineerPart = displayText.slice(targetBase.length);
      return (
        <>
          <span className="text-white">Habib AI </span>
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            {engineerPart}
          </span>
        </>
      );
    }

    return <span className="text-white">{displayText}</span>;
  };

  return (
    <AnimatePresence mode="wait">
      {!isDone && (
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.18, filter: 'blur(12px)' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#03050c] text-white px-6 select-none overflow-hidden"
        >
          {/* Subtle Noise Texture Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

          {/* Dynamic Light Leak - Top Left */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.25, 0.4, 0.25],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-32 -left-32 w-[550px] h-[550px] bg-indigo-600/30 rounded-full blur-[150px] pointer-events-none"
          />

          {/* Dynamic Light Leak - Bottom Right */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.35, 0.2],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute -bottom-32 -right-32 w-[600px] h-[600px] bg-cyan-600/20 rounded-full blur-[160px] pointer-events-none"
          />

          {/* Center Glowing Accent Aura */}
          <div className="absolute w-[450px] h-[450px] bg-purple-600/15 rounded-full blur-[130px] pointer-events-none" />

          {/* Main Content */}
          <div className="relative z-10 flex items-center justify-center">
            <h1 className="font-jakarta text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              {renderStyledText()}
            </h1>

            {/* Glowing Cursor */}
            <motion.span
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ duration: 0.4, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-block w-1.5 h-8 sm:h-12 md:h-14 bg-indigo-500 ml-2 rounded-full shadow-[0_0_18px_rgba(99,102,241,1)]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}