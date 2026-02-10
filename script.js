// Función para cambiar entre pantallas
function navegar(idPantalla) {
    // Ocultar todas las secciones
    document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
    
    // Mostrar la pantalla deseada
    document.getElementById(idPantalla).classList.add('active');
}

// Lógica del formulario de registro
document.getElementById('form-registro').addEventListener('submit', function(e) {
    e.preventDefault();

    // Capturar datos
    const producto = {
        nombre: document.getElementById('nombre').value,
        cantidad: document.getElementById('cantidad').value,
        valor: document.getElementById('valor').value,
        fecha: document.getElementById('fecha').value
    };

    console.log("Producto guardado:", producto);

    // Feedback al usuario (puedes cambiarlo por una alerta más bonita)
    alert(`¡${producto.nombre} guardado con éxito!`);

    // Limpiar formulario y volver a la principal (según tu instrucción)
    this.reset();
    navegar('pantalla-principal');
});