'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { experienceItems } from '@/data/experience';

gsap.registerPlugin(ScrollTrigger);

const typeColor: Record<string, string> = {
  education: 'bg-accent',
  internship: 'bg-accent-light',
  certification: 'bg-accent-dark',
  achievement: 'bg-foreground',
};

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !lineRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
            end: 'bottom 60%',
            scrub: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent-light text-sm font-medium tracking-wide mb-3">
            My Journey
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Experience and Education</h2>
        </motion.div>

        <div ref={containerRef} className="relative pl-8 md:pl-10">
          <div className="absolute left-2 md:left-3 top-0 bottom-0 w-px bg-border" />
          <div
            ref={lineRef}
            className="absolute left-2 md:left-3 top-0 bottom-0 w-px bg-accent origin-top"
            style={{ transform: 'scaleY(0)' }}
          />

          <div className="space-y-10">
            {experienceItems.map((item, i) => (
              <motion.div
                key={item.title + item.date}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="relative"
              >
                <span
                  className={`absolute -left-8 md:-left-10 top-1.5 w-3 h-3 rounded-full ${typeColor[item.type]} ring-4 ring-background`}
                />
                <p className="text-xs text-accent-light uppercase tracking-wide mb-1">
                  {item.date} · {item.type}
                </p>
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted mb-2">{item.subtitle}</p>
                <p className="text-sm text-muted leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
