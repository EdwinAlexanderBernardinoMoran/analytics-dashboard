# Frontend de análisis de datos basada en IA

Esta plataforma permite cargar hojas de cálculo que son enviadas a una API para su procesamiento automático, generando análisis y sugerencias de visualización mediante IA, sin necesidad de utilizar herramientas de BI complejas.

## 🛠️ Tecnologías

- **Frontend**: React + TyScript
- **Build Tool**: Vite 7.2.4
- **Routing**: React Router 7
- **Estilos**: TailwindCSS + Shadcn UI
- **Gráficos**: Chart.js + react-chartjs-2
- **HTTP Client**: Axios
- **Notificaciones**: Sonner (Toaster)

## 📋 Requerimientos

- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/)
-  Tener la [API](https://github.com/EdwinAlexanderBernardinoMoran/analytical-processing-api) en local.

## 🚀 Instalación del proyecto

1. **Clonar el proyecto en tu máquina**

```shell
git https://github.com/EdwinAlexanderBernardinoMoran/analytics-dashboard
```

2. **Acceder al directorio del proyecto**

```shell
cd analytics-dashboard
```

3. **Configurar el archivo de variables de entorno**

```shell
cp .env.example .env
```

4. **Configurar URL de tu API**

Edita el archivo `.env` y agrega tu API Key:

```env
VITE_API_URL="http://midomino.com/v1/api""
```

5. **Levantar el proyecto con Docker**

```shell
docker compose up
```

6. Acceder a la url para visualizar el proyecto

```shell
http://localhost:5174/
```

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
│   │   │   └── AnalysisGridCard.tsx
│   │   ├── actions/
│   │   │   └── post-chart-sugesstion.ts
│   │   ├── hooks/
│   │   │   └── useAnalysis.tsx
│   │   └── mappers/
│   │       └── charts.mapper.ts
│   ├── dashboard/              # Módulo de visualización
│   │   ├── pages/
│   │   │   └── ChartsPage.tsx
│   │   ├── components/
│   │   │   └── ChartCard.tsx
│   │   └── interfaces/
│   │       ├── chart.interface.interface.ts
│   │       └── charts-context.interface.ts
│   ├── context/
│   │   └── AnalyticContext.tsx # Estado global de la app
│   ├── router/
│   │   ├── app.router.tsx      # Configuración de rutas
│   │   ├── AnalysisPrivateRoute.tsx
│   │   └── DashboardPrivateRoute.tsx
│   ├── layouts/                # Sistema de layouts
│   │   ├── Layout.tsx
│   │   └── components/
│   │       ├── Sidebar.tsx
│   │       └── Navigation.tsx
│   ├── components/             # Componentes compartidos
│   │   ├── charts/
│   │   │   └── DynamicChart.tsx
│   │   ├── custom/
│   │   │   ├── CustomHeader.tsx
│   │   │   └── CustomLoadingState.tsx
│   │   └── ui/                 # Shadcn UI components
│   ├── api/
│   │   └── analytics.pi.ts     # Cliente HTTP
│   ├── utils/
│   │   ├── chartDataProcessing.ts
│   │   ├── fileValidation.ts
│   │   └── ToastError.ts
│   └── mock-data/
│       ├── analytics.mock.ts
│       └── charts.mock.ts
├── public/                     # Assets estáticos
├── package.json
├── vite.config.ts              # Configuración de Vite
├── tsconfig.json               # Configuración de TypeScript
├── components.json             # Configuración de Shadcn UI
└── .env.example
```

## 👤 Autor

**Edwin Alexander Bernardino Moran**

- GitHub: [@EdwinAlexanderBernardinoMoran](https://github.com/EdwinAlexanderBernardinoMoran)
