import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Services from './components/Services';
import Manifesto from './components/Manifesto';
import InspirationGallery from './components/InspirationGallery';
import Process from './components/Process';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import AdminModal from './components/AdminModal';
import { AdminProvider } from './context/AdminContext';

function App() {
  return (
    <AdminProvider>
      <div className="min-h-screen bg-[#F8F2E8] text-[#4B2032] overflow-x-hidden relative paper-grain selection:bg-[#CB4178]/25 selection:text-[#4B2032]">
        {/* Sticky Header Navigation */}
        <Header />

        {/* Main Page Layout Sections */}
        <main>
          {/* Hero Section + Balloon Illustration */}
          <Hero />

          {/* Brand Value Propositions / Benefits Grid */}
          <Benefits />

          {/* What We Do - Card Grid */}
          <Services />

          {/* Big Editorial Plum/Pink Statement */}
          <Manifesto />

          {/* Visual Gallery */}
          <InspirationGallery />

          {/* Work Step Process */}
          <Process />

          {/* Double-column Form and Social Media area */}
          <ContactSection />
        </main>

        {/* Full layered Footer & Pre-Footer */}
        <Footer />

        {/* Bottom Floating CTA Bar (Mobile) / Button (Desktop) */}
        <FloatingCTA />

        {/* Admin Panel Modal */}
        <AdminModal />
      </div>
    </AdminProvider>
  );
}

export default App;
