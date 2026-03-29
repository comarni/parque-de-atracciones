'use client';

import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3 mb-6"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                <div className="text-2xl">🎢</div>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Parque de Atracciones</h3>
                <p className="text-gray-400 text-sm">Madrid · Desde 1969</p>
              </div>
            </motion.div>
            <p className="text-gray-400 mb-6">
              El parque de atracciones más grande y moderno de Madrid. 
              Más de 40 atracciones, espectáculos en vivo y diversión para toda la familia.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary-400" />
                <div>
                  <div className="font-medium">Casa de Campo, s/n</div>
                  <div className="text-gray-400 text-sm">28011 Madrid, España</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400" />
                <div>
                  <div className="font-medium">91 123 45 67</div>
                  <div className="text-gray-400 text-sm">Lun-Dom: 9:00-22:00</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400" />
                <div>
                  <div className="font-medium">info@parquemadrid.com</div>
                  <div className="text-gray-400 text-sm">Respuesta en 24h</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Enlaces Rápidos</h4>
            <div className="space-y-3">
              {['Horarios y Precios', 'Mapa del Parque', 'Atracciones', 'Eventos Especiales', 'FAQ', 'Trabaja con Nosotros'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-bold mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Suscríbete para recibir ofertas exclusivas y novedades.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="tu@email.com"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-primary-500"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
              >
                Suscribirse
              </button>
            </form>
            <div className="mt-6 p-4 bg-gray-800/50 rounded-lg">
              <div className="text-sm text-gray-400">
                <Heart className="w-4 h-4 inline mr-2 text-red-400" />
                Más de 1 millón de visitantes felices cada año
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Parque de Atracciones de Madrid. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white">Política de Privacidad</a>
              <a href="#" className="text-gray-400 hover:text-white">Términos y Condiciones</a>
              <a href="#" className="text-gray-400 hover:text-white">Cookies</a>
              <a href="#" className="text-gray-400 hover:text-white">Aviso Legal</a>
            </div>
          </div>
        </div>

        {/* Easter Egg */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center space-x-2 text-gray-500 text-sm">
            <span>🎯</span>
            <span>Encuentra los 3 easter eggs en la web</span>
            <span>🎯</span>
          </div>
        </div>
      </div>
    </footer>
  );
}