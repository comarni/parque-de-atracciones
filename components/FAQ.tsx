'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Ticket, Clock, Users, Shield } from 'lucide-react';
import { useState } from 'react';

const faqItems = [
  {
    question: '¿Cuáles son los horarios de apertura?',
    answer: 'El parque abre de lunes a viernes de 10:00 a 20:00, sábados de 9:00 a 22:00 y domingos/festivos de 9:00 a 21:00. Los horarios nocturnos (viernes y sábado) son de 20:00 a 02:00.',
    category: 'horarios',
    icon: Clock
  },
  {
    question: '¿Puedo comprar entradas online?',
    answer: 'Sí, recomendamos comprar entradas online para obtener descuentos y evitar colas. Las entradas online tienen un 15% de descuento y puedes seleccionar fecha y hora específica.',
    category: 'entradas',
    icon: Ticket
  },
  {
    question: '¿Hay descuentos para grupos?',
    answer: 'Sí, grupos de 10 o más personas obtienen un 25% de descuento. Grupos escolares y empresas tienen programas especiales. Contacta con nuestro departamento de grupos para más información.',
    category: 'precios',
    icon: Users
  },
  {
    question: '¿Qué medidas de seguridad tienen?',
    answer: 'Contamos con personal médico 24/7, sistemas de seguridad en todas las atracciones, protocolos anti-COVID, y estrictos controles de altura y peso para cada atracción. Todas nuestras atracciones pasan inspecciones diarias.',
    category: 'seguridad',
    icon: Shield
  },
  {
    question: '¿Puedo llevar comida al parque?',
    answer: 'Sí, puedes traer tu propia comida y bebida (excepto alcohol). También tenemos 8 restaurantes y 15 puntos de comida rápida con opciones para todos los gustos y dietas especiales.',
    category: 'servicios',
    icon: HelpCircle
  },
  {
    question: '¿Hay atracciones para niños pequeños?',
    answer: 'Sí, tenemos una zona infantil exclusiva con 12 atracciones diseñadas para niños de 2 a 10 años, todas supervisadas por monitores especializados. También hay zonas de descanso y cambiadores.',
    category: 'familiar',
    icon: Users
  },
  {
    question: '¿Qué pasa si llueve?',
    answer: 'La mayoría de nuestras atracciones están cubiertas o son interiores. En caso de lluvia intensa, ofrecemos reembolsos o cambio de fecha. Consulta nuestra política meteorológica en la web.',
    category: 'clima',
    icon: Shield
  },
  {
    question: '¿Hay parking disponible?',
    answer: 'Sí, contamos con parking gratuito para 5,000 vehículos. También tenemos parking VIP con reserva previa, y estamos conectados con transporte público (metro y autobús).',
    category: 'acceso',
    icon: HelpCircle
  },
];

const categories = [
  { id: 'all', label: 'Todas', count: faqItems.length },
  { id: 'horarios', label: 'Horarios', count: faqItems.filter(item => item.category === 'horarios').length },
  { id: 'entradas', label: 'Entradas', count: faqItems.filter(item => item.category === 'entradas').length },
  { id: 'precios', label: 'Precios', count: faqItems.filter(item => item.category === 'precios').length },
  { id: 'seguridad', label: 'Seguridad', count: faqItems.filter(item => item.category === 'seguridad').length },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredItems = selectedCategory === 'all' 
    ? faqItems 
    : faqItems.filter(item => item.category === selectedCategory);

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-full mb-4">
            <HelpCircle className="w-4 h-4" />
            <span className="font-semibold">PREGUNTAS FRECUENTES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-900 dark:text-white">¿Tienes </span>
            <span className="text-gradient">Dudas?</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Resolvemos las preguntas más comunes de nuestros visitantes.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => {
              const isActive = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-5 py-2 rounded-full transition-all ${isActive 
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg' 
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  <span className="font-medium">{category.label}</span>
                  <span className={`ml-2 text-xs px-2 py-1 rounded-full ${isActive ? 'bg-white/20' : 'bg-gray-200 dark:bg-gray-700'}`}>
                    {category.count}
                  </span>
                </button>
              );
            })}
          </motion.div>

          {/* FAQ Items */}
          <AnimatePresence>
            {filteredItems.map((item, index) => {
              const Icon = item.icon;
              const isOpen = openIndex === index;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="mb-4"
                >
                  <motion.button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className={`w-full text-left p-6 rounded-2xl transition-all ${isOpen 
                      ? 'bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 border border-primary-200 dark:border-primary-700' 
                      : 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                    } shadow-lg hover:shadow-xl`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-lg ${isOpen ? 'bg-gradient-to-r from-primary-500 to-secondary-500' : 'bg-gray-100 dark:bg-gray-700'}`}>
                          <Icon className={`w-5 h-5 ${isOpen ? 'text-white' : 'text-gray-600 dark:text-gray-400'}`} />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                          {item.question}
                        </h3>
                      </div>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      </motion.div>
                    </div>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                            <p className="text-gray-700 dark:text-gray-300">
                              {item.answer}
                            </p>
                            <div className="mt-4 flex items-center space-x-4">
                              <span className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-400">
                                {item.category}
                              </span>
                              <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                                ¿No resuelve tu duda?
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-500/20"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                ¿No encuentras tu respuesta?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                Nuestro equipo de atención al cliente está disponible 24/7 para ayudarte con cualquier pregunta.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow">
                  Contactar por Chat
                </button>
                <button className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  Llamar: 91 123 45 67
                </button>
              </div>
            </div>
          </motion.div>

          {/* Quick Tips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { title: '📱 App Móvil', desc: 'Descarga nuestra app para mapas en tiempo real y reservas rápidas' },
              { title: '🎫 Entradas Digitales', desc: 'Usa tu móvil como entrada para acceso más rápido' },
              { title: '🕒 Horas Pico', desc: 'Evita las 12:00-14:00 y 17:00-19:00 para menos colas' },
            ].map((tip, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="font-bold text-gray-900 dark:text-white mb-2">{tip.title}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{tip.desc}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}