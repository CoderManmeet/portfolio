'use client';

import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative mx-auto w-64 h-64 md:w-80 md:h-80"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent to-accent-dark blur-2xl opacity-30" />
          <div className="relative w-full h-full rounded-full glass flex items-center justify-center overflow-hidden">
            <User size={96} className="text-muted" />
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.15 }}
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-accent-light text-sm font-medium tracking-wide mb-3"
          >
            About Me
          </motion.p>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Turning ideas into reliable, polished software
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-muted leading-relaxed mb-4"
          >
            I am a full-stack developer who enjoys taking a product from a rough idea
            all the way to a smooth, production-ready experience. I care about clean
            code, thoughtful interfaces, and the small details that make software feel
            effortless to use.
          </motion.p>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-muted leading-relaxed mb-4"
          >
            My goal is to keep growing as an engineer by working on projects that
            challenge me to learn new tools, write better architecture, and ship work
            I am proud of, while collaborating closely with teams and users.
          </motion.p>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-muted leading-relaxed"
          >
            Outside of writing code, I spend time exploring new frameworks, refining
            my design eye, and contributing to projects that push my skills further.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
