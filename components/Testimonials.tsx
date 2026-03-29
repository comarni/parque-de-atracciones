'use client';

import { motion } from 'framer-motion';
import { Star, Quote, ThumbsUp, User } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Ana Martínez',
    role: 'Visitante Familiar',
    content: '¡Increíble experiencia! Mis hijos no paraban de sonreír. Las atracciones están en perfecto estado y el personal es muy amable.',
    rating: 5,
    date: 'Hace 2 días',
    avatar: '👨‍👩‍👧‍👦'
  },
  {
    id: 2,
    name: 'Carlos Rodríguez',
    role: 'Aventurero',
    content: 'La montaña rusa Tornado es una locura. Nunca había sentido tanta adrenalina. ¡Volveré seguro!',
    rating: 5,
    date: 'Hace 1 semana',
    avatar: '🎢'
  },
  {
    id: 3,
    name: 'Laura Sánchez',
    role: 'Influencer de Viajes',
    content: 'Perfecto para fotos y contenido. Las zonas temáticas están muy bien decoradas y los espectáculos nocturnos son mágicos.',
    rating: 4,
    date: 'Hace 3 días',
    avatar: '📸'
  },
  {
    id: 4,
    name: 'Miguel Torres',
    role: 'Grupo de Amigos',
    content: 'Pasamos un día increíble. La organización es perfecta y las colas se mueven rápido. Muy recomendable.',
    rating: 5,
    date: 'Hace 1 mes',
    avatar: '👥'
  },
  {
    id: 5,
    name: 'Sofía López',
    role: 'Primera Visita',
    content: 'No esperaba tanto. El parque es enorme y tiene atracciones para todas las edades. Volveremos pronto.',
    rating: 5,
    date: 'Hace 2 semanas',
    avatar: '🌟'
  },
  {
    id: 6,
    name: 'David García',
    role: 'Visitante Frecuente',
    content: 'Tengo pase anual y no me arrepiento. Siempre hay algo nuevo y el mantenimiento es impecable.',
    rating: 5,
    date: 'Hace 5 días',
    avatar: '🎫'
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-full mb-4">
            <Quote className="w-4 h-4" />
            <span className="font-semibold">OPINIONES REALES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-900 dark:text-white">Lo que Dicen Nuestros </span>
            <span className="text-gradient">Visitantes</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Más de 1 millón de visitantes felices cada año comparten sus experiencias.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-full flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <div className="text-xs text-gray-500">{testimonial.date}</div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                  />
                ))}
                <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                  {testimonial.rating}/5
                </span>
              </div>

              {/* Content */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Actions */}
              <div className="flex items-center justify-between border-t border-gray-100 dark:border-gray-700 pt-4">
                <button className="flex items-center space-x-2 text-gray-500 hover:text-primary-600 transition-colors">
                  <ThumbsUp className="w-4 h-4" />
                  <span className="text-sm">Útil</span>
                </button>
                <div className="flex items-center space-x-4">
                  <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                    Responder
                  </button>
                  <button className="text-sm text-gray-500 hover:text-gray-700">
                    Compartir
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-500/20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '4.8/5', label: 'Valoración Media', icon: Star },
              { value: '10K+', label: 'Opiniones', icon: Quote },
              { value: '98%', label: 'Recomiendan', icon: ThumbsUp },
              { value: '#1', label: 'En Madrid', icon: User },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-700 dark:text-gray-300">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            ¿Ya has visitado nuestro parque? ¡Comparte tu experiencia!
          </p>
          <button className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow">
            <Quote className="w-5 h-5" />
            <span>Dejar mi Opinión</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}