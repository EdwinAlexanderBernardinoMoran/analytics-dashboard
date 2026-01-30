import { AnalyticContext } from "@/context/AnalyticContext";
import { use, type JSX } from "react";
import { Navigate } from "react-router";

interface Props {
    element: JSX.Element;
}

export const DashboardPrivateRoute = ({ element }: Props) => {
    const { chartData } = use(AnalyticContext);

    if (chartData.length > 0) {
        return element;
    }

    return <Navigate to="/analysis" replace />;
}
