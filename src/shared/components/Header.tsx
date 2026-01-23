import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentState: string;
  dashboardCardsCount: number;
  onDashboardClick: () => void;
  onUploadClick: () => void;
}

export default function Header({
  currentState,
  dashboardCardsCount,
  onDashboardClick,
  onUploadClick,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-sm font-bold text-primary-foreground">AI</span>
            </div>
            <span className="text-lg font-semibold text-foreground">DataInsight</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {currentState !== 'upload' && (
              <button
                onClick={onUploadClick}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Nuevo Análisis
              </button>
            )}
            
            {dashboardCardsCount > 0 && (
              <button
                onClick={onDashboardClick}
                className="rounded-lg bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-all hover:bg-secondary/90"
              >
                Dashboard ({dashboardCardsCount})
              </button>
            )}

            {currentState === 'upload' && (
              <div className="text-sm text-muted-foreground">
                Comienza cargando un archivo
              </div>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex md:hidden"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="space-y-4 border-t border-border py-4 md:hidden">
            {currentState !== 'upload' && (
              <button
                onClick={() => {
                  onUploadClick();
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Nuevo Análisis
              </button>
            )}
            
            {dashboardCardsCount > 0 && (
              <button
                onClick={() => {
                  onDashboardClick();
                  setMobileMenuOpen(false);
                }}
                className="block w-full rounded-lg bg-secondary px-4 py-2 text-left text-sm font-medium text-secondary-foreground transition-all hover:bg-secondary/90"
              >
                Dashboard ({dashboardCardsCount})
              </button>
            )}
          </nav>
        )}
      </div>
    </header>
  );
}
