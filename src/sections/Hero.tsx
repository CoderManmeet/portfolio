'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import { useLenis } from 'lenis/react';
import gsap from 'gsap';

const NAME = 'Manmeet Singh';
const TITLE = 'Full-Stack Developer';

export default function Hero() {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const lenis = useLenis();

  useEffect(() => {
    if (!nameRef.current) return;
    const letters = nameRef.current.querySelectorAll('span');

    gsap.fromTo(
      letters,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.04, delay: 0.2 }
    );
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
    >
      <motion.div
        className="absolute top-1/4 -left-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-dark/20 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 text-center max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-accent-light text-sm md:text-base font-medium tracking-wide mb-4"
        >
          Hi, my name is
        </motion.p>
<h1
          ref={nameRef}
          className="text-5xl md:text-7xl font-bold mb-4 flex justify-center whitespace-nowrap"
        >
          {NAME.split('').map((char, i) => (
            <span key={i} className="inline-block text-gradient">
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-muted font-medium mb-6"
        >
          {TITLE}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="text-muted max-w-xl mx-auto mb-10 leading-relaxed"
        >
          I build fast, accessible, and visually polished web applications, turning ideas
          into smooth, production-ready products from front to back.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => lenis?.scrollTo('#projects', { offset: -40 })}
            className="bg-accent hover:bg-accent-light text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            View My Work
          </button>
          <button
            onClick={() => lenis?.scrollTo('#contact', { offset: -40 })}
            className="border border-border hover:border-accent text-foreground px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Get In Touch
          </button>
          <a href="/resume.pdf"
            download
            className="flex items-center gap-2 text-muted hover:text-accent transition-colors px-2"
          >
            <Download size={18} />
            <span className="text-sm font-medium">Resume</span>
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 flex flex-col items-center gap-2 text-muted"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ArrowDown size={18} />
      </motion.div>
    </section>
  );
}
