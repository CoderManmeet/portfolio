'use client';

import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import Image from 'next/image';

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
          {/* <div className="relative w-full h-full rounded-full glass flex items-center justify-center overflow-hidden">
            <User size={96} className="text-muted" />
          </div> */}
          <div className="relative w-full h-full rounded-full glass overflow-hidden">
  <Image
    src="/images/manmeet.jpeg"
    alt="Manmeet Singh"
    fill
    className="object-cover hover:scale-110 transition-transform duration-700"
  />
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
            Building scalable digital experiences that create real impact
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-muted leading-relaxed mb-4"
          >
           I am a full-stack developer focused on 
           building modern, scalable, and 
           user-friendly web applications. 
           From responsive frontends to robust 
           backend systems, I enjoy transforming 
           ideas into polished digital products 
           that deliver real value.
          </motion.p>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-muted leading-relaxed mb-4"
          >
            Driven by continuous growth and innovation, 
            I constantly explore new technologies, 
            frameworks, and development practices. 
            My goal is not just to write code, but to 
            create impactful software that helps businesses 
            grow and users achieve more.
          </motion.p>

          {/* <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-muted leading-relaxed"
          >
            Outside of writing code, I spend time exploring new frameworks, refining
            my design eye, and contributing to projects that push my skills further.
          </motion.p> */}

          <div className="grid grid-cols-3 gap-6 mt-8">
  <div>
    <h3 className="text-2xl font-bold text-accent">10+</h3>
    <p className="text-sm text-muted">Projects Built</p>
  </div>

  <div>
    <h3 className="text-2xl font-bold text-accent">3+</h3>
    <p className="text-sm text-muted">Client Projects</p>
  </div>

  <div>
    <h3 className="text-2xl font-bold text-accent">100%</h3>
    <p className="text-sm text-muted">Commitment</p>
  </div>
</div>
        </motion.div>
      </div>
    </section>
  );
}
