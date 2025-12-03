import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BannerCard from '@/components/BannerCard';
import { banners } from '@/config/banners';

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-8 md:py-12">
          <div className="max-w-5xl mx-auto px-2 sm:px-4">
            <div className="space-y-6 md:space-y-8">
              {banners.map((banner, index) => (
                <BannerCard
                  key={banner.id}
                  {...banner}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}