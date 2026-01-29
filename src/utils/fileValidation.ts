export const validateFile = (files: FileList | null): File | null => {
    if (!files || files.length === 0) return null;

    const file = files[0];

    const validExtensions = ["csv", "xls", "xlsx"];
    const extension = file.name.split(".").pop()?.toLowerCase() || "";

    if (!validExtensions.includes(extension)) {
      alert("Solo se permiten archivos CSV, XLS o XLSX");
      return null;
    }

    return file;
}