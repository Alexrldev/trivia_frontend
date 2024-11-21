import { useEffect, useState } from "react";
import { deletePalabra, getPalabras } from "../api/palabras";
import PalabraCard from "../components/PalabraCard";

const MostrarPalabras = () => 
{
    const[pal, setPal]=useState([]);

    useEffect( ()=>
    {
        async function obtenerPalabras()
        {
            try
            {
                const palabras= await getPalabras();
                setPal(palabras.data);
            }
            catch(e)
            {
                console.log(e);
            }
        }
        obtenerPalabras();
    }, []);

    function eliminarPalabra(id) 
    {
        try
        {
            const res=deletePalabra(id);
            setTimeout(setPal(pal.filter(palabra=>palabra._id!==id)), 1500);
            alert("Datos borrados");
            setTimeout(console.log(res), 1500);
            
        }
        catch(e)
        {
            console.log(e);
        }
    }
    
    if(pal.length===0)
        return <h1>No hay palabras</h1>
    

    return (
        <div className=" m-8 grid grid-cols-3 gap-2">
        {
            pal.map((palabra,i)=>
                <PalabraCard palabra={palabra} eliminar={eliminarPalabra} key={i}/>
            )
        }
        </div>
    );
}

export default MostrarPalabras;
