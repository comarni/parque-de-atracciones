import Hero from '@/components/Hero';
import Attractions from '@/components/Attractions';
import SimpleMap from '@/components/SimpleMap';
import Schedule from '@/components/Schedule';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Attractions />
      <SimpleMap />
      <Schedule />
      <Gallery />
      <Testimonials />
      <FAQ />
      <CTA />
      
      {/* Hidden Easter Egg */}
      <div className="fixed bottom-20 right-4 opacity-0 hover:opacity-100 transition-opacity duration-500">
        <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg rotate-12">
          🎯 ¡Encuéntrame!
        </div>
      </div>
    </>
  );
}