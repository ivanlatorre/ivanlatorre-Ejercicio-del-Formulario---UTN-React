
const selectElement = document.getElementById('estado');

selectElement.addEventListener("change", (event) => {
    const resultado = document.getElementById('seleccionado');
    resultado.textContent = `Estado seleccionado: ${event.target.value}.`;
});



/**
 * Documento
 * https://developer.mozilla.org/es/docs/Web/API/HTMLElement/change_event
 */
