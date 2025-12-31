import { Header, Footer, HeroSection, AboutSection, SkillsSection, ProjectsSection, DomainsSection, ContactSection, PolicyPrivacy, TermsOfService } from './components';

function App() {
  const path = typeof window !== 'undefined' ? window.location.pathname : '/';
  const isPolicy = path === '/policy-privacy' || path === '/policy-privacy/';
  const isTerms = path === '/terms-of-service' || path === '/terms-of-service/';

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      {isPolicy ? (
        <PolicyPrivacy />
      ) : isTerms ? (
        <TermsOfService />
      ) : (
        <>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <DomainsSection />
          <ContactSection />
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;
