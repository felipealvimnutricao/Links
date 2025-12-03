import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Banner } from '@/config/banners';

interface BannerCardProps extends Banner {
  index: number;
}

/**
 * BannerCard Component
 * Design: Luxury Minimalist
 * - Elegant card with hover glow effect
 * - Smooth animations and transitions
 * - Gold accent on hover
 */
export default function BannerCard({
  title,
  description,
  image,
  link,
  index,
}: BannerCardProps) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="group relative block overflow-hidden rounded-lg bg-card text-card-foreground transition-all duration-300 hover:shadow-2xl"
      style={{
        boxShadow: 'inset 0 0 0 1px rgba(212, 175, 55, 0.2)',
      }}
    >
      {/* Background Image */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
            {title}
          </h3>
          <p className="text-sm md:text-base text-gray-200 mb-4 line-clamp-2">
            {description}
          </p>

          {/* CTA Button */}
          <motion.div
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm md:text-base"
            whileHover={{ gap: 8 }}
          >
            <span>Clique aqui</span>
            <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </motion.div>
        </motion.div>
      </div>

      {/* Hover Glow Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-lg"
        initial={{ boxShadow: 'inset 0 0 0 1px rgba(212, 175, 55, 0.2)' }}
        whileHover={{
          boxShadow: 'inset 0 0 20px rgba(212, 175, 55, 0.4), 0 0 20px rgba(212, 175, 55, 0.2)',
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.a>
  );
}
