'use client';

import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';

export default function SimpleMap() {
  return (
    <section id="mapa" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-full mb-4">
            <MapPin className="w-4 h-4" />
            <span className="font-semibold">MAPA DEL PARQUE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-900 dark:text-white">Explora Nuestro </span>
            <span className="text-gradient">Parque</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Navega por nuestro mapa interactivo para planificar tu visita y no perderte nada.
          </p>
        </motion.div>

        {/* Map Container */}
        <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-2xl shadow-2xl overflow-hidden min-h-[500px]">
          {/* Map Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900/20 dark:to-blue-900/20" />
          
          {/* Zones */}
          <div className="absolute inset-0">
            {/* Zone 1: Adrenaline */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="absolute w-24 h-24 bg-red-500 rounded-full cursor-pointer"
              style={{ left: '25%', top: '20%' }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Navigation className="w-8 h-8 text-white" />
              </div>
            </motion.div>

            {/* Zone 2: Family */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="absolute w-20 h-20 bg-blue-500 rounded-full cursor-pointer"
              style={{ left: '60%', top: '40%' }}
            />

            {/* Zone 3: Kids */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="absolute w-20 h-20 bg-green-500 rounded-full cursor-pointer"
              style={{ left: '75%', top: '70%' }}
            />

            {/* Zone 4: Water */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute w-20 h-20 bg-cyan-500 rounded-full cursor-pointer"
              style={{ left: '40%', top: '80%' }}
            />

            {/* Lake */}
            <div 
              className="absolute w-40 h-40 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-20"
              style={{ left: '30%', top: '60%' }}
            />
          </div>

          {/* Legend */}
          <div className="absolute bottom-4 left-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-4 shadow-lg">
            <h4 className="font-bold text-gray-900 dark:text-white mb-3">Zonas</h4>
            <div className="space-y-2">
              {[
                { color: 'bg-red-500', label: 'Adrenalina' },
                { color: 'bg-blue-500', label: 'Familiar' },
                { color: 'bg-green-500', label: 'Infantil' },
                { color: 'bg-cyan-500', label: 'Acuática' },
              ].map((item) => (
                <div key={item.label} className="flex items-center">
                  <div className={`w-3 h-3 rounded-full ${item.color} mr-2`} />
                  <span className="text-sm text-gray-700 dark:text-gray-300">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Compass */}
          <div className="absolute top-4 right-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-3 shadow-lg">
            <div className="flex items-center space-x-2">
              <Navigation className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">N</span>
            </div>
          </div>
        </div>

        {/* Zone Info */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: 'Zona Adrenalina', color: 'bg-red-500', attractions: 8 },
            { name: 'Zona Familiar', color: 'bg-blue-500', attractions: 12 },
            { name: 'Zona Infantil', color: 'bg-green-500', attractions: 10 },
            { name: 'Zona Acuática', color: 'bg-cyan-500', attractions: 6 },
          ].map((zone, index) => (
            <motion.div
              key={zone.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg"
            >
              <div className="flex items-center mb-3">
                <div className={`w-4 h-4 rounded-full ${zone.color} mr-3`} />
                <h4 className="font-bold text-gray-900 dark:text-white">{zone.name}</h4>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {zone.attractions} atracciones
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}