## Requerimientos Funcionales

| ID     | Nombre | Descripción | Prioridad |
|--------|--------|------------|-----------|
| RF001  | Pantalla Principal | El sistema deberá mostrar una pantalla principal con acceso a los módulos: Inventario, Mercado y Recetas. | Alta |
| RF002  | Registro de Usuario | El sistema deberá permitir el registro de usuarios mediante correo electrónico y contraseña. | Alta |
| RF003  | Inicio de Sesión | El sistema deberá permitir a los usuarios autenticarse utilizando sus credenciales registradas. | Alta |
| RF004  | Gestión de Roles | El sistema deberá manejar dos tipos de usuario: Usuario Normal y Administrador, asignando permisos según el rol. | Alta |
| RF005  | Gestión de Inventario | El sistema deberá permitir registrar, editar y eliminar productos del inventario. | Alta |
| RF006  | Visualización de Inventario | El sistema deberá mostrar la lista completa de productos registrados con su información correspondiente. | Alta |
| RF007  | Cálculo de Vencimiento | El sistema deberá calcular automáticamente los días restantes para el vencimiento cada vez que se consulte el inventario. | Alta |
| RF008  | Generación de Lista de Mercado | El sistema deberá generar una lista de mercado basada en productos faltantes o próximos a vencer. | Alta |
| RF009  | Clasificación por Categorías | El sistema deberá organizar los productos por categorías (proteínas, frutas, vegetales, carbohidratos, entre otros). | Media |
| RF010  | Sugerencia de Recetas | El sistema deberá sugerir recetas basadas en los ingredientes disponibles en el inventario. | Alta |
| RF011  | Detalle de Recetas | El sistema deberá mostrar información detallada de cada receta, incluyendo ingredientes, tiempo de preparación e instrucciones. | Media |
| RF012  | Persistencia de Información | El sistema deberá conservar la información registrada por el usuario para su consulta posterior. | Alta |

## Requerimientos No Funcionales


| ID     | Nombre | Descripción | Prioridad |
|--------|--------|------------|-----------|
| RNF001 | Usabilidad | Un usuario deberá poder registrar un producto en un tiempo máximo de 30 segundos sin necesidad de asistencia externa. | Alta |
| RNF002 | Consistencia Visual | La interfaz deberá mantener una estructura visual uniforme, con colores, tipografía y organización coherente en todos los módulos. | Media |
| RNF003 | Adaptabilidad Móvil | La interfaz deberá estar optimizada para su uso en dispositivos móviles. | Alta |
| RNF004 | Rendimiento | Las acciones principales del sistema (cálculo de vencimiento, generación de mercado y sugerencia de recetas) deberán ejecutarse en un tiempo máximo de 3 segundos. | Alta |
| RNF005 | Capacidad | El sistema deberá soportar al menos 50 productos registrados por usuario sin afectar la fluidez del sistema. | Media |
| RNF006 | Seguridad | El acceso al sistema deberá requerir autenticación mediante credenciales válidas. | Alta |
| RNF007 | Validación de Datos | El sistema deberá validar que los campos obligatorios no estén vacíos y que los datos numéricos sean correctos antes de almacenarlos. | Alta |
| RNF008 | Disponibilidad | El sistema deberá estar disponible durante los periodos de uso académico y pruebas del proyecto. | Media |
| RNF009 | Formato de Fecha | El sistema deberá utilizar el formato de fecha regional (dd/mm/aaaa). | Media |
| RNF010 | Compatibilidad | La aplicación deberá funcionar correctamente en navegadores web modernos como Google Chrome, Mozilla Firefox y Safari. | Alta |

## Cuadro de Roles del Sistema

| Actor  | Requerimientos Funcionales Asociados | Requerimientos No Funcionales Asociados |
|--------|--------------------------------------|------------------------------------------|
| Usuario Normal RF002 Registro de Usuario<br>RF003 Inicio de Sesión<br>RF005 Gestión de Inventario<br>RF006 Visualización de Inventario<br>RF007 Cálculo de Vencimiento<br>RF008 Generación de Lista de Mercado<br>RF009 Clasificación por Categorías<br>RF010 Sugerencia de Recetas<br>RF011 Detalle de Recetas<br>RF012 Persistencia de Información | RNF001 Usabilidad<br>RNF002 Consistencia Visual<br>RNF003 Adaptabilidad Móvil<br>RNF004 Rendimiento<br>RNF005 Capacidad<br>RNF006 Seguridad<br>RNF007 Validación de Datos<br>RNF009 Formato de Fecha<br>RNF010 Compatibilidad |
| Administrador  | RF003 Inicio de Sesión<br>RF004 Gestión de Roles<br>RF005 Gestión de Inventario<br>RF011 Detalle de Recetas<br>RF012 Persistencia de Información | RNF002 Consistencia Visual<br>RNF004 Rendimiento<br>RNF006 Seguridad<br>RNF007 Validación de Datos<br>RNF010 Compatibilidad |
