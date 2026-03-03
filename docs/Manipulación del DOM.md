# Justificación del DOM

En nuestro Gestor de Inventario de Alacena usamos la manipulación del DOM porque necesitábamos que la aplicación fuera interactiva y dinámica, sin tener que recargar la página cada vez que el usuario hiciera algo.

El DOM nos permite modificar lo que aparece en pantalla usando JavaScript. Gracias a esto podemos:

1. Manipular el flujo de la aplicación al momento de cambiar las pantallas.
2. Registrar productos desde una pantalla tipo formulario (ingresar los datos de los productos).
3. Mostrar mensajes de confirmación.
4. Actualizar automáticamente la lista de alimentos cuando se crea un producto.
5. Mostrar información nueva sin necesidad de recargar la página.

Si no usáramos el DOM, la página sería estática y cada acción obligaría a recargar todo, lo que haría la experiencia más lenta y menos práctica.

Para nuestro proyecto es importante porque el sistema funciona completamente del lado del cliente, es decir, en el navegador, ya que en esta etapa no usamos servidor.

El DOM es clave porque:

1. Le permite al usuario tener una interacción más dinámica con el sistema.
2. Hace que la aplicación se sienta más rápida.
3. Nos ayuda a conectar la lógica del sistema con lo que el usuario ve en pantalla.

En nuestro proyecto lo implementaremos de la mano con la arquitectura por capas:

1. El **Modelo** guarda los datos.
2. El **Servicio** hace los cálculos o procesos.
3. El **Controlador** escucha lo que hace el usuario.
4. El **DOM** se actualiza para mostrar los cambios.
El uso del DOM es fundamental en nuestro proyecto porque permite que la aplicación sea dinámica, clara y fácil de usar. Además, se adapta bien a la arquitectura por capas que decidimos implementar, manteniendo el código organizado y listo para crecer en el futuro.
