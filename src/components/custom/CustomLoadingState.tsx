import { useState, useEffect } from 'react';

const stages = [
  'Procesando archivo...',
  'Analizando patrones...',
  'Generando insights...',
  'Optimizando resultados...',
];

export function CustomLoadingState() {
  const [currentStage, setCurrentStage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStage(prev => (prev + 1) % stages.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-8">
      {/* Animated Spinner */}
      <div className="relative h-20 w-20">
        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full border-4 border-border"></div>

        {/* Rotating spinner */}
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-badge-bar border-r-badge-bar"></div>

        {/* Inner pulsing circle */}
        <div className="absolute inset-2 rounded-full bg-primary/10 animate-pulse"></div>

        {/* Center dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-2 w-2 rounded-full bg-badge-bar"></div>
        </div>
      </div>

      {/* Animated Text */}
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-bold text-gray-700">
          IA Analizando Datos
        </h2>
        <p className="text-lg text-badge-bar font-semibold">
          {stages[currentStage]}
        </p>
      </div>

      {/* Progress Bar */}
      <div className="w-full max-w-xs space-y-2">
        <div className="h-1 w-full overflow-hidden rounded-full bg-border">
          <div
            className="h-full bg-linear-to-r from-badge-bar via-gray-300 to-badge-bar bg-[length:200%_100%] animate-[shimmer_2s_infinite]"
            style={{
              animation: 'shimmer 2s infinite',
            }}
          ></div>
        </div>
        <p className="text-center text-sm text-muted-foreground">
          Procesando tu análisis
        </p>
      </div>

      {/* Stage Indicators */}
      <div className="flex gap-2">
        {stages.map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${index <= currentStage
              ? 'w-6 bg-badge-bar'
              : 'w-2 bg-border'
              }`}
          ></div>
        ))}
      </div>

    </div>
  );
}
