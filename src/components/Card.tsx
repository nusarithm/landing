import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = true }: CardProps) {
  const baseStyles = 'bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6';
  const hoverStyles = hover ? 'hover:bg-slate-800 hover:border-slate-600 transition-all duration-300 hover:shadow-xl' : '';

  return <div className={`${baseStyles} ${hoverStyles} ${className}`}>{children}</div>;
}
