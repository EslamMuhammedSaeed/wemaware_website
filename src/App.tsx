import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Community from './components/Community/Community';
import Integrations from './components/Integrations/Integrations';
import Testimonials from './components/Testimonials/Testimonials';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Community />
        <Integrations />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
