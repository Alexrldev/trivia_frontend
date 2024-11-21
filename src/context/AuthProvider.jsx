import { useEffect, useState } from "react";
import { login, verifyToken, logout } from "../api/auth";
import { authContext } from "./Context";
import Cookie from "js-cookie";

export const AuthProvider= ({children})=>
{
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading]=useState(true)

    const comprobarLogin= async (user)=>
    {
        try
        {
            const res=await login(user);
            setUser(res.data);
            setIsAuthenticated(true);
            console.log(isAuthenticated, "login")
        }
        catch(e)
        {
            console.log(e.response);
        }
    }

    function lo() 
    {
        try
        {
            logout();
            setIsAuthenticated(false);
            setUser(null);
        }
        catch(e)
        {
            alert(`Error: ${e}`)
            console.log(e);
        }

    }
    //useEffect se ejecuta cuando hay un cambio de estado y con [], solo se ejecuta cuando se renderiza por primera vez el componente.
    useEffect(()=>
    {
        const funcionPaVerificar= async()=>
        {
            const cookieT=Cookie.get('token');
            if(!cookieT)
            {
                setIsAuthenticated(false);
                setLoading(false);
                return setUser(null);
            }  
            try
            {
                const res= await verifyToken();
                if(!res.data)
                {
                    setIsAuthenticated(false);
                    setLoading(false);
                    return setUser(null);
                }
                setIsAuthenticated(true);
                setUser(res.data);
                setLoading(false);
            }
            catch(error)
            {
                console.log(error);
                setIsAuthenticated(false);
                setUser(null);
                setLoading(false);
            }
        }
        funcionPaVerificar(); 
    }, []);    

    const manejarError= (e)=>
    {
        setError(e);
    }
    return (
        <authContext.Provider value={{isAuthenticated, setIsAuthenticated, user, setUser, loading, comprobarLogin, error, manejarError, lo}}>
            {children}
        </authContext.Provider>
    )
}
