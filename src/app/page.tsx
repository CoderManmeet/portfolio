import dynamic from 'next/dynamic';
import Hero from '@/sections/Hero';
import About from '@/sections/About';

const Skills = dynamic(() => import('@/sections/Skills'));
const Projects = dynamic(() => import('@/sections/Projects'));
const Experience = dynamic(() => import('@/sections/Experience'));
const Contact = dynamic(() => import('@/sections/Contact'));

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
