import { useContext } from "react";
import { authContext } from "./context/Context";
import { Navigate, Outlet} from "react-router-dom";
import PantCarga from "./components/PantCarga";

//import Cookie from "js-cookie";
//import { verifyToken } from "./api/auth";


const RutasProtegidas = () => 
{
    const {loading, isAuthenticated}=useContext(authContext);
     
    //console.log("isAuthenticated:"+isAuthenticated, "loading:"+loading);

    if(loading) 
    {
        return <PantCarga/>//<Navigate to='/login' replace/>
    }
    if(!loading && !isAuthenticated) 
        return <Navigate to="/login" replace/>

    return <Outlet/>
    //replace es para que no vuelva a la ruta anterior pero no estoy seguro
    
   /*if(!logged) 
    {
        
        return <Navigate to='/login' replace/>
    }
    return (
        //Outlet nos sirve para que continue con lo que está adendro, así protegemos las rutas
        <Outlet/>
    );*/
}

export default RutasProtegidas;
