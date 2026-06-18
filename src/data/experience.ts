export interface ExperienceItem {
  type: 'education' | 'internship' | 'certification' | 'achievement';
  date: string;
  title: string;
  subtitle: string;
  description: string;
}

export const experienceItems: ExperienceItem[] = [
  {
    type: 'education',
    date: '2024 — 2027',
    title: 'Bachelors in Computer Application (BCA)',
    subtitle: 'Your University Name',
    description: 'Focused on web development, data structures, and software engineering principles.',
  },
  {
    type: 'internship',
    date: 'Summer 2025',
    title: 'Software Developer Intern',
    subtitle: 'TweekersNutNetwork',
    description: 'Built engaging and useful software solutions for the company.',
  },
  {
    type: 'certification',
    date: '2025',
    title: 'Full-Stack Web Development Certification',
    subtitle: 'Udemy',
    description: 'Completed a comprehensive program covering React, Node.js, and database design.',
  },
  {
    type: 'achievement',
    date: '2025',
    title: 'Hackathon Final Round',
    subtitle: 'Odoo X CGC University Hackathon',
    description: 'Individually built a working prototype in 24 hours, clearing round 1 out of 500 teams.',
  },
];
