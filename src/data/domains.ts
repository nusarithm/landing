import { Domain } from '../types';

export const domains: Domain[] = [
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    description: 'Building intelligent solutions with cutting-edge AI technology',
    icon: 'Brain',
    items: [
      'Chat platforms & LLM integration',
      'Local LLM deployments',
      'Embedding generation & management',
      'RAG pipelines for knowledge systems',
    ],
  },
  {
    id: 'automation',
    title: 'Automation & Workflows',
    description: 'Streamline processes and increase efficiency through intelligent automation',
    icon: 'Zap',
    items: [
      'n8n workflow automation',
      'Web scraping engines',
      'Process optimization',
      'Scheduled task management',
    ],
  },
  {
    id: 'software',
    title: 'Software Engineering',
    description: 'Full-stack development from concept to production deployment',
    icon: 'Code',
    items: [
      'Backend systems (Go, Python, Node.js)',
      'Frontend applications (React, Next.js)',
      'System design & architecture',
      'Database optimization',
    ],
  },
  {
    id: 'blockchain',
    title: 'Blockchain & Web3',
    description: 'Transparent and decentralized solutions for the next generation of web',
    icon: 'Network',
    items: [
      'Smart contracts (Solidity, Rust)',
      'Blockchain integration',
      'DeFi applications',
      'Transparency systems',
    ],
  },
  {
    id: 'data',
    title: 'Data Engineering',
    description: 'Transform raw data into actionable intelligence and insights',
    icon: 'Database',
    items: [
      'ETL pipeline development',
      'Vector databases & embeddings',
      'Real-time analytics',
      'Data warehousing',
    ],
  },
];
