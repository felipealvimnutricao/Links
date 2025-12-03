import { motion } from 'framer-motion';
import { siteInfo } from '@/config/banners';

/**
 * Footer Component
 * Design: Luxury Minimalist
 * - Elegant footer with minimal information
 * - Gold divider line
 * - Responsive layout
 */
export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="border-t border-border/30 bg-background/50 backdrop-blur-sm mt-16 md:mt-24"
    >
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div className="w-2 h-2 rounded-full bg-primary" />
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </div>

        {/* Content */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-2">
            {siteInfo.footerText}
          </p>
          <p className="text-xs text-muted-foreground/70">
            {siteInfo.footerSubtext}
          </p>
        </div>

        {/* Bottom Accent */}
        <motion.div
          className="mt-8 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </div>
    </motion.footer>
  );
}
