import { getChartData } from "@/analysis/actions/post-chart-sugesstion";
import { postFileUpload } from "@/analysis/actions/post-file-upload.action";
import type { ChartDataLineContext, ChartDataPieContext } from "@/analysis/interfaces/analysis.interface";
import type { ChartDataAnalysis, ChartParams } from "@/dashboard/interfaces/chart.interface";
import { createContext, useState, type PropsWithChildren } from "react"

interface AnalyticContextProps {
    // state
    analyses: ChartDataAnalysis[];
    isLoading: boolean;
    error: string | null;
    counChartSuggestions: number;
    chartData: (ChartDataLineContext | ChartDataPieContext)[];

    // Methods
    setLoading: (value: boolean) => void;
    uploadFile: (file: File) => Promise<void>;
    getChartData: (data: ChartDataAnalysis) => void;
    setCountChartSuggestion: () => void;
}

export const AnalyticContext = createContext({} as AnalyticContextProps);

export const AnalyticContextProvider = ({ children }: PropsWithChildren) => {

    const [analyses, setAnalyses] = useState<ChartDataAnalysis[]>([]);
    const [chartData, setChartData] = useState<(ChartDataLineContext | ChartDataPieContext)[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [countChartSuggestion, setCountChartSuggestion] = useState(0);

    const handleLoading = (value: boolean) => {
        setIsLoading(value);
    };

    const handleUpload = async (file: File) => {

        const formData = new FormData();
        formData.append('file', file);
        const analysisResult = await postFileUpload(formData);
        setAnalyses(analysisResult);
    }

    const handleGetChartData = async (data: ChartDataAnalysis) => {
        const chartParams: ChartParams = {
            dataframe_id: data.dataframe_id,
            chart_type: data.chart_type,
            x_axis: data.parameters.x_axis,
            y_axis: data.parameters.y_axis
        }

        const getChartDataResult = await getChartData(chartParams);

        setChartData((prev) => [...prev, {
            ...getChartDataResult,
            title: data.title
        }]);
    }

    const handleSetCountChartSuggestion = () => {
        setCountChartSuggestion((prev) => prev + 1);
    }


    return <AnalyticContext value={{
        // state
        analyses: analyses,
        isLoading: isLoading,
        error: error,
        counChartSuggestions: countChartSuggestion,
        chartData: chartData,

        // Methods
        setLoading: handleLoading,
        uploadFile: handleUpload,
        getChartData: handleGetChartData,
        setCountChartSuggestion: handleSetCountChartSuggestion,
    }

    }>{children}</AnalyticContext>
}