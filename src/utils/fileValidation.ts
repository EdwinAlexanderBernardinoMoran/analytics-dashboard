import { ToastError } from "./ToastError";

export const validateFile = (files: FileList | null): File | null => {
  if (!files || files.length === 0) return null;

  const file = files[0];

  const validExtensions = ["csv", "xls", "xlsx"];
  const extension = file.name.split(".").pop()?.toLowerCase() || "";

  if (!validExtensions.includes(extension)) {
    ToastError('Archivo no soportado', 'Por favor sube un archivo en formato CSV, XLS o XLSX.');
    return null;
  }

  if (file.size === 0) {
    ToastError('Archivo vacío', 'Por favor sube un archivo que no esté vacío.');
    return null;
  }

  if (file.size > 10 * 1024 * 1024) {
    ToastError('Archivo demasiado grande', 'Por favor sube un archivo menor a 10MB.');
    return null;
  }

  return file;
}