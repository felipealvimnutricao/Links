import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BannerCard from '@/components/BannerCard';
import { banners, siteInfo } from '@/config/banners';

/**
 * Home Page
 * Design: Luxury Minimalist
 * - Hero section with elegant layout
 * - Dynamic banner grid
 * - Smooth animations and transitions
 * 
 * CONFIGURAÇÃO:
 * Edite o arquivo `client/src/config/banners.ts` para adicionar, remover ou modificar banners.
 * Não é necessário editar este arquivo.
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative py-12 md:py-16 overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <img
              src="/images/hero-background.png"
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="relative max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-12"
            >
              <p className="text-primary text-sm md:text-base font-semibold mb-4 tracking-widest">
                BEM-VINDO
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                {siteInfo.heroTitle}
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                {siteInfo.heroDescription}
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Banners Grid */}
        <section className="py-12 md:py-20">
          <div className="max-w-4xl mx-auto px-4">
            <div className="space-y-8 md:space-y-12">
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

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="py-12 md:py-16 bg-card/50 backdrop-blur-sm"
        >
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {siteInfo.ctaTitle}
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              {siteInfo.ctaDescription}
            </p>

            {/* Divider */}
            <div className="flex items-center justify-center gap-4">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              <div className="w-2 h-2 rounded-full bg-primary" />
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            </div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
