export interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
  image?: string;
}

export const projects: Project[] = [
  {
  title: 'ProjectFlow',
  description: 'A full-stack SaaS project management platform with drag-and-drop task boards, real-time analytics dashboards, and JWT-based authentication.',
  tags: ['React', 'Vite', 'TypeScript', 'Express', 'MongoDB'],
  github: 'https://github.com/CoderManmeet/project-flow',
  demo: 'https://project-flow-b76v-five.vercel.app/',
  image: '/images/Projectflow.png',
},
{
  title: 'E-Commerce Platform',
  description: 'A full-featured online store with product catalog, cart, secure checkout, and an admin dashboard for managing products and orders.',
  tags: ['React', 'Django', 'REST API', 'JWT Auth'],
  github: 'https://github.com/CoderManmeet/Django-ecommmerce',
  demo: 'https://your-ecommerce-demo.vercel.app',
  image: '/images/Ecom.png',
},
{
  title: 'Real Estate OS',
  description: 'A CRM SaaS platform for real estate agencies to manage leads, properties, and client pipelines with role-based access control.',
  tags: ['Node.js', 'Express', 'TypeScript', 'Prisma', 'PostgreSQL'],
  github: 'https://github.com/yourusername/real-estate-os',
  demo: 'https://your-real-estate-os-demo.vercel.app',
  image: '/images/Real-estate.png',
},
{
  title: 'Suto Café Landing Page',
  description: 'A warm, visually-driven landing page for a café brand, featuring a menu showcase, smooth scroll animations, and mobile-first design.',
  tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
  github: 'https://github.com/CoderManmeet/suto-cafe',
  demo: 'https://suto-cafe.vercel.app/',
  image: '/images/suto.png',
},
{
  title: 'Dentist Clinic Website',
  description: 'A clean, trust-focused website for a dental clinic with service listings, an appointment booking form, and responsive design for patient accessibility.',
  tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  github: 'https://github.com/CoderManmeet/dentist-clinic-website',
  demo: 'https://your-dentist-clinic-demo.vercel.app',
  image: '/images/dentist.png',
},
{
  title: 'Portfolio Website',
  description: 'A personal portfolio with an Awwwards-style dark theme, featuring smooth-scroll animations, 3D visuals, and an embedded AI chatbot.',
  tags: ['Next.js', 'TypeScript', 'Three.js', 'GSAP', 'Groq API'],
  github: 'https://github.com/CoderManmeet/portfolio-v3',
  demo: 'https://portfolio-gold-six-23.vercel.app/',
  image: '/images/portfolio.png',
},
];