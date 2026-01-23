import { useState } from 'react';
import Sidebar from './shared/components/Sidebar';
import Breadcrumb from '@/shared/components/Breadcrumb';
import LoadingState from './shared/components/LoadingState';
import FileUpload from '@/analysis/components/FileUploader';
import { AnalysisResults } from './analysis/components/AnalysisResults';
import { Dashboard } from './analysis/components/Dashboard';

type AppState = 'upload' | 'loading' | 'analysis' | 'dashboard';
type Section = 'upload' | 'analysis' | 'dashboard' | 'charts';

interface AnalysisResult {
  id: string;
  title: string;
  description: string;
  type: 'trend' | 'distribution' | 'comparison' | 'performance';
  data?: any;
}

export function AnalyticaFlow() {
  const [currentSection, setCurrentSection] = useState<Section>('upload');
  const [state, setState] = useState<AppState>('upload');
  const [analyses, setAnalyses] = useState<AnalysisResult[]>([]);
  const [dashboardCards, setDashboardCards] = useState<AnalysisResult[]>([]);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleNavigate = (section: Section) => {
    setCurrentSection(section);
    if (section === 'upload') {
      setState('upload');
    } else if (section === 'analysis') {
      setState('analysis');
    } else if (section === 'dashboard') {
      setState('dashboard');
    }
  };

  const handleFileUpload = async (file: File) => {
    setState('loading');
    
    // Simular procesamiento de archivo
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Simular análisis generados por IA
    const mockAnalyses: AnalysisResult[] = [
      {
        id: '1',
        title: 'Tendencia de Crecimiento',
        description: 'Análisis de la tendencia de crecimiento mensual con proyección a futuro',
        type: 'trend',
        data: {
          labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
          values: [65, 78, 85, 92, 88, 95]
        }
      },
      {
        id: '2',
        title: 'Distribución de Datos',
        description: 'Desglose por categoría y análisis de concentración',
        type: 'distribution',
        data: {
          labels: ['Categoría A', 'Categoría B', 'Categoría C', 'Categoría D'],
          values: [35, 25, 20, 20]
        }
      },
      {
        id: '3',
        title: 'Análisis Comparativo',
        description: 'Comparación de métricas clave entre períodos',
        type: 'comparison',
        data: {
          labels: ['Métrica 1', 'Métrica 2', 'Métrica 3', 'Métrica 4'],
          series: [
            { name: 'Período Anterior', values: [40, 60, 75, 55] },
            { name: 'Período Actual', values: [65, 78, 88, 72] }
          ]
        }
      },
      {
        id: '4',
        title: 'Indicadores de Desempeño',
        description: 'KPIs principales y su evolución temporal',
        type: 'performance',
        data: {
          labels: ['KPI 1', 'KPI 2', 'KPI 3', 'KPI 4', 'KPI 5'],
          values: [92, 85, 78, 88, 95]
        }
      }
    ];

    setAnalyses(mockAnalyses);
    setState('analysis');
    setCurrentSection('analysis');
  };

  const handleAddToDashboard = (analysis: AnalysisResult) => {
    setDashboardCards(prev => [...prev, analysis]);
  };

  const handleRemoveFromDashboard = (id: string) => {
    setDashboardCards(prev => prev.filter(card => card.id !== id));
  };

  const handleGoToDashboard = () => {
    setState('dashboard');
    setCurrentSection('dashboard');
  };

  const getSectionTitle = () => {
    switch (currentSection) {
      case 'upload':
        return 'Upload';
      case 'analysis':
        return 'Análisis';
      case 'dashboard':
        return 'Dashboard';
      case 'charts':
        return 'Gráficos';
      default:
        return 'Upload';
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Sidebar currentSection={currentSection} onNavigate={handleNavigate} />
      
      <main className="transition-all duration-300 ease-in-out" style={{ marginLeft: '224px' }}>
        <div className="space-y-8 px-6 py-8 sm:px-8">
          {/* Breadcrumb */}
          <Breadcrumb 
            items={[
              { label: 'AI Analytics' },
              { label: getSectionTitle() }
            ]}
          />

          {/* Page Content */}
          {state === 'upload' && (
            <div className="space-y-8">
              <div className="space-y-2">
                <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground">
                  Sube tu archivo de datos
                </h1>
                <p className="text-lg text-muted-foreground">
                  Nuestra IA analizará automáticamente tus datos y generará insights visuales.
                </p>
              </div>
              <FileUpload onFileUpload={handleFileUpload} />
            </div>
          )}

          {state === 'loading' && <LoadingState />}

          {state === 'analysis' && (
            <AnalysisResults 
              analyses={analyses}
              onAddToDashboard={handleAddToDashboard}
              onGoToDashboard={handleGoToDashboard}
              dashboardCardsCount={dashboardCards.length}
            />
          )}

          {state === 'dashboard' && (
            <Dashboard
              cards={dashboardCards}
              onRemoveCard={handleRemoveFromDashboard}
              onAddMore={() => {
                setState('upload');
                setCurrentSection('upload');
              }}
            />
          )}
        </div>
      </main>
    </div>
  );
}
