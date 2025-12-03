import { motion } from 'framer-motion';
import { Instagram, MessageCircle } from 'lucide-react';
import { contactInfo, siteInfo } from '@/config/banners';

/**
 * Header Component
 * Design: Luxury Minimalist
 * - Elegant header with location and social icons
 * - Minimalist design with gold accents
 * - Responsive layout
 */
export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="border-b border-border/30 bg-background/95 backdrop-blur-sm sticky top-0 z-50"
    >
      <div className="max-w-4xl mx-auto px-4 py-6 md:py-8">
        {/* Location Badge */}
        <motion.div
          className="flex items-center justify-center gap-2 mb-4"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-primary text-lg">📍</span>
          <span className="text-sm md:text-base text-muted-foreground">
            {contactInfo.location}
          </span>
        </motion.div>

        {/* Title */}
        <h1 className="text-center text-3xl md:text-4xl font-bold mb-6 text-foreground">
          {siteInfo.name}
        </h1>

        {/* Subtitle */}
        <p className="text-center text-sm md:text-base text-muted-foreground mb-6 max-w-2xl mx-auto">
          {siteInfo.subtitle}
        </p>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div className="w-2 h-2 rounded-full bg-primary" />
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6">
          <motion.a
            href={contactInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: '#d4af37' }}
            whileTap={{ scale: 0.95 }}
            className="text-foreground/70 hover:text-primary transition-colors"
          >
            <Instagram className="w-6 h-6" />
          </motion.a>
          <motion.a
            href={contactInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: '#d4af37' }}
            whileTap={{ scale: 0.95 }}
            className="text-foreground/70 hover:text-primary transition-colors"
          >
            <MessageCircle className="w-6 h-6" />
          </motion.a>
        </div>
      </div>
    </motion.header>
  );
}
