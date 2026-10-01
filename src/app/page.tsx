'use client';

import { useState } from 'react';

import Loader from '../components/Loader';
import Hero from '../components/hero/Hero';
import Projects from '../components/projects/Projects';
import Contact from '../components/contact/Contact';

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-[#03050c] min-h-screen text-white">
      {loading && <Loader onComplete={() => setLoading(false)} />}
      <main className={loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-1000 ease-out'}>
        <Hero />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}