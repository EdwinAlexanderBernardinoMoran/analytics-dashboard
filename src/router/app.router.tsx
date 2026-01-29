
import { AnalysisPage } from "@/analysis/pages/AnalysisPage";
import { ChartsPage } from "@/dashboard/pages/ChartsPage";
import { Layout } from "@/layouts/Layout";
import FileUploader from "@/uploader/pages/FileUploader";
import { createBrowserRouter } from "react-router";

// const SearchPage = lazy(() => import('@/heroes/pages/search/SearchPage'))
// const AdminPage = lazy(() => import('@/admin/pages/AdminPage'))

export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <FileUploader />
            },
            {
                path: 'analysis',
                element: <AnalysisPage />
            },
            {
                path: 'dashboard',
                element: <ChartsPage />
            },
        ]
    },
])