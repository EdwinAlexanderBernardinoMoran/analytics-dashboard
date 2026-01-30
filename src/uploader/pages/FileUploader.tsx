import { CustomJombotron } from "@/components/custom/CustomJombotron";
import { CustomLoadingState } from "@/components/custom/CustomLoadingState";
import { Upload, File, X } from 'lucide-react';
import { useFileUploader } from "../hooks/useFileUploader";

export default function FileUploader() {
    const { isLoading, isDragActive, selectedFile, fileInputRef, handleDrag, handleDrop, handleChange, handleClear } = useFileUploader();

    return (
        <>
            {isLoading && <CustomLoadingState />}

            {!isLoading && (
                <div className="space-y-8">
                    <div className="space-y-2">
                        <CustomJombotron title='Sube tu archivo de datos' description='Nuestro AI analizará automáticamente tus datos y generará visualizaciones.' />
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
                                : 'border-border bg-card hover:border-[#629af7]/50'
                                }`}
                        >
                            {!selectedFile ? (
                                <div className="flex flex-col items-center justify-center gap-6">
                                    <div className="rounded-full bg-muted p-6">
                                        <Upload className="h-8 w-8 text-muted-foreground" />
                                    </div>
                                    <div className="space-y-3 text-center">
                                        <h3 className="text-2xl font-semibold text-foreground">
                                            Arrastra tu archivo aquí
                                        </h3>
                                        <p className="text-base text-muted-foreground">
                                            o haga clic para seleccionar desde su dispositivo
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
                                        className="rounded-lg bg-badge-bar px-8 py-3 font-medium text-primary-foreground transition-all hover:bg-badge-bar/70 active:scale-95"
                                    >
                                        Seleccionar archivo
                                    </button>
                                    <p className="text-sm text-muted-foreground">
                                        Formatos compatibles: .csv, .xlsx, .xls
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
