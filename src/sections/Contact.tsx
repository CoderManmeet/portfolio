'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { SendIcon, CheckCircleIcon } from '@/components/icons';
import { socialLinks } from '@/data/socials';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (form.name.trim().length < 2) next.name = 'Please enter your full name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Please enter a valid email address.';
    if (form.message.trim().length < 10) next.message = 'Message should be at least 10 characters.';
    return next;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
    }
  };

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-accent-light text-sm font-medium tracking-wide mb-3">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Lets Work Together</h2>
          <p className="text-muted leading-relaxed mb-8">
            Have a project in mind or just want to say hello? My inbox is always open.
          </p>

          <div className="space-y-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted hover:text-accent transition-colors"
                >
                  <span className="glass rounded-full p-2">
                    <Icon size={18} />
                  </span>
                  <span className="text-sm">{social.label}</span>
                </a>
              );
            })}
          </div>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-6 md:p-8 space-y-5"
        >
          {submitted && (
            <div className="flex items-center gap-2 text-sm text-accent-light bg-accent/10 border border-accent/20 rounded-lg px-4 py-3">
              <CheckCircleIcon size={18} />
              Thanks! Your message has been received.
            </div>
          )}

          <div>
            <label htmlFor="name" className="block text-sm text-muted mb-1.5">Name</label>
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-accent transition-colors"
              placeholder="Your name"
            />
            {errors.name && <p className="text-xs text-red-400 mt-1.5">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-muted mb-1.5">Email</label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-accent transition-colors"
              placeholder="you@example.com"
            />
            {errors.email && <p className="text-xs text-red-400 mt-1.5">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm text-muted mb-1.5">Message</label>
            <textarea
              id="message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-accent transition-colors resize-none"
              placeholder="Share your thoughts..."
            />
            {errors.message && <p className="text-xs text-red-400 mt-1.5">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <SendIcon size={18} />
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
