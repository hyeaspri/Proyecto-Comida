##  Justificación de la Arquitectura

Para el **Gestor de Inventario de Alacena** es más conveniente utilizar la **arquitectura por capas**, ya que nuestro programa cuenta con diferentes funcionalidades que, si se implementaran en una arquitectura tipo “spaghetti”, no se verían estructuradas ni organizadas.

Con la arquitectura por capas buscamos mantener el código más ordenado, identificar errores con mayor facilidad, realizar cambios sin afectar todo el sistema y permitir el trabajo en equipo sin que todos modifiquemos las mismas partes del código.

Las funcionalidades que la aplicación web tendrá son:

1. Guardar alimentos
2. Calcular fechas de vencimiento
3. Generar la lista de mercado
4. Mostrar la información al usuario  

Si todo esto se mezcla en un solo lugar, el sistema se vuelve más complejo de entender y modificar.

Con esta arquitectura pretendemos que cada elemento tenga su espacio definido. En nuestro caso:

1. **Modelo:** donde se gestionan los datos como Producto, Usuario y Receta.
2. **Servicio:** donde se encuentra la lógica del sistema, como calcular vencimientos o generar sugerencias.
3. **Controlador:** encargado de la interacción con el usuario.
4. **Tester:** donde se realizan las pruebas del sistema.

Inicialmente consideramos utilizar una arquitectura de microservicios, pero concluimos que nuestro proyecto no es lo suficientemente grande como para requerir la división en múltiples servicios independientes.

En conclusión, la arquitectura por capas se adapta al tamaño de nuestro proyecto. Representa un punto medio adecuado: no es una estructura demasiado simple, pero tampoco excesivamente compleja.
