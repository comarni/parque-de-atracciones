# Script para configurar Git y hacer push del proyecto

Write-Host "🚀 Configurando Git para Parque de Atracciones de Madrid" -ForegroundColor Cyan

# 1. Inicializar repositorio
Write-Host "📁 Inicializando repositorio Git..." -ForegroundColor Yellow
git init

# 2. Configurar usuario
Write-Host "👤 Configurando usuario Git..." -ForegroundColor Yellow
git config user.name "comarni"
git config user.email "marcovonarana10@gmail.com"

# 3. Agregar archivos (excluyendo node_modules)
Write-Host "📦 Agregando archivos al staging..." -ForegroundColor Yellow
git add .

# 4. Commit inicial
Write-Host "💾 Creando commit inicial..." -ForegroundColor Yellow
git commit -m "feat: initial commit - Parque de Atracciones de Madrid website"

# 5. Agregar remote
Write-Host "🔗 Configurando repositorio remoto..." -ForegroundColor Yellow
git remote add origin https://github.com/comarni/parque-de-atracciones.git

# 6. Verificar que el repositorio existe
Write-Host "🔍 Verificando repositorio remoto..." -ForegroundColor Yellow
git remote -v

# 7. Hacer push
Write-Host "🚀 Haciendo push al repositorio..." -ForegroundColor Green
git push -u origin main

Write-Host "✅ ¡Proyecto subido exitosamente!" -ForegroundColor Green
Write-Host "🌐 URL: https://github.com/comarni/parque-de-atracciones" -ForegroundColor Cyan
Write-Host "📱 Para activar GitHub Pages:" -ForegroundColor Yellow
Write-Host "   1. Ve a: https://github.com/comarni/parque-de-atracciones/settings/pages" -ForegroundColor White
Write-Host "   2. En Source, selecciona: Deploy from a branch" -ForegroundColor White
Write-Host "   3. En Branch, selecciona: main y carpeta / (root)" -ForegroundColor White
Write-Host "   4. Click Save" -ForegroundColor White
Write-Host "   5. Espera 2-3 minutos para el deployment" -ForegroundColor White