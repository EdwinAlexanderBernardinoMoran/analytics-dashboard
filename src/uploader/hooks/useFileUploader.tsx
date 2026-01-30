import { AnalyticContext } from "@/context/AnalyticContext";
import { validateFile } from "@/utils/fileValidation";
import { useContext, useRef, useState, type ChangeEvent, type DragEvent } from "react";
import { useNavigate } from "react-router";

export const useFileUploader = () => {

    const { isLoading, uploadFile } = useContext(AnalyticContext);
    const [isDragActive, setIsDragActive] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const navigation = useNavigate();

    const handleDrag = (event: DragEvent<HTMLDivElement>) => {

        event.preventDefault();
        event.stopPropagation();
        if (event.type === 'dragenter' || event.type === 'dragover') {

            setIsDragActive(true);
        } else if (event.type === 'dragleave') {
            setIsDragActive(false);
        }
    };

    const handleDrop = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();
        setIsDragActive(false);

        const file = validateFile(event.dataTransfer.files);
        if (!file) return;
        handleFile(file);
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = validateFile(event.target.files);
        if (!file) {
            event.target.value = "";
            return;
        }
        handleFile(file);
    };

    const handleFile = async (file: File) => {
        setSelectedFile(file);

        const success = await uploadFile(file);

        setSelectedFile(null);

        if (success) {
            navigation('/analysis');
        }
    };

    const handleClear = () => {
        setSelectedFile(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };
    return {
        // values
        isLoading,
        isDragActive,
        selectedFile,
        fileInputRef,

        // methods
        handleDrag,
        handleDrop,
        handleChange,
        handleClear,
    }
}