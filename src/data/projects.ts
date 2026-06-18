export interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
}

export const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with cart, checkout, and an admin dashboard for managing products and orders.',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    github: 'https://github.com/yourusername/ecommerce-platform',
    demo: 'https://your-ecommerce-demo.vercel.app',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task board with drag-and-drop columns, real-time updates, and team workspaces.',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    github: 'https://github.com/yourusername/task-manager',
    demo: 'https://your-task-app-demo.vercel.app',
  },
  {
    title: 'AI Content Generator',
    description: 'A web app that generates marketing copy and blog outlines using an LLM API, with saved history per user.',
    tags: ['Next.js', 'OpenAI API', 'Tailwind CSS'],
    github: 'https://github.com/yourusername/ai-content-generator',
    demo: 'https://your-ai-app-demo.vercel.app',
  },
  {
    title: 'Personal Finance Tracker',
    description: 'A budgeting tool that visualizes spending by category with monthly trends and exportable reports.',
    tags: ['React', 'Express', 'Chart.js', 'MySQL'],
    github: 'https://github.com/yourusername/finance-tracker',
    demo: 'https://your-finance-app-demo.vercel.app',
  },
  {
    title: 'Real-Time Chat App',
    description: 'A messaging app with private rooms, typing indicators, and message history backed by a websocket server.',
    tags: ['React', 'Socket.io', 'Redis', 'Node.js'],
    github: 'https://github.com/yourusername/realtime-chat',
    demo: 'https://your-chat-app-demo.vercel.app',
  },
  {
    title: 'Recipe Discovery App',
    description: 'A recipe search and meal-planning app with saved favorites and ingredient-based filtering.',
    tags: ['Next.js', 'TypeScript', 'REST API'],
    github: 'https://github.com/yourusername/recipe-app',
    demo: 'https://your-recipe-app-demo.vercel.app',
  },
];
