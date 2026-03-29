'use client';

import { motion } from 'framer-motion';
import { Play, ArrowRight, Star, Users, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/30 to-secondary-900/30 mix-blend-overlay" />
      </div>

      {/* Animated Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full"
            initial={{ y: -100, x: Math.random() * 100 }}
            animate={{ 
              y: window.innerHeight + 100,
              x: Math.random() * 100 - 50 + (i * 10)
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.1
            }}
            style={{
              left: `${(i * 5)}%`,
              opacity: 0.7
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
          >
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-white font-medium">⭐ 4.8/5 - Mejor parque de España</span>
          </motion.div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="text-white">VIVE LA </span>
            <span className="text-gradient bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500">
              EMOCIÓN
            </span>
            <span className="text-white"> EXTREMA</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto">
            El parque de atracciones más grande y moderno de Madrid. 
            Más de 40 atracciones, espectáculos en vivo y diversión para toda la familia.
          </p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            {[
              { icon: Users, value: '1M+', label: 'Visitantes anuales' },
              { icon: Star, value: '40+', label: 'Atracciones' },
              { icon: MapPin, value: '25ha', label: 'Superficie' },
              { value: '1969', label: 'Año de fundación' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl flex items-center justify-center space-x-2 hover:shadow-3xl transition-all"
            >
              <span>Comprar Entradas Online</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center space-x-2 hover:bg-white/20 transition-all"
            >
              <Play className="w-5 h-5" />
              <span>Ver Video Tour</span>
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute top-20 left-10 hidden lg:block"
      >
        <div className="w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-xl" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 4, delay: 0.5 }}
        className="absolute bottom-20 right-10 hidden lg:block"
      >
        <div className="w-40 h-40 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-xl" />
      </motion.div>
    </section>
  );
}