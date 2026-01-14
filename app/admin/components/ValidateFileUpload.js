export function ValidateFileUpload(fileInputEvent, allowedExtensions = ['pdf']) {
    const fileInput = fileInputEvent.target;
    const file = fileInput.files[0];

    if (!file) {
        return { isValid: false, message: 'No file selected', fileName: 'Select File' };
    }

    const fileName = file.name.trim();
    const extension = fileName.split('.').pop().toLowerCase();

    if (!allowedExtensions.includes(extension)) {
        fileInput.value = ''; 
        return {
            isValid: false,
            message: `Invalid file type. Only ${allowedExtensions.join(', ').toUpperCase()} files are allowed.`,
            fileName: 'Select File',
        };
    }

    return { isValid: true, message: '', fileName };
}