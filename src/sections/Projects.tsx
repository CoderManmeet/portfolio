'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { projects } from '@/data/projects';
import { GithubIcon, ExternalLinkIcon } from '@/components/icons';

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent-light text-sm font-medium tracking-wide mb-3">
            My Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={container}
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              variants={item}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.03, y: -6 }}
              className="glass rounded-2xl overflow-hidden border border-border"
            >
              <div className="h-40 relative overflow-hidden bg-gradient-to-br from-accent/30 to-accent-dark/30">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-4xl font-bold text-foreground/20">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {project.title}
                </h3>
                <p className="text-sm text-muted mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-accent-light bg-accent/10 px-2.5 py-1 rounded-full border border-accent/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-5">
                  <a href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
                  >
                    <GithubIcon size={18} />
                    Code
                  </a>
                  <a href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-accent-light hover:text-accent transition-colors"
                  >
                    <ExternalLinkIcon size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}