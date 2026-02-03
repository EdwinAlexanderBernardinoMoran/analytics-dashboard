import { createContext, useState, type PropsWithChildren } from "react";
import { AxiosError } from "axios";

import { getChartData } from "@/analysis/actions/get-chart-sugesstion";
import type { ChartDataAnalysis, ChartParams } from "@/dashboard/interfaces/chart.interface.interface";
import type { ChartDataContext } from "@/dashboard/interfaces/charts-context.interface";
import { postFileUpload } from "@/uploader/actions/post-file-upload.action";
import { ToastError } from "@/utils/ToastError";

interface ApiErrorResponse {
    message?: string;
    error?: string;
    detail?: string;
}

interface AnalyticContextProps {
    // state
    analyses: ChartDataAnalysis[];
    isLoading: boolean;
    error: string | null;
    counChartSuggestions: number;
    chartData: ChartDataContext[];
    addedCards: Set<string>;

    // Methods
    setLoading: (value: boolean) => void;
    uploadFile: (file: File) => Promise<boolean>;
    getChartData: (data: ChartDataAnalysis) => void;
    setCountChartSuggestion: () => void;
    addCard: (chartId: string) => void;
}

export const AnalyticContext = createContext({} as AnalyticContextProps);

export const AnalyticContextProvider = ({ children }: PropsWithChildren) => {

    const [analyses, setAnalyses] = useState<ChartDataAnalysis[]>([]);
    const [chartData, setChartData] = useState<ChartDataContext[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [countChartSuggestion, setCountChartSuggestion] = useState(0);
    const [addedCards, setAddedCards] = useState<Set<string>>(new Set());

    const resetAnalysisState = () => {
        setIsLoading(true);
        setAnalyses([]);
        setChartData([]);
        setError(null);
        setCountChartSuggestion(0);
        setAddedCards(new Set());
    }

    const handleLoading = (value: boolean) => {
        setIsLoading(value);
    };

    const handleUpload = async (file: File) => {
        try {
            resetAnalysisState()

            const formData = new FormData();
            formData.append('file', file);
            const analysisResult = await postFileUpload(formData);
            setAnalyses(analysisResult);
            return true;
        } catch (err) {
            const error = err as AxiosError<ApiErrorResponse>;
            const errorMessage = error.response?.data?.message
                || error.response?.data?.error
                || error.response?.data?.detail
                || error.message
                || 'Error al subir el archivo.';

            ToastError('Vaya, algo salió mal.', errorMessage);
            setError(errorMessage);
            return false;
        } finally {
            setIsLoading(false);
        }
    }

    const handleGetChartData = async (data: ChartDataAnalysis) => {
        const chartParams: ChartParams = {
            dataframe_id: data.dataframe_id,
            chart_type: data.chart_type,
            x_axis: data.parameters.x_axis,
            y_axis: data.parameters.y_axis,
            aggregation: data.parameters.aggregation,
            metric_label: data.parameters.metric_label
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

    const handleAddCard = (chartId: string) => {
        setAddedCards(prev => new Set([...prev, chartId]));
    }

    return <AnalyticContext value={{
        // state
        analyses: analyses,
        isLoading: isLoading,
        error: error,
        counChartSuggestions: countChartSuggestion,
        chartData: chartData,
        addedCards: addedCards,

        // Methods
        setLoading: handleLoading,
        uploadFile: handleUpload,
        getChartData: handleGetChartData,
        setCountChartSuggestion: handleSetCountChartSuggestion,
        addCard: handleAddCard,
    }

    }>{children}</AnalyticContext>
}