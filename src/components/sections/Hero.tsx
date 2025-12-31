import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../Button';

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 flex items-center justify-center px-4 pt-20 overflow-hidden relative"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 backdrop-blur border border-slate-700 rounded-full mb-8 animate-fade-in">
          <Sparkles size={16} className="text-blue-400" />
          <span className="text-sm text-slate-300">Welcome to the future of innovation</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in animation-delay-200">
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Nusarithm
          </span>
          <br />
          <span className="text-white">Innovation from Indonesia</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed animate-fade-in animation-delay-400 max-w-2xl mx-auto">
          A creative lab where technology meets imagination. Building intelligent solutions with AI, automation, and open source software for businesses, communities, and developers worldwide.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in animation-delay-600">
          <Button onClick={() => scrollToSection('projects')} variant="primary" size="lg">
            <div className="flex items-center gap-2">
              Explore Projects
              <ArrowRight size={20} />
            </div>
          </Button>
          <Button onClick={() => scrollToSection('about')} variant="outline" size="lg">
            Learn More About Me
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 animate-fade-in animation-delay-700">
          <div className="group cursor-pointer">
            <div className="text-3xl font-bold text-blue-400 group-hover:text-cyan-400 transition-colors duration-300">
              173+
            </div>
            <p className="text-slate-400 text-sm mt-2">Repositories</p>
          </div>
          <div className="group cursor-pointer">
            <div className="text-3xl font-bold text-blue-400 group-hover:text-cyan-400 transition-colors duration-300">
              5+
            </div>
            <p className="text-slate-400 text-sm mt-2">Domains</p>
          </div>
          <div className="group cursor-pointer">
            <div className="text-3xl font-bold text-blue-400 group-hover:text-cyan-400 transition-colors duration-300">
              ∞
            </div>
            <p className="text-slate-400 text-sm mt-2">Possibilities</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="text-slate-500 cursor-pointer" onClick={() => scrollToSection('about')}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
