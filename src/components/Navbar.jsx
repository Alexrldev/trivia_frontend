import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../context/Context";

const Navbar = () => {
    const ruta=useLocation();
    const{user, lo, isAuthenticated}= useContext(authContext);
    console.log(ruta.pathname);
    return (
        <>
        {
            isAuthenticated  && (ruta.pathname !== '/' && ruta.pathname!== '/quiz') ?
            <nav className=" flex justify-between m-2 mt-0 bg-gray-800 p-2 rounded-lg rounded-t-none">
                <h1 className=" text-2xl">Administrar palabras</h1>
                <ul className="flex gap-2">
                    <li>
                        {user.usuario}
                    </li>
                    <li>
                        <Link to="html/trivia/add-palabra" className="p-1 rounded-lg hover:bg-slate-700 active:bg-black">Agregar palabra</Link>
                    </li>
                    <li>
                        <Link to="html/trivia/palabras" className="p-1 rounded-lg hover:bg-slate-700 active:bg-black">Ver palabras</Link>
                    </li>
                    <li>
                        <Link to="html/trivia/" className="p-1 rounded-lg hover:bg-slate-700 active:bg-black" onClick={lo}>Cerrar sesión</Link>
                    </li>
                </ul>
            </nav>
            : 
            <nav className=" flex justify-between m-2 mt-0 bg-gray-800 p-2 rounded-lg rounded-t-none">
                <ul className="flex gap-2">
                    <li>
                        <Link to="html/trivia/login" className="p-1 rounded-lg mx-4 hover:bg-slate-700 active:bg-black">Iniciar sesión</Link>
                    </li>
                    <li>
                        <Link to="https://github.com/Alexrldev/backend_trivia" className="mx-4 p-1 rounded-lg hover:bg-slate-700 active:bg-black" >Repositorio backend</Link>
                    </li>
                    <li>
                        <Link to="https://github.com/Alexrldev/trivia_frontend" className="mx-4 p-1 rounded-lg hover:bg-slate-700 active:bg-black" >Repositorio Frontend</Link>
                    </li>
                </ul>
            </nav>
        }
        </>
    );
}

export default Navbar;
