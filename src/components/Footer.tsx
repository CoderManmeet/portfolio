'use client';

import { useLenis } from 'lenis/react';
import { ArrowUp } from 'lucide-react';
import { socialLinks } from '@/data/socials';

export default function Footer() {
  const lenis = useLenis();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted">(c) {year} Your Name. All rights reserved.</p>

        <div className="flex items-center gap-5">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-muted hover:text-accent transition-colors"
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>

        <button
          onClick={() => lenis?.scrollTo(0)}
          aria-label="Back to top"
          className="glass rounded-full p-3 hover:text-accent transition-colors"
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
}
