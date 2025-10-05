import "./App.css";
import MyNavbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Register from "./views/Register.jsx";
import Cart from "./views/Cart.jsx";
import Login from "./views/Login.jsx";
import Home from "./views/Home.jsx";
import NotFound from "./views/NotFound.jsx";
import Pizza from "./views/Pizza.jsx";
import Profile from "./components/Profile.jsx";
import {Routes, Route} from 'react-router-dom'
import { useState } from "react";


/* 

Como no está indicado en las instrucciones el conectar los botones con las secciones de la app, coloqué temporariamente un "selector" para facilitar el observar los contenidos requeridos de forma aislada.
  
//Soluciones provisorias: 

App.jsx  
Cambiar el contenido de visible a 'home' para visualizar al componente home, 'register' para visualizar al componente register, 'login' para el componente login y 'pizza' para 
ver la información obtenida de un servidor local sobre una pizza en específico.

Login.jsx
Para el Login, el email "almacenado" es: 'email' y la contraseña: 'thepassword'


Pizza.jsx
Adicionalmente al endpoint /pizza/001, se puede acceder a ella haciendo click en cualquier botón de "ver más" en el Home.
 *Para salir de Pizza basta con volver al Home (Brand Pizza Ticcino, Home) o clickar sobre cualquier otro elemento del menú.
 
Profile
Adicionalmente al endpoint /profile, se puede acceder a este mediante un ingreso de credenciales exitoso del Login.
 *Para salir de Profile basta clickar en "cerrar sesión, o accediendo al Home (Brand Pizza Ticcino, Home) o clickar sobre cualquier otro elemento del menú.

   
 */

function App() {
  const [token, setToken] = useState(false)

  return (
    <>
      <MyNavbar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/pizza/001" element={<Pizza/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      <Footer />
    </>
  );
}

export default App;
