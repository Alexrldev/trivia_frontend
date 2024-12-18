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
            <nav className=" flex m-2 mt-0 bg-gray-800 p-2 rounded-lg rounded-t-none justify-center">
                <ul className="flex gap-2">
                    <li>
                        <Link to="html/trivia/login" className="rounded-lg mx-1 hover:bg-slate-700 active:bg-black sm:p-2 max-[530px]:text-sm max-[450px]:text-[13px] max-[385px]:text-[11px] max-[336px]:text-[10px]">Iniciar sesión</Link>
                    </li>
                    <li>
                        <Link to="https://github.com/Alexrldev/backend_trivia" className="mx-1 rounded-lg hover:bg-slate-700 active:bg-black sm:p-2 max-[530px]:text-sm max-[450px]:text-[13px] max-[385px]:text-[11px] max-[336px]:text-[10px]" >Repositorio backend</Link>
                    </li>
                    <li>
                        <Link to="https://github.com/Alexrldev/trivia_frontend" className="mx-1 rounded-lg hover:bg-slate-700 active:bg-black sm:p-2 max-[530px]:text-sm max-[450px]:text-[13px] max-[385px]:text-[11px] max-[336px]:text-[10px]">Repositorio Frontend</Link>
                    </li>
                </ul>
            </nav>
        }
        </>
    );
}

export default Navbar;
