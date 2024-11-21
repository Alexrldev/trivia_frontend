import { useForm } from "react-hook-form";
import { login } from "../api/auth";
import { useNavigate} from "react-router-dom"
import { useContext } from "react";
import { authContext } from "../context/Context";

//import { AuthProvider } from "../context/AuthContext";

const LoginPage = () => {

    //register y handleSubmit son funciones de useForm para usar en formulario, tambien hay mas utilidades como watch y errors entre otros
     
    const {register, handleSubmit}=useForm();
    const navigate= useNavigate();
    const {error, manejarError, setIsAuthenticated, setUser}=useContext(authContext);
    const handleSub= handleSubmit(async(values)=>
    {       
        try
        {
            const res= await login(values);
            setIsAuthenticated(true);
            setUser(res.data);
            navigate("html/trivia/add-palabra");
        }       
        catch(e)
        {
            if(e.response.data)
            {
                console.log(e.response.data);
                manejarError(e.response.data);
            }
            else
            {
                console.log(e);
                alert("Error desconocido");
            }   
        } 
    });

    function quitarErr()
    {
        manejarError(null);
    }

    return (
        <div className="bg-zinc-800 max-w-md p-10 rounded-md">
            <form onSubmit={handleSub}>
                {error&& (<div className=" bg-red-600 text-center text-white-600 ml-1">{error}</div>)}
                <input onFocus={quitarErr} {...register("usuario",{required:"true"})} placeholder="Usuario" required className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md m-1"/>
                <input type="password" onFocus={quitarErr} {...register("password",{required:"true"})} placeholder="contraseña" required className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md m-1"/>
                <button className="bg-white p-2 rounded-lg text-black mt-2 hover:bg-slate-300 active:bg-white" type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default LoginPage;
