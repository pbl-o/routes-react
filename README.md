Pizzería (Quinta parte)

Pablo Díaz

La quinta etapa consiste en la implementación de React Router para construir una SPA cuyo enrutamiento responderá a vistas (index, register, login, cart, etc...)

*La página está en proceso y de momento es accesible solo de manera local. Por ello de manera temporal se han dispuesto instrucciones específicas para esta fase del proyecto, tanto aquí, como en forma de comentarios en el fichero App.jsx

Para ejecutar de manera local: 
#### 1 - Descargar
#### 2 - Instalar dependencias (npm i)
#### 3 - Ejecutar (npm run dev) 

*Esta aplicación funciona en conjunto con una api (node.js  express.js) para su correcto renderizado   

Instrucciones específicas:
(Soluciones provisorias) 

Login.jsx
Para el Login, las credenciales de acceso (email y contraseña) están comentados en el componente.

Pizza.jsx
Adicionalmente al ingreso del endpoint /pizza/001 en la url, se puede acceder a ella haciendo click en cualquier botón de "ver más" en las tarjetas de cada pizza en Home.
 *Para salir del detalle de la pizza, basta con volver al Home: por ejemplo al hacer click en el Brand (Pizza Ticcino) o hacer click sobre cualquier otro elemento del menú de la página.
 
Profile.jsx
Adicionalmente al ingreso del endpoint '/profile' en la url, se puede acceder desde el menú, cambiando previamente el estado "token" en el componente Navabar.jsx a true, o bien, mediante un ingreso de credenciales exitoso del Login.
 *Para salir de Profile basta con hacer click en "cerrar sesión, o volver a Home, como se indica en el apartado de Pizza.jsx.


Tecnologías utilizadas: React, Bootstrap + Vite
