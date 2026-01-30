import { Outlet } from "react-router"
import Sidebar from "./components/Sidebar"
import { useState } from "react"

export const Layout = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
            <main className={`transition-all duration-300 ease-in-out ${isCollapsed ? 'ml-20' : 'ml-56'}`}>
                <div className="space-y-8 px-6 py-8 sm:px-8">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}