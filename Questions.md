# Preguntas y las respuestas del workshop

## Historia de Usuario 1: Configuracion Inicial y Estructura del Proyecto

### 1. Configuracion del Proyecto

1. **¿Qué propósito cumple el archivo `main.ts` en un proyecto NestJS y por qué es crucial en la configuración inicial?**
   - El archivo main.ts es como el punto de entrada de la app, esta arranca el servidor y configura cosas importantes como el puerto. Es esencial para que todo este listo antes de que tu app empiece a funcionar.

2. **¿Qué diferencia existe entre `app.module.ts` y `app.controller.ts`? ¿Cómo se relacionan estos archivos con la modularidad y la estructura de la aplicación?**
   - app.module.ts organiza la estructura del proyecto, organiza todo y dice que se usara y como se divide en modulos.

   - app.controller.ts maneja las rutas y las solicitudes, cada modulo puede tener su propio controlador o multiples controladores, gestionando rutas especificas

### 2. Creacion de Modulos Basicos

1. **¿Por qué crees que es importante modularizar la aplicación separando funcionalidades en diferentes módulos?**
   - La modularizacion ayuda a mantener la aplicacion organizada, ayuda a mantener todo organizado y hace mas facil manejar y actualizar el codigo.

2. **¿Cómo crees que afecta la modularidad al mantenimiento y escalabilidad de la aplicación?**
   - La modularidad permite realizar cambios o mejoras en un modulo especifico sin necesidad de entender o dañar el codigo de otros modulos, puedes cambiar o añadir cosas sin desordenar el resto.

3. **Despues de crear los archivos de los módulos, ¿qué archivos se generan y cómo se relacionan con los módulos creados?**
   - Cada modulo crea un archivo parecido a loans.module.ts, que indica que se usara en ese modulo, como un resumen.

### 3. Implementacion de Controladores

1. **¿Qué sucede si defines incorrectamente un decorador en un controlador? ¿Cómo afecta esto a la funcionalidad del endpoint?**
     - Si un decorador como @Get o @Post no esta bien puesto, puede hacer que tu app se comporte de manera impredecible o incluso que partes no funcionen correctamente.

2. **¿Por qué es importante manejar rutas dinámicas (por ejemplo, `@Get(':id')`) en aplicaciones que interactúan con bases de datos?**
     - Las rutas dinamicas permiten interactuar con datos especificos, como buscar o cambiar informacion de un usuario por su ID, haciendola mas flexible y poderosa.

## Historia de Usuario 2: Implementacion de la Logica de Negocio y Seguridad

### 1. Desarrollo de Servicios

1. **¿Qué ventajas tiene manejar la lógica de negocio en servicios en lugar de controladores?**
     - Usar servicios para la logica de negocio hace que todo este mas ordenado y sea mas facil de manejar. Tambien permite reutilizar esa logica en diferentes partes de la app sin duplicar codigo.

2. **¿Cómo se relaciona la inyección de dependencias con la modularidad y la capacidad de prueba de la aplicación?**
     - La inyeccion de dependencias conecta partes de tu app de manera flexible, facilitando el cambio y las pruebas de componentes sin alterar el resto de la app.

### 2. Aplicacion de Decoradores y Pipes

1. **¿Por qué es crucial validar los datos de entrada en una aplicación que maneja transacciones financieras?**
     - Validar datos es crucial para proteger tu app de errores o ataques que podrian manipular transacciones o causar otros problemas graves.

2. **¿Qué podría suceder si un decorador está mal colocado o si no se aplican los pipes correctamente?**
     - Si los decoradores o pipes no estan bien configurados, podrias terminar procesando datos incorrectos o dañinos, lo que podria causar problemas o abrir brechas de seguridad.

### 3. Configuracion de Exception Filters

1. **¿Cómo impacta el manejo adecuado de excepciones en la experiencia del usuario y en la seguridad de la aplicación?**
     - Manejar bien las excepciones ayuda a asegurar que los errores no muestren informacion sensible y que los usuarios reciban mensajes claros cuando algo va mal, haciendo tu app mas profesional y segura.

2. **¿Por qué es importante tener un manejo centralizado de excepciones en una aplicación NestJS?**
     - Un sistema centralizado para manejar errores hace que todos los errores se traten de la misma manera, facilitando el mantenimiento y la mejora de como responde tu app a problemas.
