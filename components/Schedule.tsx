'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, Ticket, Users, Sun, Moon } from 'lucide-react';

const schedules = [
  {
    day: 'Lunes a Viernes',
    hours: '10:00 - 20:00',
    type: 'Normal',
    price: '€35',
    features: ['Todas las atracciones', 'Espectáculos diarios', 'Acceso a zonas acuáticas'],
    icon: Sun,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    day: 'Sábados',
    hours: '09:00 - 22:00',
    type: 'Extendido',
    price: '€45',
    features: ['Horario extendido', 'Espectáculos nocturnos', 'Fuegos artificiales'],
    icon: Clock,
    color: 'from-purple-500 to-pink-500'
  },
  {
    day: 'Domingos y Festivos',
    hours: '09:00 - 21:00',
    type: 'Familiar',
    price: '€40',
    features: ['Actividades familiares', 'Descuentos grupos', 'Talleres infantiles'],
    icon: Users,
    color: 'from-green-500 to-emerald-500'
  },
  {
    day: 'Nocturno (Vie-Sáb)',
    hours: '20:00 - 02:00',
    type: 'Nocturna',
    price: '€30',
    features: ['Atracciones iluminadas', 'Música en vivo', 'Zona VIP adultos'],
    icon: Moon,
    color: 'from-gray-700 to-gray-900'
  },
];

const specialEvents = [
  { date: '15 Jun', title: 'Noche de Verano', description: 'Fiesta con DJ y atracciones iluminadas' },
  { date: '20 Jul', title: 'Festival Familiar', description: 'Actividades especiales para niños' },
  { date: '5 Ago', title: 'Adrenalina Total', description: 'Competencias en atracciones extremas' },
  { date: '25 Oct', title: 'Halloween Terror', description: 'Decoración especial y laberinto del terror' },
];

export default function Schedule() {
  return (
    <section id="horarios" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-full mb-4">
            <Calendar className="w-4 h-4" />
            <span className="font-semibold">HORARIOS Y PRECIOS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-900 dark:text-white">Planifica Tu </span>
            <span className="text-gradient">Visita</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Consulta nuestros horarios, precios y eventos especiales para aprovechar al máximo tu experiencia.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Schedule Cards */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-6">
              {schedules.map((schedule, index) => {
                const Icon = schedule.icon;
                return (
                  <motion.div
                    key={schedule.day}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700"
                  >
                    {/* Header */}
                    <div className={`bg-gradient-to-r ${schedule.color} p-6`}>
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-2xl font-bold text-white">{schedule.day}</h3>
                          <div className="flex items-center space-x-2 mt-2">
                            <Clock className="w-4 h-4 text-white/80" />
                            <span className="text-white/90 font-medium">{schedule.hours}</span>
                          </div>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">Tipo</div>
                          <div className="text-lg font-bold text-gray-900 dark:text-white">
                            {schedule.type}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-500 dark:text-gray-400">Precio</div>
                          <div className="text-3xl font-bold text-gradient">
                            {schedule.price}
                            <span className="text-lg text-gray-500 dark:text-gray-400">/persona</span>
                          </div>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="space-y-3 mb-6">
                        {schedule.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center">
                            <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mr-3" />
                            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <button className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow">
                        Comprar Entradas
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Price Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-500/20"
            >
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">€120</div>
                  <div className="text-gray-600 dark:text-gray-400">Pase Anual</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">25%</div>
                  <div className="text-gray-600 dark:text-gray-400">Descuento Grupos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">Gratis</div>
                  <div className="text-gray-600 dark:text-gray-400">Menores 3 años</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Special Events */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sticky top-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Ticket className="w-5 h-5 mr-2" />
                Eventos Especiales
              </h3>

              <div className="space-y-6">
                {specialEvents.map((event, index) => (
                  <motion.div
                    key={event.date}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="border-l-4 border-primary-500 pl-4 py-2"
                  >
                    <div className="flex items-start">
                      <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-3 py-1 rounded-lg mr-4">
                        <div className="text-sm font-bold">{event.date}</div>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white">{event.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Tips */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h4 className="font-bold text-gray-900 dark:text-white mb-4">💡 Consejos</h4>
                <ul className="space-y-3">
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3" />
                    Llega temprano para evitar colas
                  </li>
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3" />
                    Compra online para descuentos
                  </li>
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3" />
                    Consulta el pronóstico del tiempo
                  </li>
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3" />
                    Descarga nuestra app móvil
                  </li>
                </ul>
              </div>

              {/* Weather Widget */}
              <div className="mt-8 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Madrid</div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">24°C</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Soleado</div>
                  </div>
                  <div className="text-4xl">☀️</div>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                  Perfecto para visitar el parque
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}