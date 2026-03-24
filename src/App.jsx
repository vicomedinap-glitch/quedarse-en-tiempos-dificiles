import { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import StorySection from './components/StorySection';
import RevelationSection from './components/RevelationSection';
import HeroesSection from './components/HeroesSection';
import TransmediaSection from './components/TransmediaSection';
import SupportLocalSection from './components/SupportLocalSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('[data-animate]').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-white overflow-x-hidden">
      <HeroSection />
      <StorySection />
      <RevelationSection />
      <HeroesSection />
      <TransmediaSection />
      <SupportLocalSection />
      <Footer />
    </main>
  );
}

export default App;