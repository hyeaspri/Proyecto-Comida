# Información General del Sistema

## El problema que se quiere resolver: 

La falta de organización y planificación a la hora de manejar los alimentos en casa. Esto hace que a veces falten productos básicos, que otros se echen a perder por vencimiento o mal almacenamiento, y que la comida se vuelva repetitiva y poco balanceada, afectando incluso la salud.
Muchas amas y amos de casa, por falta de tiempo, cansancio o limitaciones económicas, terminan haciendo compras pequeñas y frecuentes, sin una lista clara ni revisar bien lo que ya tienen en la alacena o en la nevera. Al final, esto provoca gastos innecesarios, desperdicio de comida y más estrés al momento de preparar comidas que sean saludables, variadas y que se ajusten al presupuesto.

## Los usuarios del sistema:  
Los usuarios del sistema serían principalmente las familias y, en especial, las personas encargadas de la compra y preparación de los alimentos en el hogar. No obstante, su alcance puede extenderse a distintos perfiles que comparten la necesidad de organizar mejor su alimentación:

- *Amas y amos de casa: principales usuarios, ya que gestionan la alimentación diaria y requieren apoyo para planificar compras, controlar inventarios y organizar menús de forma eficiente.*

- *Familias en general: beneficiarias directas de una alimentación más variada, equilibrada y económica, así como de la reducción del desperdicio de alimentos.*

- *Estudiantes y profesionales independientes: personas con poco tiempo disponible que necesitan soluciones prácticas para organizar sus comidas y optimizar su presupuesto.* 

- *Adultos mayores: quienes pueden apoyarse en recordatorios de vencimiento y planificación sencilla para mantener una dieta adecuada y evitar pérdidas.*

- *Pequeños negocios de comida casera: emprendedores que pueden utilizar la aplicación para gestionar insumos, planificar compras y reducir mermas.*

## La entrada, el proceso y la salida del sistema: 

### *Entrada*

- El sistema recibe información clave proporcionada por el usuario, entre ella:

- Datos del inventario doméstico: alimentos disponibles en la alacena y la nevera (nombre, cantidad, categoría y fecha de vencimiento).

- Preferencias y restricciones familiares: presupuesto disponible, gustos, alergias, tipo de dieta y tiempo para cocinar.

- Información sobre compras realizadas o listas de mercado pendientes.

- Recetas seleccionadas por el usuario o parámetros para generar sugerencias automáticas.

### *Proceso* 
- El sistema analiza y transforma los datos ingresados mediante los siguientes procesos:

- Gestión de inventario: registro, actualización y control de productos, incluyendo el cálculo automático de días restantes para su vencimiento y generación de alertas.

- Generación de listas de compra: elaboración automática de listas basadas en productos faltantes, próximos a vencer, presupuesto disponible y menús planificados.

- Planificación de menús: organización de comidas semanales equilibradas y variadas según las preferencias y necesidades del usuario.

- Motor de recomendaciones: sugerencia de recetas prácticas, económicas y nutritivas en función de los ingredientes disponibles.

- Análisis de consumo: cálculo del ahorro económico, reducción del desperdicio y evaluación básica del balance nutricional.

### *Salida* 

- Como resultado, el sistema proporciona:

- Listas de compras organizadas y ajustadas al presupuesto.

- Menús semanales variados y saludables.

- Recetas adaptadas a los ingredientes disponibles en el hogar.

- Alertas de productos próximos a vencer.

- Reportes sobre ahorro económico, reducción de desperdicio y mejora en la calidad de la alimentación.

  
## Alcance: 

La desorganización en la alimentación dentro del hogar, algo que termina afectando directamente la calidad de vida de las familias. Esto incluye no planificar bien las compras, no saber con certeza qué hay en la alacena o en la nevera, dejar que los alimentos se dañen o se venzan, y repetir siempre los mismos platos.
Todo esto lleva a una dieta poco variada y desequilibrada, que puede afectar tanto la salud como la economía familiar. Además, impacta especialmente a las amas y amos de casa, quienes muchas veces tienen poco tiempo, están cansados o cuentan con un presupuesto limitado, lo que hace más difícil preparar comidas que sean saludables, económicas y diferentes. En resumen, el problema no es solo la mala organización de los alimentos, sino también sus consecuencias en la nutrición, el bienestar y los gastos del hogar.




## Requerimientos Funcionales

| ID     | Nombre                         | Descripción | Prioridad |
|--------|--------------------------------|------------|-----------|
| RF001  | Pantalla Principal | El sistema deberá mostrar una pantalla principal con acceso a los módulos: Registrar Alimentos, Alacena, Mercado y Recetas. | Alta |
| RF002  | Registrar Alimentos | El sistema deberá permitir ingresar nombre del producto, cantidad, categoría y fecha de vencimiento. | Alta |
| RF003  | Guardar en Base de Datos | El sistema deberá almacenar los alimentos registrados en la base de datos. | Alta |
| RF004  | Editar y Eliminar Producto | El sistema deberá permitir modificar o eliminar alimentos previamente registrados. | Media |
| RF005  | Visualizar Alacena | El sistema deberá mostrar la lista completa de alimentos registrados. | Alta |
| RF006  | Cálculo de Vencimiento | El sistema deberá calcular automáticamente los días restantes para el vencimiento de cada alimento en tiempo real. | Alta |
| RF007  | Alertas de Vencimiento | El sistema deberá notificar al usuario cuando un alimento esté próximo a vencer. | Media |
| RF008  | Generar Lista de Mercado | El sistema deberá generar automáticamente una lista de mercado basada en productos faltantes o próximos a vencerse. | Alta |
| RF009  | Clasificación por Categorías | El sistema deberá organizar los productos del mercado por categorías (proteínas, frutas, vegetales, carbohidratos, etc.). | Media |
| RF010  | Sugerencia de Recetas | El sistema deberá sugerir recetas basadas en los alimentos disponibles en la alacena. | Alta |
| RF011  | Detalle de Recetas | El sistema deberá mostrar imagen, tiempo de preparación, ingredientes e instrucciones de cada receta. | Media |
| RF012  | Marcar Productos Comprados | El sistema deberá permitir marcar productos como comprados dentro de la lista de mercado. | Media |

## Requerimientos No Funcionales

| ID     | Nombre                         | Descripción | Prioridad |
|--------|--------------------------------|------------|-----------|
| RNF001  | Usabilidad de Regustro | El sistema debe permitir que un usuario nuevo registre un producto en menos de 30 segundos sin necesidad de un manual de instrucciones.  | Alta |
| RNF002  | Diseño Visual Coherente | La interfaz debe mantener una paleta de colores coherente (como el verde para mantener acciones positivas) tal sea para facilitar la lectura rapida de fechas vencimiento etc. | Media |
| RNF003  | Adaptabilidad Móvil | La interfaz debe ser adaptable solo para dispositivos móviles, dado que el registro de alimentos suele hacerse desde la cocina.  | Alta |
| RNF004  | Rendimiento de Carga | Las sugerencias de recetas y la actualización de la lista de "Próximo mercado" deben cargar en menos de 3 segundos tras realizar una acción. | Alta |
| RNF005  | Capacidad de Respuesta |El sistema debe soportar al menos 50 productos registrados por usuario sin dañar la velocidad de desplazamiento (scroll) en la "Alacena". | Media |
| RNF006  | Seguridad de Acceso | Si la aplicación se sincroniza, el acceso a la información del inventario debe estar protegido mediante autenticación de usuario.  | Alta |
| RNF007  | Integridad de Datos | El sistema debe validar que los cmapos de "Cantidad" y "Valor" solo acepten datos numericos antes de guardar. | Alta |
| RNF008  | Disponibilidad | La aplicación debe estar operativa al menos el 99% del tiempo para garantizar el acceso constante a las recetas y listas de mercado. | Media |
| RNF009  | Localización de Formatos | El sistema debe utilizar el formato de fecha regional (dd/mm/aaaa) para conincidir con la entrada de datos del usuario. | Media |
| RNF010  | Portabilidad | La aplicación debe ser funcional en los navegadores web más modernos (Chrome, Firefox, Safari). | Alta |













