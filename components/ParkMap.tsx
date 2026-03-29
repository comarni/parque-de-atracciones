'use client';

import { motion } from 'framer-motion';
import { MapPin, Navigation, ZoomIn, ZoomOut, Compass, Layers } from 'lucide-react';
import { useState } from 'react';

const parkZones = [
  {
    id: 'adrenaline',
    name: 'Zona Adrenalina',
    color: 'bg-red-500',
    attractions: ['Tornado Extremo', 'Abismo Vertical', 'Torre de Caída'],
    coordinates: { x: '25%', y: '20%' }
  },
  {
    id: 'family',
    name: 'Zona Familiar',
    color: 'bg-blue-500',
    attractions: ['Río Salvaje', 'Carrousel Mágico', 'Tren del Parque'],
    coordinates: { x: '60%', y: '40%' }
  },
  {
    id: 'kids',
    name: 'Zona Infantil',
    color: 'bg-green-500',
    attractions: ['Laberinto de los Peques', 'Casa del Arcoíris', 'Mini Montaña'],
    coordinates: { x: '75%', y: '70%' }
  },
  {
    id: 'water',
    name: 'Zona Acuática',
    color: 'bg-cyan-500',
    attractions: ['Toboganes Gigantes', 'Piscina de Olas', 'Río Lento'],
    coordinates: { x: '40%', y: '80%' }
  },
  {
    id: 'horror',
    name: 'Zona del Terror',
    color: 'bg-purple-500',
    attractions: ['Laberinto del Miedo', 'Casa Encantada', 'Bosque Tenebroso'],
    coordinates: { x: '15%', y: '60%' }
  },
  {
    id: 'view',
    name: 'Zona Panorámica',
    color: 'bg-yellow-500',
    attractions: ['Torre Panorámica', 'Teleférico', 'Mirador 360°'],
    coordinates: { x: '85%', y: '25%' }
  },
];

const facilities = [
  { id: 'entrance', name: 'Entrada Principal', type: 'entrance', coordinates: { x: '50%', y: '95%' } },
  { id: 'restaurant', name: 'Restaurante Central', type: 'food', coordinates: { x: '50%', y: '50%' } },
  { id: 'first-aid', name: 'Enfermería', type: 'medical', coordinates: { x: '30%', y: '40%' } },
  { id: 'toilets', name: 'Baños Centrales', type: 'facility', coordinates: { x: '70%', y: '60%' } },
  { id: 'shop', name: 'Tienda de Regalos', type: 'shop', coordinates: { x: '60%', y: '20%' } },
  { id: 'parking', name: 'Parking Principal', type: 'parking', coordinates: { x: '50%', y: '5%' } },
];

export default function ParkMap() {
  const [selectedZone, setSelectedZone] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);
  const [showAttractions, setShowAttractions] = useState(true);
  const [showFacilities, setShowFacilities] = useState(true);

  const handleZoomIn = () => setZoom(Math.min(zoom + 0.1, 1.5));
  const handleZoomOut = () => setZoom(Math.max(zoom - 0.1, 0.5));

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
            <span className="font-semibold">MAPA INTERACTIVO</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-900 dark:text-white">Explora Nuestro </span>
            <span className="text-gradient">Parque</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Navega por nuestro mapa interactivo para planificar tu visita y no perderte nada.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Controls */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sticky top-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Navigation className="w-5 h-5 mr-2" />
                Controles del Mapa
              </h3>

              {/* Zoom Controls */}
              <div className="mb-8">
                <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-4">Zoom</h4>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={handleZoomOut}
                    className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    <ZoomOut className="w-5 h-5" />
                  </button>
                  <div className="flex-1">
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary-500 to-secondary-500"
                        style={{ width: `${(zoom - 0.5) * 100}%` }}
                      />
                    </div>
                  </div>
                  <button
                    onClick={handleZoomIn}
                    className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    <ZoomIn className="w-5 h-5" />
                  </button>
                </div>
                <div className="text-center mt-2 text-sm text-gray-500">
                  {Math.round(zoom * 100)}%
                </div>
              </div>

              {/* Layer Controls */}
              <div className="mb-8">
                <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-4 flex items-center">
                  <Layers className="w-5 h-5 mr-2" />
                  Capas
                </h4>
                <div className="space-y-3">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={showAttractions}
                      onChange={(e) => setShowAttractions(e.target.checked)}
                      className="sr-only"
                    />
                    <div className={`w-10 h-5 rounded-full transition-colors ${showAttractions ? 'bg-primary-500' : 'bg-gray-300 dark:bg-gray-600'}`}>
                      <div className={`w-3 h-3 rounded-full bg-white transform transition-transform ${showAttractions ? 'translate-x-6' : 'translate-x-1'} mt-1`} />
                    </div>
                    <span className="ml-3 text-gray-700 dark:text-gray-300">Mostrar Atracciones</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={showFacilities}
                      onChange={(e) => setShowFacilities(e.target.checked)}
                      className="sr-only"
                    />
                    <div className={`w-10 h-5 rounded-full transition-colors ${showFacilities ? 'bg-primary-500' : 'bg-gray-300 dark:bg-gray-600'}`}>
                      <div className={`w-3 h-3 rounded-full bg-white transform transition-transform ${showFacilities ? 'translate-x-6' : 'translate-x-1'} mt-1`} />
                    </div>
                    <span className="ml-3 text-gray-700 dark:text-gray-300">Mostrar Servicios</span>
                  </label>
                </div>
              </div>

              {/* Zones List */}
              <div>
                <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-4">Zonas del Parque</h4>
                <div className="space-y-3 max-h-60 overflow-y-auto pr-2">
                  {parkZones.map((zone) => (
                    <button
                      key={zone.id}
                      onClick={() => setSelectedZone(zone.id)}
                      className={`w-full text-left p-3 rounded-lg transition-all ${selectedZone === zone.id ? 'bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-700' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                    >
                      <div className="flex items-center">
                        <div className={`w-3 h-3 rounded-full ${zone.color} mr-3`} />
                        <span className="font-medium text-gray-900 dark:text-white">
                          {zone.name}
                        </span>
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mt-1 ml-6">
                        {zone.attractions.length} atracciones
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Legend */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-4">Leyenda</h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { color: 'bg-red-500', label: 'Adrenalina' },
                    { color: 'bg-blue-500', label: 'Familiar' },
                    { color: 'bg-green-500', label: 'Infantil' },
                    { color: 'bg-cyan-500', label: 'Acuática' },
                    { color: 'bg-purple-500', label: 'Terror' },
                    { color: 'bg-yellow-500', label: 'Panorámica' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center">
                      <div className={`w-3 h-3 rounded-full ${item.color} mr-2`} />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Interactive Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-2xl shadow-2xl overflow-hidden min-h-[600px]">
              {/* Map Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900/20 dark:to-blue-900/20">
                {/* Paths */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                  <path
                    d="M50,95 C50,70 30,60 25,40 C20,20 40,10 50,5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="text-gray-400/30"
                  />
                  <path
                    d="M50,95 C50,80 70,70 75,50 C80,30 60,20 50,5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="text-gray-400/30"
                  />
                </svg>
              </div>

              {/* Zones */}
              {parkZones.map((zone) => (
                <motion.div
                  key={zone.id}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  className={`absolute ${zone.color} rounded-full cursor-pointer transition-all ${selectedZone === zone.id ? 'ring-4 ring-white shadow-2xl' : 'ring-2 ring-white/50'}`}
                  style={{
                    left: zone.coordinates.x,
                    top: zone.coordinates.y,
                    width: selectedZone === zone.id ? '80px' : '60px',
                    height: selectedZone === zone.id ? '80px' : '60px',
                    transform: `translate(-50%, -50%) scale(${zoom})`,
                  }}
                  onClick={() => setSelectedZone(zone.id === selectedZone ? null : zone.id)}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Compass className="w-6 h-6 text-white" />
                  </div>
                  {selectedZone === zone.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-white dark:bg-gray-800 px-3 py-2 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
                    >
                      <div className="font-bold text-gray-900 dark:text-white text-sm">
                        {zone.name}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {zone.attractions.length} atracciones
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}

              {/* Facilities */}
              {showFacilities && facilities.map((facility) => (
                <div
                  key={facility.id}
                  className="absolute w-8 h-8 bg-white dark:bg-gray-700 rounded-full border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center cursor-pointer hover:scale-125 transition-transform"
                  style={{
                    left: facility.coordinates.x,
                    top: facility.coordinates.y,
                    transform: `translate(-50%, -50%) scale(${zoom})`,
                  }}
                  title={facility.name}
                >
                  {facility.type === 'entrance' && (
                    <MapPin className="w-4 h-4 text-green-600" />
                  )}
                  {facility.type === 'food' && (
                    <div className="w-3 h-3 bg-orange-500 rounded-full" />
                  )}
                  {facility.type === 'medical' && (
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                  )}
                  {facility.type === 'facility' && (
                    <div className="w-3 h-3 bg-blue-500 rounded-full" />
                  )}
                  {facility.type === 'shop' && (
                    <div className="w-3 h-3 bg-purple-500 rounded-full" />
                  )}
                  {facility.type === 'parking' && (
                    <div className="w-3 h-3 bg-gray-500 rounded-full" />
                  )}
                </div>
              ))}

              {/* Lake */}
              <div 
                className="absolute w-40 h-40 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-20"
                style={{
                  left: '30%',
                  top: '60%',
                  transform: `translate(-50%, -50%) scale(${zoom})`,
                }}
              />

              {/* Compass */}
              <div className="absolute bottom-4 right-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                <div className="flex items-center space-x-2">
                  <Compass className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">N</span>
                </div>
              </div>

              {/* Scale */}
              <div className="absolute bottom-4 left-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Escala: 1:1000
                </div>
                <div className="w-32 h-1 bg-gray-400 mt-2 relative">
                  <div className="absolute -top-1 left-0 w-2 h-3 bg-gray-600" />
                  <div className="absolute -top-1 right-0 w-2 h-3 bg-gray-600" />
                  <div className="text-xs text-gray-500 mt-1">100m</div>
                </div>
              </div>
            </div>

            {/* Selected Zone Info */}
            {selectedZone && (
              <motion.div
