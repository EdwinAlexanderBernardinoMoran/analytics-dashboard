import React from "react"

import { useState, useRef } from 'react';
import { Upload, File, X } from 'lucide-react';

interface FileUploadProps {
  onFileUpload: (file: File) => void;
}

export default function FileUpload({ onFileUpload }: FileUploadProps) {
  const [isDragActive, setIsDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setIsDragActive(true);
    } else if (e.type === 'dragleave') {
      setIsDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);

    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleFile(files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      handleFile(files[0]);
    }
  };

  const handleFile = (file: File) => {
    setSelectedFile(file);
    // Automáticamente iniciar el análisis
    onFileUpload(file);
  };

  const handleClear = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleUpload = () => {
    // Implement upload logic here
  };

  return (
    <div className="space-y-6">
      {/* Drop Zone */}
      <div
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        className={`relative mx-auto max-w-2xl rounded-2xl border-2 border-dashed p-16 transition-all ${
          isDragActive
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
                Arrastra tu archivo
              </h3>
              <p className="text-base text-muted-foreground">
                o haz clic para seleccionar desde tu dispositivo
              </p>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              onChange={handleChange}
              className="hidden"
              accept=".csv,.json,.xlsx,.xls,.pdf"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="rounded-lg bg-primary px-8 py-3 font-medium text-primary-foreground transition-all hover:bg-primary/90 active:scale-95"
            >
              Seleccionar archivo
            </button>
            <p className="text-sm text-muted-foreground">
              Formatos soportados: .csv, .xlsx, .json
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
  );
}
