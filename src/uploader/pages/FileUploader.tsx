import { useContext, type ChangeEvent, type DragEvent } from "react"
import { useState, useRef } from 'react';
import { useNavigate } from "react-router";

import { CustomJombotron } from "@/components/custom/CustomJombotron";
import { AnalyticContext } from '../../context/AnalyticContext';
import { CustomLoadingState } from "@/components/custom/CustomLoadingState";
import { Upload, File, X } from 'lucide-react';

import { validateFile } from "@/utils/fileValidation";

export default function FileUploader() {
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

        const response = await uploadFile(file);

        if (!response) {
            setSelectedFile(null);
            return;
        };

        setSelectedFile(null);
        navigation('/analysis');
    };

    const handleClear = () => {
        setSelectedFile(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    return (
        <>
            {isLoading && <CustomLoadingState />}

            {!isLoading && (
                <div className="space-y-8">
                    <div className="space-y-2">
                        <CustomJombotron title='Upload your data file' description='Our AI will automatically analyze your data and generate visual insights.' />
                    </div>

                    <div className="space-y-6">
                        {/* Drop Zone */}
                        <div
                            onDragEnter={handleDrag}
                            onDragLeave={handleDrag}
                            onDragOver={handleDrag}
                            onDrop={handleDrop}
                            className={`relative mx-auto max-w-2xl rounded-2xl border-2 border-dashed p-16 transition-all ${isDragActive
                                ? 'border-primary bg-primary/5'
                                : 'border-border bg-card hover:border-primary/50'
                                }`}
                        >
                            {!selectedFile ? (
                                <div className="flex flex-col items-center justify-center gap-6">
                                    <div className="rounded-full bg-muted p-6">
                                        <Upload className="h-8 w-8 text-muted-foreground" />
                                    </div>
                                    <div className="space-y-3 text-center">
                                        <h3 className="text-2xl font-semibold text-foreground">
                                            Drag your file here
                                        </h3>
                                        <p className="text-base text-muted-foreground">
                                            or click to select from your device
                                        </p>
                                    </div>
                                    <input
                                        ref={fileInputRef}
                                        type="file"
                                        onChange={handleChange}
                                        className="hidden"
                                        accept=".csv,.xlsx,.xls"
                                    />
                                    <button
                                        onClick={() => fileInputRef.current?.click()}
                                        className="rounded-lg bg-primary px-8 py-3 font-medium text-primary-foreground transition-all hover:bg-primary/90 active:scale-95"
                                    >
                                        Select file
                                    </button>
                                    <p className="text-sm text-muted-foreground">
                                        Supported formats: .csv, .xlsx
                                    </p>
                                </div>
                            ) : (
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center gap-4">
                                        <div className="rounded-lg bg-muted p-4">
                                            <File className="h-6 w-6 text-muted-foreground" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-foreground">{selectedFile.name}</p>
                                            <p className="text-sm text-muted-foreground">
                                                {(selectedFile.size / 1024).toFixed(2)} KB
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={handleClear}
                                        className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                                        title="Cambiar archivo"
                                    >
                                        <X className="h-5 w-5" />
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
