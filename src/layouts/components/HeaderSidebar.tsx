interface HeaderSidebarProps {
    isCollapsed: boolean;
}

export const HeaderSidebar = ({ isCollapsed }: HeaderSidebarProps) => {
    return (
        <div className="flex items-center justify-center border-b border-border px-4 py-6">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-badge-bar">
                <span className="text-sm font-bold text-primary-foreground">AI</span>
            </div>
            {!isCollapsed && (
                <span className="ml-3 font-semibold text-sidebar-foreground">AI Análisis</span>
            )}
        </div>
    )
}