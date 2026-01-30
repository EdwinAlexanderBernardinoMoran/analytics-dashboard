import { Upload, BarChart3, LineChart } from 'lucide-react';
import { useContext } from 'react';
import { useLocation } from 'react-router';
import { HeaderSidebar } from './HeaderSidebar';
import { Navigation } from './Navigation';
import { ButtonCollapse } from './ButtonCollapse';
import { AnalyticContext } from '@/context/AnalyticContext';

export interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
  url: string;
}

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
}

export default function Sidebar({ isCollapsed, setIsCollapsed }: SidebarProps) {
  const { analyses, chartData } = useContext(AnalyticContext);

  const { pathname } = useLocation()
  const isActive = (path: string) => {
    return pathname === path
  }

  const allNavItems: NavItem[] = [
    {
      id: 'upload',
      label: 'Subir archivo',
      icon: Upload,
      url: '/',
    },
    {
      id: 'analysis',
      label: 'Análisis',
      icon: BarChart3,
      url: '/analysis',
    },
    {
      id: 'dashboard',
      label: 'Panel',
      icon: LineChart,
      url: '/dashboard',
    },
  ];

  const navItems = allNavItems.filter(item => {
    if (item.id === 'analysis') {
      return analyses.length > 0;
    }
    if (item.id === 'dashboard') {
      return chartData.length > 0;
    }
    return true;
  });

  return (
    <aside
      className={`fixed left-0 top-0 z-40 h-screen border-r border-border bg-sidebar transition-all duration-300 ease-in-out ${isCollapsed ? 'w-20' : 'w-56'
        }`}
    >
      {/* Header */}
      <HeaderSidebar isCollapsed={isCollapsed} />

      {/* Navigation Items */}
      <Navigation navItems={navItems} isCollapsed={isCollapsed} isActive={isActive} />

      {/* Bottom Section */}
      <ButtonCollapse isCollapsed={isCollapsed} onCollapse={() => setIsCollapsed(!isCollapsed)} />
    </aside>
  );
}
