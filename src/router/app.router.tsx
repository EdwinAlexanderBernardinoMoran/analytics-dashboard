
import { AnalysisPage } from "@/analysis/pages/AnalysisPage";
import { ChartsPage } from "@/dashboard/pages/ChartsPage";
import { Layout } from "@/layouts/Layout";
import FileUploader from "@/uploader/pages/FileUploader";
import { createBrowserRouter } from "react-router";
import { AnalysisPrivateRoute } from "./AnalysisPrivateRoute";
import { DashboardPrivateRoute } from "./DashboardPrivateRoute";

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
                element: <AnalysisPrivateRoute element={<AnalysisPage />} />
            },
            {
                path: 'dashboard',
                element: <DashboardPrivateRoute element={<ChartsPage />} />
            },
        ]
    },
])