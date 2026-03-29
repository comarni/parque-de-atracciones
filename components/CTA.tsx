'use client';

import { motion } from 'framer-motion';
import { Ticket, Calendar, MapPin, Clock, ArrowRight, Sparkles, Gift } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contacto" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-secondary-500 to-purple-500 opacity-90" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80')] bg-cover bg-center mix-blend-overlay opacity-20" />
        
        {/* Animated Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              initial={{ y: -100, x: Math.random() * 100 }}
              animate={{ 
                y: window.innerHeight + 100,
                x: Math.random() * 100 - 50 + (i * 10)
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: i * 0.1
              }}
              style={{
                left: `${(i * 3.3)}%`,
                opacity: 0.3
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-full mb-6"
            >
              <Sparkles className="w-5 h-5" />
              <span className="font-bold">¡OFERTA ESPECIAL!</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-white">Tu Aventura </span>
              <span className="text-yellow-300">Comienza Aquí</span>
            </h2>
            
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Reserva ahora y obtén un <span className="font-bold text-yellow-300">20% de descuento</span> en entradas online + 
              una <span className="font-bold text-yellow-300">sorpresa gratis</span> al llegar.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Booking Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-white mb-8">Reserva Rápida</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/80 mb-2">Fecha de Visita</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
                      <input
                        type="date"
                        className="w-full bg-white/10 border border-white/30 text-white rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:border-white/50"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-white/80 mb-2">Número de Personas</label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
                      <select className="w-full bg-white/10 border border-white/30 text-white rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:border-white/50">
                        <option value="1">1 persona</option>
                        <option value="2">2 personas</option>
                        <option value="3">3 personas</option>
                        <option value="4">4 personas</option>
                        <option value="5">5+ personas (grupo)</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-white/80 mb-2">Tipo de Entrada</label>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: 'Día Completo', price: '€35', popular: true },
                      { label: 'Nocturna', price: '€30' },
                      { label: '2 Días', price: '€60', best: true },
                      { label: 'Anual', price: '€120' },
                    ].map((option, index) => (
                      <label
                        key={index}
                        className={`relative cursor-pointer ${option.popular ? 'ring-2 ring-yellow-400' : ''}`}
                      >
                        <input
                          type="radio"
                          name="ticket-type"
                          className="sr-only"
                          defaultChecked={index === 0}
                        />
                        <div className={`p-4 rounded-xl border-2 transition-all ${option.popular 
                          ? 'bg-white/20 border-yellow-400' 
                          : 'bg-white/10 border-white/20 hover:border-white/40'
                        }`}>
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="font-bold text-white">{option.label}</div>
                              <div className="text-white/70 text-sm mt-1">Incluye todas las atracciones</div>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-white">{option.price}</div>
                              {option.best && (
                                <div className="text-xs bg-yellow-400 text-black px-2 py-1 rounded-full mt-1">
                                  MEJOR OFERTA
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="bg-white/10 border border-white/20 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-white/80">Descuento Online</div>
                    <div className="text-green-400 font-bold">-20%</div>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-white/80">Sorpresa Gratis</div>
                    <div className="text-yellow-400 font-bold">¡Incluido!</div>
                  </div>
                  <div className="border-t border-white/20 pt-3">
                    <div className="flex items-center justify-between">
                      <div className="text-white font-bold">Total</div>
                      <div className="text-3xl font-bold text-white">€28</div>
                    </div>
                    <div className="text-white/60 text-sm">por persona</div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xl font-bold py-5 rounded-xl shadow-2xl flex items-center justify-center space-x-3 hover:shadow-3xl transition-all"
                >
                  <Ticket className="w-6 h-6" />
                  <span>Reservar Ahora con Descuento</span>
                  <ArrowRight className="w-6 h-6" />
                </motion.button>

                <div className="text-center text-white/70 text-sm">
                  <Clock className="w-4 h-4 inline mr-2" />
                  Oferta válida por tiempo limitado. Cancelación gratuita hasta 24h antes.
                </div>
              </form>
            </motion.div>

            {/* Right: Features */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {[
                {
                  icon: Gift,
                  title: 'Sorpresa Gratis',
                  description: 'Recibe un regalo especial al llegar (foto gratis, comida o souvenir)',
                  color: 'from-pink-500 to-rose-500'
                },
                {
                  icon: Clock,
                  title: 'Acceso Rápido',
                  description: 'Entrada prioritaria sin colas con reserva online',
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  icon: MapPin,
                  title: 'Mapa Digital',
                  description: 'Acceso a nuestro mapa interactivo con tiempos de espera en vivo',
                  color: 'from-green-500 to-emerald-500'
                },
                {
                  icon: Sparkles,
                  title: 'Experiencia VIP',
                  description: 'Posibilidad de upgrade a experiencia VIP con guía personal',
                  color: 'from-purple-500 to-pink-500'
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-4"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                    <p className="text-white/80">{feature.description}</p>
                  </div>
                </motion.div>
              ))}

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 mt-8"
              >
                <div className="grid grid-cols-3 gap-6">
                  {[
                    { value: '98%', label: 'Satisfacción' },
                    { value: '24/7', label: 'Soporte' },
                    { value: '10K+', label: 'Reservas' },
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-white/70 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 justify-center">
                {['💳 Pago Seguro', '🔒 Garantía 100%', '⭐ 4.8/5 Rating', '🏆 Mejor Parque 2024'].map((badge, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm border border-white/20"
                  >
                    {badge}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-black/30 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white font-medium">¡ÚLTIMAS ENTRADAS DISPONIBLES!</span>
            </div>
            
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              No pierdas esta oportunidad única. Las entradas con descuento se agotan rápido.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-10 py-4 rounded-full text-lg font-bold shadow-2xl hover:shadow-3xl transition-all"
              >
                🎫 Ver Todas las Ofertas
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-white/10 transition-colors"
              >
                📞 Llamar para Grupos
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute top-1/4 left-10 hidden lg:block"
      >
        <div className="w-24 h-24 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-2xl" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 4, delay: 0.5 }}
        className="absolute bottom-1/4 right-10 hidden lg:block"
      >
        <div className="w-32 h-32 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-2xl" />
      </motion.div>
    </section>
  );
}