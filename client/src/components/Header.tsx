import { motion } from 'framer-motion';
import { Instagram, MessageCircle } from 'lucide-react';
import { contactInfo, siteInfo } from '@/config/banners';

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="border-b border-border/30 bg-background/95 backdrop-blur-sm"
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <h1 className="text-center text-4xl md:text-5xl font-bold mb-4 text-foreground">
          {siteInfo.name}
        </h1>

        <p className="text-center text-sm md:text-base text-muted-foreground mb-6">
          {siteInfo.subtitle}
        </p>

        <div className="flex flex-col items-center gap-4">
          <motion.div
            className="flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-primary text-lg">📍</span>
            <span className="text-sm text-muted-foreground">
              {contactInfo.location}
            </span>
          </motion.div>

          <div className="flex items-center justify-center gap-4">
            <motion.a
              href={contactInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </motion.a>
            <motion.a
              href={contactInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}