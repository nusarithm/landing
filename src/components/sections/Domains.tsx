import { domains } from '../../data/domains';
import { Card } from '../Card';
import * as Icons from 'lucide-react';

export function DomainsSection() {
  const getIcon = (iconName: string) => {
    const iconMap: Record<string, any> = {
      Brain: Icons.Brain,
      Zap: Icons.Zap,
      Code: Icons.Code,
      Network: Icons.Network,
      Database: Icons.Database,
    };
    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent size={32} className="text-blue-400" /> : null;
  };

  return (
    <section id="domains" className="py-20 px-4 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Domains of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Work</span>
        </h2>
        <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
          Expertise across multiple technology domains designed to solve real-world problems
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain, index) => (
            <Card
              key={domain.id}
              className="flex flex-col group animate-fade-in hover:border-blue-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-slate-700/50 rounded-lg group-hover:bg-blue-600/20 transition-colors duration-300">
                  {getIcon(domain.icon)}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 flex-1">
                  {domain.title}
                </h3>
              </div>

              <p className="text-slate-400 text-sm mb-4 flex-1">{domain.description}</p>

              <div className="space-y-2 pt-4 border-t border-slate-700">
                {domain.items.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">→</span>
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border border-blue-500/20 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Build Something Amazing?</h3>
          <p className="text-slate-400 max-w-2xl mx-auto mb-6">
            Whether you need AI integration, blockchain development, or full-stack solutions, I'm here to help bring your vision to life.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
