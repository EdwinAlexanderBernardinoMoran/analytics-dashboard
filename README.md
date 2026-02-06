# Frontend de análisis de datos basada en IA

Esta plataforma permite cargar hojas de cálculo que son enviadas a una API para su procesamiento automático, generando análisis y sugerencias de visualización mediante IA, sin necesidad de utilizar herramientas de BI complejas.

## 📝 Notas Importantes

- Asegúrate de tener la [API de procesamiento analítico](https://github.com/EdwinAlexanderBernardinoMoran/analytical-processing-api) ejecutándose antes de iniciar este proyecto.

## 🛠️ Tecnologías

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite 7.2.4
- **Routing**: React Router 7
- **Estilos**: TailwindCSS 4 + Shadcn UI
- **Gráficos**: Chart.js 4.5 + react-chartjs-2
- **HTTP Client**: Axios
- **Notificaciones**: Sonner (Toaster)
- **Package Manager**: pnpm
- **Containerización**: Docker + Docker Compose

## 📋 Requerimientos

### Para ejecución con Docker (Recomendado)
- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/) y Docker Compose
- Tener la [API](https://github.com/EdwinAlexanderBernardinoMoran/analytical-processing-api) corriendo en local

## 🚀 Instalación y Ejecución

1. **Clonar el proyecto**

```shell
git clone https://github.com/EdwinAlexanderBernardinoMoran/analytics-dashboard
```

2. **Acceder al directorio del proyecto**

```shell
cd analytics-dashboard
```

3. **Configurar variables de entorno**

```shell
cp .env.example .env
```

Edita el archivo `.env` y configura la URL de tu API:

```env
VITE_API_URL="http://localhost:8000/api/v1"
```

4. **Levantar el proyecto con Docker**

```shell
docker compose up
```

Para ejecutar en segundo plano:

```shell
docker compose up -d
```

5. **Acceder a la aplicación**

Abre tu navegador en: **http://localhost:5174/**

6. **Detener el proyecto**

```shell
docker compose down
```


## 🎯 Decisiones Técnicas

### React Router 7
Implementamos React Router 7 para el manejo de rutas con soporte completo para TypeScript y características modernas como lazy loading de componentes.

### TailwindCSS + Shadcn UI
TailwindCSS permite un desarrollo rápido con clases utility-first, reduciendo el CSS personalizado. Shadcn UI complementa esto con componentes accesibles y customizables basados en Radix UI, evitando vendor lock-in ya que los componentes se copian directamente al proyecto.

### Chart.js
Seleccionamos Chart.js por su flexibilidad, rendimiento y amplia documentación. Es una librería ligera que soporta múltiples tipos de gráficos y ofrece gran customización sin complejidad excesiva.

### pnpm como Package Manager
Pnpm ofrece una instalación más rápida y eficiente en espacio que npm o yarn, gracias a su sistema de enlaces simbólicos y almacenamiento de contenido direccionado. 

### Arquitectura por Features
El proyecto está organizado por módulos funcionales (uploader/, analysis/, dashboard/) en lugar de por tipo de archivo. Esta arquitectura facilita la escalabilidad, mantenimiento y permite que equipos trabajen en features independientes sin conflictos.

### Docker
Docker garantiza consistencia entre entornos de desarrollo, testing y producción.

## 📁 Estructura del Proyecto

```
analytics-dashboard/
├── src/
│   ├── main.tsx                # Punto de entrada de React
│   ├── AnalyticaFlow.tsx       # Componente raíz con providers
│   ├── index.css               # Estilos globales
│   ├── uploader/               # Módulo de carga de archivos
│   │   ├── pages/
│   │   │   └── FileUploader.tsx
│   │   ├── actions/
│   │   │   └── post-file-upload.action.ts
│   │   ├── hooks/
│   │   │   └── useFileUploader.tsx
│   │   └── mappers/
│   │       └── analysis-chart.mapper.ts
│   ├── analysis/               # Módulo de análisis IA
│   │   ├── pages/
│   │   │   └── AnalysisPage.tsx
│   │   ├── components/
│   │   │   ├── AnalysisCardCount.tsx
│   │   │   ├── AnalysisGrid.tsx
│   │   │   ├── AnalysisGridCard.tsx
│   │   │   └── AnalysisResultsHeader.tsx
│   │   ├── actions/
│   │   │   └── get-chart-sugesstion.ts
│   │   ├── hooks/
│   │   │   └── useAnalysis.tsx
│   │   ├── interfaces/
│   │   │   └── analysis-response.interface.ts
│   │   └── mappers/
│   │       └── charts.mapper.ts
│   ├── dashboard/              # Módulo de visualización
│   │   ├── pages/
│   │   │   └── ChartsPage.tsx
│   │   ├── components/
│   │   │   └── ChartCard.tsx
│   │   └── interfaces/
│   │       ├── chart.interface.interface.ts
│   │       ├── charts-context.interface.ts
│   │       └── charts-response.interface.ts
│   ├── context/
│   │   └── AnalyticContext.tsx # Estado global de la app
│   ├── router/
│   │   ├── app.router.tsx      # Configuración de rutas
│   │   ├── AnalysisPrivateRoute.tsx
│   │   └── DashboardPrivateRoute.tsx
│   ├── layouts/                # Sistema de layouts
│   │   ├── Layout.tsx
│   │   └── components/
│   │       ├── ButtonCollapse.tsx
│   │       ├── HeaderSidebar.tsx
│   │       ├── Navigation.tsx
│   │       └── Sidebar.tsx
│   ├── components/             # Componentes compartidos
│   │   ├── charts/             # Componentes de gráficos
│   │   │   ├── BarChart.tsx
│   │   │   ├── DynamicChart.tsx
│   │   │   ├── LineChart.tsx
│   │   │   ├── PieChart.tsx
│   │   │   └── config/
│   │   │       ├── ChartColors.ts
│   │   │       └── ChartOptions.ts
│   │   ├── custom/             # Componentes personalizados
│   │   │   ├── CustomBreadcrumb.tsx
│   │   │   ├── CustomHeader.tsx
│   │   │   ├── CustomJombotron.tsx
│   │   │   └── CustomLoadingState.tsx
│   │   └── ui/                 # Shadcn UI components
│   ├── api/
│   │   └── analytics.pi.ts     # Cliente HTTP
│   ├── lib/
│   │   └── utils.ts            # Utilidades compartidas
│   └── utils/
│       ├── chartDataProcessing.ts
│       ├── fileValidation.ts
│       └── ToastError.ts
├── public/                     # Assets estáticos
│   └── vite.svg
├── .env.example                # Variables de entorno
├── .dockerignore
├── Dockerfile                  # Configuración de Docker
├── docker-compose.yml          # Orquestación de contenedores
├── package.json                # Dependencias del proyecto
├── pnpm-lock.yaml              # Lockfile de pnpm
├── pnpm-workspace.yaml         # Configuración de workspace
├── vite.config.ts              # Configuración de Vite
├── tsconfig.json               # Configuración de TypeScript
├── tsconfig.app.json           # Config TypeScript para app
├── tsconfig.node.json          # Config TypeScript para Node
├── eslint.config.js            # Configuración de ESLint
├── components.json             # Configuración de Shadcn UI
└── index.html                  # HTML principal
```

## �👤 Autor

**Edwin Alexander Bernardino Moran**

- GitHub: [@EdwinAlexanderBernardinoMoran](https://github.com/EdwinAlexanderBernardinoMoran)