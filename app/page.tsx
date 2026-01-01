import Hero from '@/components/Hero';
import ProductGallery from '@/components/ProductGallery';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen bg-cream selection:bg-gold selection:text-white">
      <Navbar />
      <Hero />
      <ProductGallery />
      <Footer />
    </main>
  );
}
