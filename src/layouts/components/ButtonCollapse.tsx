import { ChevronLeft } from "lucide-react"

interface ButtonCollapseProps {
    isCollapsed: boolean,
    onCollapse: () => void,
}

export const ButtonCollapse = ({ isCollapsed, onCollapse }: ButtonCollapseProps) => {
    return (
        <div className="absolute bottom-0 left-0 right-0 border-t border-border px-3 py-6 space-y-2">
            <button
                onClick={() => onCollapse()}
                className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-gray-700 transition-colors hover:bg-sidebar-accent hover:text-badge-bar"
            >
                <ChevronLeft className={`h-5 w-5 shrink-0 transition-transform ${isCollapsed ? 'rotate-180' : ''}`} />
                {!isCollapsed && <span className="text-sm font-medium">Colapsar</span>}
            </button>
        </div>
    )
}