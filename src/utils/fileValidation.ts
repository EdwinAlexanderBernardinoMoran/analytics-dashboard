import { ToastError } from "./ToastError";

export const validateFile = (files: FileList | null): File | null => {
  if (!files || files.length === 0) return null;

  const file = files[0];

  const validExtensions = ["csv", "xls", "xlsx"];
  const extension = file.name.split(".").pop()?.toLowerCase() || "";

  if (file.size === 0) {
    ToastError('File is empty', 'Please upload a non-empty file.');
    return null;
  }

  if (file.size > 10 * 1024 * 1024) {
    ToastError('File is too large', 'Please upload a file smaller than 10MB.');
    return null;
  }

  if (!validExtensions.includes(extension)) {
    ToastError('File not supported', 'Please upload a file in CSV, XLS, or XLSX format.');
    return null;
  }

  return file;
}