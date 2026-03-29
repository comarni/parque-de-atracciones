'use client';

import { motion } from 'framer-motion';
import { Heart, Zap, Users, Star, TrendingUp, Shield } from 'lucide-react';

const attractions = [
  {
    id: 1,
    name: 'TORNADO EXTREMO',
    description: 'La montaña rusa más rápida de Europa con giros de 360° y caídas de 95 metros.',
    intensity: 'EXTREMA',
    height: '1.40m',
    duration: '2:30 min',
    tags: ['Nuevo', 'Más Popular'],
    color: 'from-red-500 to-orange-500',
    icon: Zap,
    stats: { speed: '150 km/h', height: '95m', inversions: 7 }
  },
  {
    id: 2,
    name: 'ABISMO VERTICAL',
    description: 'Caída libre desde 80 metros de altura con aceleración de 0 a 100 km/h en 2 segundos.',
    intensity: 'EXTREMA',
    height: '1.30m',
    duration: '1:45 min',
    tags: ['Adrenalina'],
    color: 'from-purple-500 to-pink-500',
    icon: TrendingUp,
    stats: { drop: '80m', acceleration: '4.5G', capacity: '24 personas' }
  },
  {
    id: 3,
    name: 'RÍO SALVAJE',
    description: 'Aventura acuática por rápidos artificiales con olas de 3 metros y cascadas.',
    intensity: 'ALTA',
    height: '1.10m',
    duration: '8:00 min',
    tags: ['Familiar', 'Acuático'],
    color: 'from-blue-500 to-cyan-500',
    icon: Users,
    stats: { length: '850m', drops: 5, boats: 12 }
  },
  {
    id: 4,
    name: 'CARROUSEL MÁGICO',
    description: 'Carrusel vintage restaurado con caballos de madera tallada y música clásica.',
    intensity: 'BAJA',
    height: '0.90m',
    duration: '4:00 min',
    tags: ['Infantil', 'Clásico'],
    color: 'from-green-500 to-emerald-500',
    icon: Heart,
    stats: { horses: 36, year: 1920, music: 'Órgano mecánico' }
  },
  {
    id: 5,
    name: 'LABERINTO DEL MIEDO',
    description: 'Recorrido interactivo por pasadizos oscuros con efectos especiales y actores.',
    intensity: 'MEDIA',
    height: '1.20m',
    duration: '15:00 min',
    tags: ['Terror', 'Interactivo'],
    color: 'from-gray-700 to-gray-900',
    icon: Shield,
    stats: { area: '1200m²', rooms: 8, actors: 12 }
  },
  {
    id: 6,
    name: 'TORRE PANORÁMICA',
    description: 'Observatorio giratorio a 60 metros con vistas de 360° de Madrid.',
    intensity: 'BAJA',
    height: '1.00m',
    duration: '6:00 min',
    tags: ['Panorámico', 'Familiar'],
    color: 'from-yellow-500 to-amber-500',
    icon: Star,
    stats: { height: '60m', rotation: '360°', capacity: '40 personas' }
  },
];

export default function Attractions() {
  return (
    <section id="atracciones" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-full mb-4">
            <Zap className="w-4 h-4" />
            <span className="font-semibold">ATRACCIONES ESTRELLA</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-900 dark:text-white">Vive la </span>
            <span className="text-gradient">Aventura</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Descubre nuestras atracciones más emocionantes, desde montañas rusas extremas 
            hasta experiencias familiares inolvidables.
          </p>
        </motion.div>

        {/* Attractions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractions.map((attraction, index) => {
            const Icon = attraction.icon;
            return (
              <motion.div
                key={attraction.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                {/* Card */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700">
                  {/* Header with gradient */}
                  <div className={`relative h-48 bg-gradient-to-br ${attraction.color} p-6`}>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {attraction.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Icon */}
                    <div className="absolute right-6 bottom-6">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Intensity Badge */}
                    <div className="absolute bottom-6 left-6">
                      <div className="px-4 py-2 bg-black/30 backdrop-blur-sm rounded-full">
                        <span className="text-white font-bold text-sm">{attraction.intensity}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {attraction.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {attraction.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {Object.entries(attraction.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-lg font-bold text-gray-900 dark:text-white">
                            {value}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Requirements */}
                    <div className="flex items-center justify-between border-t border-gray-200 dark:border-gray-700 pt-4">
                      <div className="flex items-center space-x-4">
                        <div className="text-center">
                          <div className="text-sm text-gray-500 dark:text-gray-400">Altura mín.</div>
                          <div className="font-semibold text-gray-900 dark:text-white">
                            {attraction.height}
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm text-gray-500 dark:text-gray-400">Duración</div>
                          <div className="font-semibold text-gray-900 dark:text-white">
                            {attraction.duration}
                          </div>
                        </div>
                      </div>
                      <button className="px-6 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full font-semibold hover:shadow-lg transition-shadow">
                        Ver más
                      </button>
                    </div>
                  </div>
                </div>

                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${attraction.color} opacity-0 group-hover:opacity-10 blur-3xl -z-10 transition-opacity duration-300 rounded-3xl`} />
              </motion.div>
            );
          })}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-500/20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '40+', label: 'Atracciones totales' },
              { value: '12', label: 'Atracciones nuevas' },
              { value: '98%', label: 'Satisfacción' },
              { value: '24/7', label: 'Soporte médico' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-700 dark:text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}