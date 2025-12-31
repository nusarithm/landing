import { Github, Linkedin, Mail } from 'lucide-react';
import { Card } from '../Card';

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Nusarithm</span> & Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-bold text-white">Nusarithm Organization</h3>
            <p className="text-slate-300 leading-relaxed">
              Nusarithm represents innovation from Indonesia, serving as a creative hub for open source projects, ideas, and experiments built with passion in AI, automation, and software development.
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Our Mission</h4>
                <p className="text-slate-400 text-sm">
                  Build intelligent solutions with AI & automation, support open source software for global collaboration, and provide tools that help businesses, communities, and developers grow in the digital era.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Our Vision</h4>
                <p className="text-slate-400 text-sm">
                  Become a creative lab where technology meets imagination, and where open source projects inspire collaboration from Indonesia to the world.
                </p>
              </div>
            </div>
          </div>

          <Card className="animate-fade-in animation-delay-200">
            <div className="text-center space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-blue-400 mb-2">Nasri Adzlani</h3>
                <p className="text-slate-400">Software Engineer, Bug Whisperer, Professional Googler</p>
              </div>

              <div className="bg-slate-700/50 rounded-lg p-4">
                <p className="text-sm text-slate-300 mb-4">
                  Located in <span className="font-semibold text-white">Jakarta, Indonesia</span>
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-slate-400 text-sm leading-relaxed">
                  A pragmatic full-stack engineer with 173+ repositories spanning AI, blockchain, backend systems, and infrastructure. Passionate about building solutions that work, deploying code that matters, and contributing to the open source community.
                </p>
                <p className="text-slate-400 text-sm">
                  <span className="text-blue-400">Philosophy:</span> Ship fast, iterate continuously, solve real problems.
                </p>
              </div>

              <div className="flex justify-center gap-4 pt-4">
                <a
                  href="https://github.com/masnasri-a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-700 hover:bg-blue-600 rounded-lg transition-all duration-300 hover:scale-110"
                >
                  <Github size={20} className="text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/nasri-adzlani-477620165/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-700 hover:bg-blue-600 rounded-lg transition-all duration-300 hover:scale-110"
                >
                  <Linkedin size={20} className="text-white" />
                </a>
                <a
                  href="mailto:nasriadzlani@live.com"
                  className="p-3 bg-slate-700 hover:bg-blue-600 rounded-lg transition-all duration-300 hover:scale-110"
                >
                  <Mail size={20} className="text-white" />
                </a>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6 animate-fade-in animation-delay-300">
          <Card>
            <h4 className="text-xl font-bold text-white mb-4">Achievements</h4>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li className="flex items-center gap-3">
                <span className="text-blue-400">✓</span> Arctic Code Vault Contributor
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-400">✓</span> GitHub Pull Shark (×2)
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-400">✓</span> 173+ Public Repositories
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-400">✓</span> Full-Stack Development Expert
              </li>
            </ul>
          </Card>

          <Card>
            <h4 className="text-xl font-bold text-white mb-4">Development Approach</h4>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li className="flex items-center gap-3">
                <span className="text-blue-400">✓</span> Results-oriented & pragmatic
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-400">✓</span> Ship fast, iterate continuously
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-400">✓</span> Debug like a professional Googler
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-400">✓</span> Code that works beats perfect code
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}
