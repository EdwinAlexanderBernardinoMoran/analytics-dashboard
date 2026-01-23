'use client';

import { Upload, BarChart3, LayoutDashboard, LineChart, Settings, ChevronLeft } from 'lucide-react';
import { useState } from 'react';

interface SidebarProps {
  currentSection: 'upload' | 'analysis' | 'dashboard' | 'charts';
  onNavigate: (section: 'upload' | 'analysis' | 'dashboard' | 'charts') => void;
}

export default function Sidebar({ currentSection, onNavigate }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navItems = [
    {
      id: 'upload',
      label: 'Subir Archivo',
      icon: Upload,
      section: 'upload' as const,
    },
    {
      id: 'analysis',
      label: 'Análisis',
      icon: BarChart3,
      section: 'analysis' as const,
    },
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: LayoutDashboard,
      section: 'dashboard' as const,
    },
    {
      id: 'charts',
      label: 'Gráficos',
      icon: LineChart,
      section: 'charts' as const,
    },
  ];

  return (
    <aside
      className={`fixed left-0 top-0 z-40 h-screen border-r border-border bg-sidebar transition-all duration-300 ease-in-out ${
        isCollapsed ? 'w-20' : 'w-56'
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-center border-b border-border px-4 py-6">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
          <span className="text-sm font-bold text-primary-foreground">AI</span>
        </div>
        {!isCollapsed && (
          <span className="ml-3 font-semibold text-sidebar-foreground">AI Analytics</span>
        )}
      </div>

      {/* Navigation Items */}
      <nav className="space-y-2 px-3 py-6">
        {navItems.map(item => {
          const Icon = item.icon;
          const isActive = currentSection === item.section;

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.section)}
              className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 transition-colors ${
                isActive
                  ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                  : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
              }`}
            >
              <Icon className="h-5 w-5 flex-shrink-0" />
              {!isCollapsed && <span className="text-sm font-medium">{item.label}</span>}
            </button>
          );
        })}
      </nav>

      {/* Bottom Section */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-border px-3 py-6 space-y-2">
        <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sidebar-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
          <Settings className="h-5 w-5 flex-shrink-0" />
          {!isCollapsed && <span className="text-sm font-medium">Configuración</span>}
        </button>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sidebar-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
        >
          <ChevronLeft className={`h-5 w-5 flex-shrink-0 transition-transform ${isCollapsed ? 'rotate-180' : ''}`} />
          {!isCollapsed && <span className="text-sm font-medium">Colapsar</span>}
        </button>
      </div>
    </aside>
  );
}
