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

## 📝 Prompt Original y Evolución

<img width="1423" height="852" alt="image" src="https://github.com/user-attachments/assets/2b7d2062-29b3-43ae-b0ea-3afa17a712d4" />


### Requerimientos Iniciales
**Prompt original:**
> Arma la solución para una app de otorgamiento de crédito, que reciba los parámetros de nombre apellido dni teléfono, email y banco. Dentro del desplegable listado de bancos tenemos: Banco BBVA, Banco Santander, Banco Galicia, Banco Nación, Banco Macro, Banco Comafi, Banco ICBC. De los bancos que tenemos habilitados: Banco BBVA, Banco Santander, Banco Galicia, Banco Nación. Los demás son rechazo directo, se dará una oferta de hasta 300000 $ ARS. El cliente podrá elegir un monto menor y la cantidad de cuotas: 3,6, 9 o 12. Armemos que cuanto más extenso el periodo, más alta la tasa de interés en las cuotas. Cuando se muestre la aprobación, se le mostrará un cartel "Su oferta fue aprobada" y el nombre. Deberá aceptar un check con los términos y condiciones, y para avanzar la oferta se le solicitará el CBU de 22 dígitos. Para identificar si el CBU se corresponde con los datos se necesita checkear que los 3 primeros dígitos sean los del código del banco. Una vez aceptada la oferta se avanza al siguiente paso de validación de documento, el cliente carga la foto de un documento, y con AWS Rekognition validar si es un documento. Si no es un documento devolver un error para que pueda reintentar. Una vez validado avanzar y mostrar mensaje de que la transacción del crédito fue aprobado y transferido. Ver si se puede mandar con SNS una notificación al cliente de que se le transfirió el crédito.

### Cambios y Mejoras Implementadas

#### 🎨 **Mejoras de UI/UX Solicitadas**
- **PrimeReact**: Implementación completa de biblioteca de componentes profesionales
- **Drag & Drop**: Carga de documentos con área de arrastre visual
- **Recomendaciones de foto**: Guías para buena iluminación, enfoque, superficie plana
- **Pantalla de rechazo**: Reemplazo de alert por pantalla completa con imagen de cliente triste

#### 🏗️ **Arquitectura y Navegación**
- **Header**: Logo CréditoFácil, navegación (Cliente, Blog, Contacto), botón CTA
- **Footer**: QR AFIP, derechos, links a productos financieros, redes sociales
- **Páginas adicionales**: Blog financiero, formulario de contacto
- **Indicador de progreso**: Pasos visuales del proceso de crédito

#### 🔧 **Funcionalidades Técnicas**
- **Simulación AWS**: Funciona sin credenciales reales para desarrollo
- **Validación CBU**: Verificación de 22 dígitos + código de banco
- **Responsive design**: Adaptable a móviles y tablets
- **Manejo de errores**: Pantallas específicas para cada tipo de rechazo

#### 📋 **Cumplimiento y Legal**
- **QR AFIP**: Código QR simulado para cumplimiento fiscal
- **Regulación BCRA**: Mención en footer
- **Términos y condiciones**: Checkbox obligatorio
- **Información de contacto**: Datos empresariales completos

## 📞 Soporte

Para consultas técnicas o comerciales:
- **Email**: info@creditofacil.com
- **Teléfono**: 0800-123-4567
- **Horarios**: Lun-Vie 9:00-18:00
