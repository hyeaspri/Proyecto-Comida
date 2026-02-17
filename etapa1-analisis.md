# Información General del Sistema

## Problema: 

La falta de organización y planificación a la hora de manejar los alimentos en casa. Esto hace que a veces falten productos básicos, que otros se echen a perder por vencimiento o mal almacenamiento, y que la comida se vuelva repetitiva y poco balanceada, afectando incluso la salud.
Muchas amas y amos de casa, por falta de tiempo, cansancio o limitaciones económicas, terminan haciendo compras pequeñas y frecuentes, sin una lista clara ni revisar bien lo que ya tienen en la alacena o en la nevera. Al final, esto provoca gastos innecesarios, desperdicio de comida y más estrés al momento de preparar comidas que sean saludables, variadas y que se ajusten al presupuesto.

## Objetivo General: 

Mejorar la organización y la planificación de la alimentación en los hogares, con el fin de reducir el desperdicio de comida, aprovechar mejor el presupuesto familiar y asegurar una dieta variada, saludable y equilibrada.

## Objetivo especificos: 

- Diseñar estrategias que ayuden a elaborar listas de compras claras y ajustadas a las necesidades reales de cada familia.
- Implementar métodos sencillos de control y registro para saber qué alimentos hay en la alacena y en la nevera.
- Promover el uso de recetas fáciles, económicas y nutritivas que permitan variar más la alimentación diaria.
- Fomentar hábitos de compra más organizados y eficientes, reduciendo las compras improvisadas y el desgaste de quienes se encargan del hogar.
- Disminuir el desperdicio de alimentos mediante una mejor planificación del consumo y un almacenamiento adecuado.

## Alcance: 

La desorganización en la alimentación dentro del hogar, algo que termina afectando directamente la calidad de vida de las familias. Esto incluye no planificar bien las compras, no saber con certeza qué hay en la alacena o en la nevera, dejar que los alimentos se dañen o se venzan, y repetir siempre los mismos platos.
Todo esto lleva a una dieta poco variada y desequilibrada, que puede afectar tanto la salud como la economía familiar. Además, impacta especialmente a las amas y amos de casa, quienes muchas veces tienen poco tiempo, están cansados o cuentan con un presupuesto limitado, lo que hace más difícil preparar comidas que sean saludables, económicas y diferentes. En resumen, el problema no es solo la mala organización de los alimentos, sino también sus consecuencias en la nutrición, el bienestar y los gastos del hogar.


## Solucion: 

Sugerimos una aplicaciÓn web que pretende estar enfocada en organizar y planificar la alimentación del hogar, ofreciendo herramientas prácticas y fáciles de usar:

- **Gestión de inventario doméstico**: Permitiría registrar los alimentos disponibles en la alacena y la nevera, llevar un control sencillo de lo que hay en casa y recibir alertas cuando algún producto esté próximo a vencer, evitando así el desperdicio. Además, mostraría de forma clara qué productos faltan.

- **Listas de compras inteligentes**: Generaría listas de compras automáticas según el inventario disponible y las necesidades de la familia. También permitiría ajustar la lista al presupuesto y vincularla con recetas sugeridas, para comprar solo lo necesario y evitar gastos innecesarios.

- **Recetario saludable y económico**: Ofrecería recetas variadas, fáciles y nutritivas basadas en los ingredientes disponibles. Incluiría filtros por tiempo de preparación, costo y valor nutricional, además de sugerencias para aprovechar alimentos antes de que se dañen.

- **Planificador de menús semanales**: Facilitaría la organización de las comidas durante la semana, ayudando a evitar la monotonía y promoviendo un mejor balance nutricional. El plan podría exportarse directamente a la lista de compras.

- **Reportes y estadísticas**: Brindaría información sobre el ahorro generado al reducir el desperdicio de alimentos y mostraría el nivel de variedad en la dieta familiar, permitiendo evaluar mejoras en la alimentación y en la economía del hogar.

## Requerimientos Funcionales

| ID     | Nombre                         | Descripción | Prioridad |
|--------|--------------------------------|------------|-----------|
| RF001  | Pantalla Principal | El sistema deberá mostrar una pantalla principal con acceso a los módulos: Registrar Alimentos, Alacena, Mercado y Recetas. | Alta |
| RF002  | Registro de Usuario | El sistema deberá permitir el registro de usuarios con credenciales (correo y contraseña). | Alta |
| RF003  | Inicio de Sesión | El sistema deberá permitir a los usuarios autenticarse mediante correo y contraseña. | Alta |
| RF004  | Gestión de Roles | El sistema deberá soportar dos tipos de usuario: Usuario Normal y Administrador. | Alta |
| RF005  | Permisos Usuario Normal | El Usuario Normal podrá registrar alimentos, consultar la alacena, generar mercado y visualizar recetas. | Alta |
| RF006  | Permisos Administrador | El Administrador podrá gestionar usuarios, editar o eliminar cualquier alimento registrado y administrar recetas del sistema. | Alta |
| RF007  | Registrar Alimentos | El sistema deberá permitir ingresar nombre del producto, cantidad, categoría y fecha de vencimiento. | Alta |
| RF008  | Guardar en Base de Datos | El sistema deberá almacenar los alimentos registrados en la base de datos. | Alta |
| RF009  | Editar y Eliminar Producto | El sistema deberá permitir modificar o eliminar alimentos previamente registrados. | Media |
| RF010  | Visualizar Alacena | El sistema deberá mostrar la lista completa de alimentos registrados. | Alta |
| RF011  | Cálculo de Vencimiento | El sistema deberá calcular automáticamente los días restantes para el vencimiento de cada alimento en tiempo real. | Alta |
| RF012  | Generar Lista de Mercado | El sistema deberá generar automáticamente una lista de mercado basada en productos faltantes o próximos a vencerse. | Alta |
| RF013  | Clasificación por Categorías | El sistema deberá organizar los productos del mercado por categorías (proteínas, frutas, vegetales, carbohidratos, etc.). | Media |
| RF014  | Sugerencia de Recetas | El sistema deberá sugerir recetas basadas en los alimentos disponibles en la alacena. | Alta |
| RF015  | Detalle de Recetas | El sistema deberá mostrar imagen, tiempo de preparación, ingredientes e instrucciones de cada receta. | Media |

## Requerimientos No Funcionales

| ID     | Nombre                         | Descripción | Prioridad |
|--------|--------------------------------|------------|-----------|
| RNF001 | Usabilidad de Registro | El sistema deberá permitir que un usuario nuevo registre un producto en un tiempo máximo de 30 segundos, sin necesidad de consultar un manual de instrucciones. | Alta |
| RNF002 | Diseño Visual Coherente | La interfaz deberá mantener una paleta de colores coherente y consistente (por ejemplo, verde para acciones positivas y alertas visuales claras para productos próximos a vencer), con el fin de facilitar la lectura rápida y comprensión de la información. | Media |
| RNF003 | Adaptabilidad Móvil | La interfaz deberá estar optimizada para dispositivos móviles, considerando que el registro de alimentos se realizará principalmente desde entornos como la cocina. | Alta |
| RNF004 | Rendimiento de Carga | Las sugerencias de recetas y la actualización de la lista de “Próximo mercado” deberán cargarse en un tiempo máximo de 3 segundos después de que el usuario realice una acción. | Alta |
| RNF005 | Capacidad de Respuesta | El sistema deberá soportar al menos 50 productos registrados por usuario sin afectar la fluidez del desplazamiento (scroll) en el módulo “Alacena”. | Media |
| RNF006 | Seguridad de Acceso | Si la aplicación cuenta con sincronización en la nube, el acceso a la información del inventario deberá estar protegido mediante autenticación segura de usuario. | Alta |
| RNF007 | Integridad de Datos | El sistema deberá validar que los campos “Cantidad” y “Valor” acepten únicamente datos numéricos antes de guardar la información en la base de datos. | Alta |
| RNF008 | Disponibilidad | La aplicación deberá mantener una disponibilidad mínima del 99% del tiempo anual para garantizar el acceso constante a recetas y listas de mercado. | Media |
| RNF009 | Localización de Formatos | El sistema deberá utilizar el formato de fecha regional (dd/mm/aaaa) para coincidir con el estándar local de entrada de datos del usuario. | Media |
| RNF010 | Portabilidad | La aplicación deberá ser compatible con los navegadores web modernos más utilizados (Google Chrome, Mozilla Firefox y Safari). | Alta |















