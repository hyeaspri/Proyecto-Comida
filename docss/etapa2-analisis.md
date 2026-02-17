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

## Cuadro de Roles del Sistema

| Actor |Requerimientos Funcionales que Cumple | Requerimientos No Funcionales Asociados |
|-------|---------------------------------------|------------------------------------------|
| Usuario Normal | RF002 Registro de Usuario<br>RF003 Inicio de Sesión<br>RF005 Permisos Usuario Normal<br>RF007 Registrar Alimentos<br>RF009 Editar y Eliminar Producto<br>RF010 Visualizar Alacena<br>RF011 Cálculo de Vencimiento<br>RF012 Generar Lista de Mercado<br>RF013 Clasificación por Categorías<br>RF014 Sugerencia de Recetas<br>RF015 Detalle de Recetas | RNF001 Usabilidad de Registro<br>RNF002 Diseño Visual Coherente<br>RNF003 Adaptabilidad Móvil<br>RNF004 Rendimiento de Carga<br>RNF005 Capacidad de Respuesta<br>RNF006 Seguridad de Acceso<br>RNF007 Integridad de Datos<br>RNF008 Disponibilidad<br>RNF009 Localización de Formatos<br>RNF010 Portabilidad |
| Administrador | RF003 Inicio de Sesión<br>RF004 Gestión de Roles<br>RF006 Permisos Administrador<br>RF009 Editar y Eliminar Producto<br>RF015 Detalle de Recetas | RNF002 Diseño Visual Coherente<br>RNF004 Rendimiento de Carga<br>RNF006 Seguridad de Acceso<br>RNF007 Integridad de Datos<br>RNF008 Disponibilidad<br>RNF010 Portabilidad |
