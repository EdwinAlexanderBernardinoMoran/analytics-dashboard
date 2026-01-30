import { Upload, BarChart3, LineChart } from 'lucide-react';
import { useContext, useState } from 'react';
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

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { analyses, chartData } = useContext(AnalyticContext);

  const { pathname } = useLocation()
  const isActive = (path: string) => {
    return pathname === path
  }

  const handleCollapse = (): void => {
    setIsCollapsed(!isCollapsed);
  }

  const allNavItems: NavItem[] = [
    {
      id: 'upload',
      label: 'Upload file',
      icon: Upload,
      url: '/',
    },
    {
      id: 'analysis',
      label: 'Analysis',
      icon: BarChart3,
      url: '/analysis',
    },
    {
      id: 'dashboard',
      label: 'Graphics',
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
      <ButtonCollapse isCollapsed={isCollapsed} onCollapse={handleCollapse} />
    </aside>
  );
}
