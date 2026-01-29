import { Outlet } from "react-router"
import Sidebar from "./components/Sidebar"

export const Layout = () => {
    return (
        <>
            <div className="min-h-screen bg-background text-foreground">
                <Sidebar />
                <main className="transition-all duration-300 ease-in-out" style={{ marginLeft: '224px' }}>
                    <div className="space-y-8 px-6 py-8 sm:px-8">
                        <Outlet />
                    </div>
                </main>
            </div>
        </>
    )
}