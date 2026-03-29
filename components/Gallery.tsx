'use client';

import { motion } from 'framer-motion';
import { Play, Image as ImageIcon, Video, Camera, Grid3x3 } from 'lucide-react';
import { useState } from 'react';

const galleryImages = [
  {
    id: 1,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Montaña Rusa Nocturna',
    category: 'atracciones'
  },
  {
    id: 2,
    type: 'video',
    src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Espectáculo de Fuegos',
    category: 'espectaculos'
  },
  {
    id: 3,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1567593810070-7a5c0925344e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Zona Acuática',
    category: 'acuaticas'
  },
  {
    id: 4,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1519677100203-7c61d0b01354?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Atracciones Familiares',
    category: 'familiar'
  },
  {
    id: 5,
    type: 'video',
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Vistas Panorámicas',
    category: 'panoramicas'
  },
  {
    id: 6,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Decoración Temática',
    category: 'decoracion'
  },
  {
    id: 7,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Restaurantes',
    category: 'restaurantes'
  },
  {
    id: 8,
    type: 'video',
    src: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Eventos Especiales',
    category: 'eventos'
  },
];

const categories = [
  { id: 'all', label: 'Todo', icon: Grid3x3 },
  { id: 'atracciones', label: 'Atracciones', icon: Camera },
  { id: 'espectaculos', label: 'Espectáculos', icon: Video },
  { id: 'familiar', label: 'Familiar', icon: ImageIcon },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <section id="galeria" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-full mb-4">
            <Camera className="w-4 h-4" />
            <span className="font-semibold">GALERÍA MULTIMEDIA</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-900 dark:text-white">Momentos </span>
            <span className="text-gradient">Inolvidables</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Descubre la magia de nuestro parque a través de imágenes y videos capturados por nuestros visitantes.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all ${isActive 
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg' 
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="font-medium">{category.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredImages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedImage(item.id)}
            >
              {/* Image/Video Container */}
              <div className="relative overflow-hidden rounded-2xl aspect-square">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">
                        {item.category}
                      </span>
                      {item.type === 'video' && (
                        <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
                          <Play className="w-5 h-5 text-white fill-current" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Type Badge */}
                <div className="absolute top-4 right-4">
                  <div className={`px-3 py-1 rounded-full backdrop-blur-sm ${item.type === 'video' ? 'bg-red-500/80' : 'bg-blue-500/80'} text-white text-xs font-semibold`}>
                    {item.type === 'video' ? 'VIDEO' : 'FOTO'}
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl -z-10 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '5K+', label: 'Fotos compartidas' },
            { value: '1.2M', label: 'Visualizaciones' },
            { value: '50K', label: 'Videos subidos' },
            { value: '#ParqueMadrid', label: 'Trending en redes' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            ¿Tienes fotos o videos increíbles de tu visita? ¡Compártelos con nosotros!
          </p>
          <button className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow">
            <Camera className="w-5 h-5" />
            <span>Subir mis Fotos</span>
          </button>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img
              src={galleryImages.find(img => img.id === selectedImage)?.src}
              alt="Selected"
              className="w-full h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white text-2xl hover:text-primary-400"
            >
              ✕
            </button>
          </div>
        </motion.div>
      )}
    </section>
  );
}