document.addEventListener('DOMContentLoaded', () => {
    const modelSelect = document.getElementById('model-select');
    const modelViewer = document.getElementById('model-viewer');

    modelSelect.addEventListener('change', (event) => {
        const selectedModel = event.target.value;
        modelViewer.setAttribute('src', `./models/${selectedModel}`);
    });
});
