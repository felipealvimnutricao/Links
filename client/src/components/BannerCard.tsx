import { motion } from 'framer-motion';
import { Banner } from '@/config/banners';

interface BannerCardProps extends Banner {
  index: number;
}

export default function BannerCard({
  title,
  image,
  link,
  index,
}: BannerCardProps) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="group relative block overflow-hidden rounded-lg bg-card text-card-foreground transition-all duration-300 hover:shadow-2xl border-2 border-primary/30"
    >
      <div className="relative h-38 md:h-96 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <motion.div
        className="absolute inset-0 pointer-events-none rounded-lg"
        initial={{ boxShadow: 'inset 0 0 0 2px rgba(212, 175, 55, 0.3)' }}
        whileHover={{
          boxShadow: 'inset 0 0 20px rgba(212, 175, 55, 0.5), 0 0 20px rgba(212, 175, 55, 0.3)',
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.a>
  );
}
