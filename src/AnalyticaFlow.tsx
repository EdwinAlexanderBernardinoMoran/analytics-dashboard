// import { useState } from 'react';
// import Sidebar from './shared/components/Sidebar';
// import Breadcrumb from '@/shared/components/Breadcrumb';
// import LoadingState from './shared/components/LoadingState';
// import FileUpload from '@/analysis/components/FileUploader';
// import { AnalysisResults } from './analysis/components/AnalysisResults';
// import { Dashboard } from './analysis/components/Charts';
// import type { AnalysisResult } from './analysis/interfaces/Analysis';
// import { mockAnalyses } from './mock-data/analytics.mock';
// import { CustomJombotron } from './components/custom/CustomJombotron';

// type AppState = 'upload' | 'loading' | 'analysis' | 'dashboard';
// type Section = 'upload' | 'analysis' | 'dashboard' | 'charts';

// export function AnalyticaFlow() {
//   const [currentSection, setCurrentSection] = useState<Section>('upload');
//   const [state, setState] = useState<AppState>('upload');
//   const [analyses, setAnalyses] = useState<AnalysisResult[]>([]);
//   const [dashboardCards, setDashboardCards] = useState<AnalysisResult[]>([]);

//   const handleNavigate = (section: Section) => {
//     setCurrentSection(section);
//     if (section === 'upload') {
//       setState('upload');
//     } else if (section === 'analysis') {
//       setState('analysis');
//     } else if (section === 'dashboard') {
//       setState('dashboard');
//     }
//   };

//   const handleFileUpload = async (file: File) => {
//     setState('loading');

//     // Simular procesamiento de archivo
//     await new Promise(resolve => setTimeout(resolve, 3000));
//     setAnalyses(mockAnalyses);
//     setState('analysis');
//     setCurrentSection('analysis');
//   }; handleFileUpload

//   const handleAddToDashboard = (analysis: AnalysisResult) => {
//     setDashboardCards(prev => [...prev, analysis]);
//   };

//   const handleRemoveFromDashboard = (id: string) => {
//     setDashboardCards(prev => prev.filter(card => card.id !== id));
//   };

//   const handleGoToDashboard = () => {
//     setState('dashboard');
//     setCurrentSection('dashboard');
//   };

//   const getSectionTitle = () => {
//     switch (currentSection) {
//       case 'upload':
//         return 'Upload';
//       case 'analysis':
//         return 'Análisis';
//       case 'dashboard':
//         return 'Gráficos';
//       default:
//         return 'Upload';
//     }
//   };

//   return (
//     <div className="min-h-screen bg-background text-foreground">
//       <Sidebar currentSection={currentSection} onNavigate={handleNavigate} />

//       <main className="transition-all duration-300 ease-in-out" style={{ marginLeft: '224px' }}>
//         <div className="space-y-8 px-6 py-8 sm:px-8">
//           {/* Breadcrumb */}
//           <Breadcrumb
//             items={[
//               { label: 'AI Analytics' },
//               { label: getSectionTitle() }
//             ]}
//           />

//           {/* Page Content */}
//           {state === 'upload' && (
//             <div className="space-y-8">
//               <div className="space-y-2">
//                 <CustomJombotron title='Upload your data file' description='Our AI will automatically analyze your data and generate visual insights.' />
//               </div>
//               <FileUpload onFileUpload={handleFileUpload} />
//             </div>
//           )}

//           {state === 'loading' && <LoadingState />}

//           {state === 'analysis' && (
//             <AnalysisResults
//               analyses={analyses}
//               onAddToDashboard={handleAddToDashboard}
//               onGoToDashboard={handleGoToDashboard}
//               dashboardCardsCount={dashboardCards.length}
//             />
//           )}

//           {state === 'dashboard' && (
//             <Dashboard
//               cards={dashboardCards}
//               onRemoveCard={handleRemoveFromDashboard}
//               onAddMore={() => {
//                 setState('upload');
//                 setCurrentSection('upload');
//               }}
//             />
//           )}
//         </div>
//       </main>
//     </div>
//   );
// }


import { RouterProvider } from "react-router"
import { appRouter } from "./router/app.router"
import { AnalyticContextProvider } from "./context/AnalyticContext"

export const AnalyticaFlow = () => {
  return (
    <>
      <AnalyticContextProvider >
        <RouterProvider router={appRouter} />
      </AnalyticContextProvider>
    </>
  )
}