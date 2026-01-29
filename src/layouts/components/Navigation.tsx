import { Link } from "react-router";
import type { NavItem } from "./Sidebar";

interface NavigationProps {
    navItems: NavItem[],
    isCollapsed: boolean,
    isActive: (path: string) => boolean,
}

export const Navigation = ({ navItems, isActive, isCollapsed }: NavigationProps) => {
    return (
        <nav className="space-y-2 px-3 py-6">
            {navItems.map(item => {
                const Icon = item.icon;

                return (
                    <button
                        key={item.id}

                        className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 transition-colors ${isActive(item.url)
                            ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                            : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                            }`}
                    >

                        <Icon className="h-5 w-5 shrink-0" />
                        {!isCollapsed && <span className="text-sm font-medium">
                            <Link to={item.url}>{item.label}</Link>
                        </span>}
                    </button>
                );
            })}
        </nav>
    )
}