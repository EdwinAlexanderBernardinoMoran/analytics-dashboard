import { AnalyticContext } from "@/context/AnalyticContext";
import { use, type JSX } from "react";
import { Navigate } from "react-router";

interface Props {
    element: JSX.Element;
}

export const AnalysisPrivateRoute = ({ element }: Props) => {
    const { analyses } = use(AnalyticContext);

    if (analyses.length > 0) {
        return element;
    }

    return <Navigate to="/" replace />;
}
