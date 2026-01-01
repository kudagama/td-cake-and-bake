import Hero from '@/components/Hero';
import ProductGallery from '@/components/ProductGallery';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-cream selection:bg-gold selection:text-white">
      {/* Simple Navigation for Logo */}
      <nav className="absolute top-0 w-full p-6 z-50 flex justify-between items-center container mx-auto bg-transparent">
        <div className="text-2xl font-bold text-brown font-serif tracking-tighter">
          TD Cake & Bake
        </div>
        {/* Contact/socials could go here */}
      </nav>

      <Hero />
      <ProductGallery />
      <Footer />
    </main>
  );
}
