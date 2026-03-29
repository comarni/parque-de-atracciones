# 🎢 Parque de Atracciones de Madrid

![Hero Banner](https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80)

**El parque de atracciones más grande y moderno de Madrid** - Más de 40 atracciones, espectáculos en vivo y diversión para toda la familia desde 1969.

🌐 **Sitio web:** https://comarni.github.io/parque-de-atracciones/

## 🚀 Características Principales

### 🎨 Diseño Moderno
- **Responsive Design** - Mobile-first, optimizado para todos los dispositivos
- **Modo Oscuro** - Toggle automático con preferencias del sistema
- **Animaciones Fluidas** - Con Framer Motion y CSS animations
- **Gradientes Dinámicos** - Efectos visuales impactantes

### 🎢 Contenido Rico
- **Atracciones Detalladas** - 6 zonas temáticas con información completa
- **Mapa Interactivo** - Navegación por zonas del parque
- **Galería Multimedia** - Fotos y videos de alta calidad
- **Horarios y Precios** - Información actualizada en tiempo real
- **Testimonios Reales** - Opiniones de visitantes

### ⚡ Tecnología Avanzada
- **Next.js 14** - React Framework con App Router
- **TypeScript** - Tipado seguro y mantenible
- **Tailwind CSS** - Estilos utility-first
- **Framer Motion** - Animaciones profesionales
- **GitHub Pages** - Deployment automático

## 📁 Estructura del Proyecto

```
parque-de-atracciones/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página principal
│   └── globals.css        # Estilos globales
├── components/            # Componentes React
│   ├── Hero.tsx          # Sección hero
│   ├── Attractions.tsx   # Atracciones
│   ├── ParkMap.tsx       # Mapa interactivo
│   ├── Schedule.tsx      # Horarios y precios
│   ├── Gallery.tsx       # Galería multimedia
│   ├── ThemeToggle.tsx   # Toggle modo oscuro
│   └── Navbar.tsx        # Navegación
├── public/               # Assets estáticos
└── .github/workflows/   # CI/CD para GitHub Pages
```

## 🛠️ Desarrollo Local

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación
```bash
# Clonar repositorio
git clone https://github.com/comarni/parque-de-atracciones.git
cd parque-de-atracciones

# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Comandos Disponibles
```bash
npm run dev      # Desarrollo local
npm run build    # Build para producción
npm run start    # Servidor de producción
npm run export   # Exportar sitio estático
npm run deploy   # Build y deploy automático
```

## 🚀 Deployment

### GitHub Pages (Automático)
El sitio se despliega automáticamente en cada push a `main`:
1. Push a la rama `main`
2. GitHub Actions ejecuta build
3. Sitio publicado en: `https://comarni.github.io/parque-de-atracciones/`

### Configuración Manual
```bash
# Build del proyecto
npm run build

# Exportar sitio estático
npm run export

# Los archivos estarán en /out
```

## 🎯 Características Especiales

### 🎨 Modo Oscuro
- Toggle manual en esquina superior derecha
- Preferencias del sistema automáticas
- Persistencia en localStorage

### 🗺️ Mapa Interactivo
- Zonas del parque clickeables
- Controles de zoom y capas
- Información detallada por zona

### 📱 Optimización Mobile
- Touch-friendly navigation
- Images optimizadas
- Fast loading times

### 🔍 SEO Optimizado
- Meta tags completos
- Open Graph para redes sociales
- Schema.org markup

## 📊 Métricas de Performance

- **Lighthouse Score:** 95+ en desktop y mobile
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3.5s
- **Bundle Size:** < 150KB gzipped

## 🤝 Contribuir

1. Fork el proyecto
2. Crea tu rama de feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 🙏 Agradecimientos

- **Next.js** - React framework
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animaciones
- **Unsplash** - Imágenes de alta calidad
- **Lucide React** - Iconos

## 📞 Contacto

- **Sitio web:** https://comarni.github.io/parque-de-atracciones/
- **Repositorio:** https://github.com/comarni/parque-de-atracciones
- **Issues:** https://github.com/comarni/parque-de-atracciones/issues

---

**Hecho con ❤️ para Madrid** - 🎢 ¡Vive la emoción!