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
import { Routes, Route } from "react-router-dom";

/* 
  
Soluciones provisorias: 

Login.jsx
Para el Login, el email "almacenado" es: 'email' y la contraseña: 'thepassword'

Pizza.jsx
Adicionalmente al ingreso del endpoint /pizza/001 en la barra de navegación del browser, se puede acceder a ella haciendo click en cualquier botón de "ver más" en las tarjetas de cada pizza en Home.
 *Para salir de Pizza basta con volver al Home (Brand Pizza Ticcino, Home) o hacer click sobre cualquier otro elemento del menú.
 
Profile
Adicionalmente al ingreso del endpoint /profile en la barra de navegación del browser, se puede acceder a este mediante un ingreso de credenciales exitoso del Login.
 *Para salir de Profile basta hacer click en "cerrar sesión, o accediendo al Home (Brand Pizza Ticcino, Home) o hacer clicksobre cualquier otro elemento del menú.

   
 */

function App() {
  return (
    <>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/pizza/001" element={<Pizza />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
