import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const context = gsap.context(() => {
      gsap.from('.hero-kicker, .hero-title-line, .hero-copy, .hero-actions, .hero-visual', {
        y: 28,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: 'power3.out',
        delay: 0.15,
      });

      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => {
        gsap.fromTo(
          element,
          { y: 38, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: { trigger: element, start: 'top 88%', once: true },
          },
        );
      });

      gsap.to('.orbital-object', {
        y: -14,
        rotate: 5,
        duration: 4.5,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });
    });

    return () => context.revert();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Products />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
