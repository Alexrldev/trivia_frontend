import { useEffect, useState } from "react";
import { getPalabrasHome } from "../api/palabras";
import { numAlea } from "../util/aleatorio";
import Quiz from "../components/Quiz"
//import { Link } from "react-router-dom";

const Home = () => 
{
    const [datos, setDatos]=useState(true);
    const [preguntas, setPreguntas]=useState([]);
    const [index,setIndex]=useState(0);
    const [loading, setLoading]=useState(true);
    const [reinicio, setReinicio]= useState(false);
   // const nuevoArreglo=[]; 
    useEffect(()=>
    {
        async function palabras() 
        {
            try 
            {
                const allPalabras= await getPalabrasHome();   
                const arregloNumAlea=numAlea(allPalabras.data.length);
                const nuevoArreglo=[]; 
                arregloNumAlea.forEach((numero,i)=>
                {   
                    nuevoArreglo[i]=allPalabras.data[numero];
                    console.log(numero, i, nuevoArreglo[i].japohk);   
                })
                if(nuevoArreglo.length===0)
                {
                    setDatos(false);
                    setLoading(false);
                }
                    
                setPreguntas(nuevoArreglo);
                setLoading(false);
                console.log(preguntas);
            } 
            catch (error) 
            {
                console.log(error);   
            }    
        }
        palabras();
        //setPreguntas(nuevoArreglo);
        //console.log(preguntas);
        
    }, [reinicio])
    
    return (
        <div>
            {
                datos ? 
                    loading ? <p></p>
                    :
                    <div className="flex items-center justify-center h-screen">  
                    <Quiz pregunta={preguntas[index]} index={index} setIndex={setIndex} reinicio={reinicio} setReinicio={setReinicio}/>
                    </div>
                : <h1>No hay datos. Ingresa algunos</h1>
            }
        </div>
    );
}

export default Home;
