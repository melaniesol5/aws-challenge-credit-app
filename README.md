# 🏦 CréditoFácil - Aplicación de Otorgamiento de Crédito

## 📋 Descripción
Aplicación web completa para solicitar créditos personales con validación automatizada de documentos usando AWS Rekognition y notificaciones SMS con AWS SNS. Incluye sistema de navegación, blog informativo y sección de contacto.

## 🏗️ Arquitectura del Proyecto

### Frontend (React 18)
```
src/
├── components/
│   ├── layout/
│   │   ├── Header.js          # Navegación principal
│   │   └── Footer.js          # Footer con QR AFIP y links
│   ├── pages/
│   │   ├── Cliente.js         # Flujo de solicitud de crédito
│   │   ├── Blog.js            # Artículos financieros
│   │   └── Contacto.js        # Formulario de contacto
│   ├── CreditForm.js          # Formulario de datos personales
│   ├── OfferApproval.js       # Gestión de ofertas y CBU
│   ├── DocumentValidation.js  # Validación con AWS Rekognition
│   └── RejectionScreen.js     # Pantalla de rechazo
├── App.js                     # Componente principal con routing
├── App.css                    # Estilos globales
└── index.js                   # Punto de entrada
```

### Tecnologías Utilizadas
- **React 18**: Framework principal
- **PrimeReact**: Biblioteca de componentes UI
- **AWS SDK**: Integración con servicios AWS
- **CSS3**: Estilos con gradientes y responsive design

## ✨ Características Principales

### 🏛️ Bancos Soportados
- **✅ Habilitados**: BBVA, Santander, Galicia, Nación
- **❌ No habilitados**: Macro, Comafi, ICBC (pantalla de rechazo)

### 💰 Sistema de Ofertas
- **Monto máximo**: $300.000 ARS
- **Cuotas**: 3, 6, 9, 12 meses
- **Tasas progresivas**:
  - 3 cuotas: 15% | 6 cuotas: 25%
  - 9 cuotas: 35% | 12 cuotas: 45%
- **Cálculo automático** de cuota mensual

### 🔐 Validación de CBU
**Códigos de banco implementados:**
```
BBVA: 017     | Santander: 072
Galicia: 007  | Nación: 011
Macro: 285    | Comafi: 299
ICBC: 150
```

### 🤖 Integración AWS
- **Rekognition**: Detección de texto en documentos
- **SNS**: Notificaciones SMS de aprobación
- **Simulación**: Funciona sin credenciales para desarrollo

### 🎨 Interfaz de Usuario
- **Header**: Logo, navegación, CTA
- **Footer**: QR AFIP, derechos, links de productos
- **Responsive**: Adaptable a móviles y tablets
- **Drag & Drop**: Carga de documentos con recomendaciones
- **Indicador de progreso**: Pasos del proceso de crédito

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js 16+ y npm
- Cuenta AWS (opcional para producción)

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone <repository-url>
cd aws-challenge
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno** (opcional)
```bash
cp .env.example .env
# Editar .env con credenciales AWS reales si se desea
```

4. **Ejecutar en modo desarrollo**
```bash
npm start
```

5. **Acceder a la aplicación**
```
http://localhost:3000
```

### Variables de Entorno
```env
REACT_APP_AWS_ACCESS_KEY_ID=tu_access_key_id
REACT_APP_AWS_SECRET_ACCESS_KEY=tu_secret_access_key
```

## 🔄 Flujo de la Aplicación

### 1. **Datos Personales**
- Formulario con validación
- Selección de banco
- Rechazo automático para bancos no habilitados

### 2. **Oferta de Crédito**
- Mensaje de aprobación personalizado
- Selección de monto y cuotas
- Cálculo automático de intereses
- Validación de CBU (22 dígitos + código de banco)
- Aceptación de términos y condiciones

### 3. **Validación de Documento**
- Drag & drop con recomendaciones de foto
- Validación con AWS Rekognition (simulada)
- Preview de imagen seleccionada

### 4. **Aprobación Final**
- Notificación SMS (simulada)
- Resumen completo del crédito
- Confirmación de transferencia

## 📱 Páginas Adicionales

- **Blog**: Artículos sobre finanzas personales
- **Contacto**: Formulario + información de contacto
- **Footer**: Links a productos, redes sociales, QR AFIP

## 🛠️ Scripts Disponibles

```bash
npm start          # Desarrollo
npm run build      # Producción
npm test           # Tests
npm run eject      # Eject (no recomendado)
```

## 🔒 Cumplimiento Legal

- **QR AFIP**: Código QR simulado para cumplimiento
- **Regulación BCRA**: Mención en footer
- **Términos y condiciones**: Checkbox obligatorio
- **Protección de datos**: Validación de formularios

## 🎯 Próximas Mejoras

- [ ] Integración real con AWS
- [ ] Base de datos para persistencia
- [ ] Sistema de autenticación
- [ ] Dashboard administrativo
- [ ] Reportes y analytics
- [ ] Tests automatizados

## 📞 Soporte

Para consultas técnicas o comerciales:
- **Email**: info@creditofacil.com
- **Teléfono**: 0800-123-4567
- **Horarios**: Lun-Vie 9:00-18:00