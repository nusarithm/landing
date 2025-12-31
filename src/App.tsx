import { Header, Footer, HeroSection, AboutSection, SkillsSection, ProjectsSection, DomainsSection, ContactSection } from './components';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <DomainsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
