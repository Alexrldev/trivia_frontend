import { useContext } from "react";
import { authContext } from "./context/Context";
import { Navigate, Outlet } from "react-router-dom";
import PantCarga from "./components/PantCarga";

const LogProteg = () => 
{
    const{loading, isAuthenticated}=useContext(authContext);
    if(loading)
        return <PantCarga/>
    if(!isAuthenticated&&!loading)
        return <Outlet/>
    return <Navigate to="/add-palabra" replace/>
}

export default LogProteg;
