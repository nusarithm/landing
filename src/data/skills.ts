import { Skill } from '../types';

export const skills: Skill[] = [
  {
    category: 'Backend',
    items: [
      { name: 'Go', level: 82 },
      { name: 'Python', level: 80 },
      { name: 'Node.js', level: 84 },
      { name: 'TypeScript', level: 83 },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'React', level: 85 },
      { name: 'Next.js', level: 82 },
      { name: 'Tailwind CSS', level: 86 },
      { name: 'Vue.js', level: 70 },
    ],
  },
  {
    category: 'Blockchain & Web3',
    items: [
      { name: 'Solidity', level: 78 },
      { name: 'Solana', level: 74 },
      { name: 'Web3.js', level: 76 },
      { name: 'Smart Contracts', level: 80 },
    ],
  },
  {
    category: 'Systems & Infrastructure',
    items: [
      { name: 'Rust', level: 74 },
      { name: 'Docker', level: 82 },
      { name: 'AWS', level: 78 },
      { name: 'PostgreSQL', level: 80 },
    ],
  },
  {
    category: 'AI & Data',
    items: [
      { name: 'LLMs & Embeddings', level: 78 },
      { name: 'RAG Pipelines', level: 74 },
      { name: 'Data Engineering', level: 72 },
      { name: 'Elasticsearch', level: 73 },
    ],
  },
  {
    category: 'Automation & DevOps',
    items: [
      { name: 'n8n Workflows', level: 76 },
      { name: 'CI/CD Pipelines', level: 80 },
      { name: 'Web Scraping', level: 78 },
      { name: 'Process Automation', level: 77 },
    ],
  },
];
