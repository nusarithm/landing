import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Nusarithm
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              A creative lab where technology meets imagination. Building intelligent solutions with AI, automation, and open source.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-slate-400 hover:text-white transition-colors duration-300 text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="text-slate-400 hover:text-white transition-colors duration-300 text-sm">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-white transition-colors duration-300 text-sm">
                  Contact
                </a>
              </li>
              <li>
                <a href="/policy-pivacy" className="text-slate-400 hover:text-white transition-colors duration-300 text-sm">
                  Policy & Privacy
                </a>
              </li>
              <li>
                <a href="/terms-of-service" className="text-slate-400 hover:text-white transition-colors duration-300 text-sm">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/masnasri-a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/nasri-adzlani-477620165/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:nasriadzlani@live.com"
                className="text-slate-400 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © 2024 Nusarithm. All rights reserved. Innovation from Indonesia.
          </p>
          <p className="text-slate-500 text-sm flex items-center gap-1">
            Made with <Heart size={16} className="text-red-500" /> by Nasri Adzlani
          </p>
        </div>
      </div>
    </footer>
  );
}
