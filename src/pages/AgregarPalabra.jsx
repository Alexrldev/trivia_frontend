import {useForm} from "react-hook-form"
import { addPalabra, getPalabra, updatePalabra } from "../api/palabras";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, /*useRef*/ } from "react";

//import { useState } from "react";
/*import InputPalabras from "../components/InputPalabras";*/

const AgregarPalabra = () => {
    const {register, handleSubmit, setValue}=useForm();
    const params=useParams();
    //const inputEsp=useRef(null);
    const navigate=useNavigate();
    //const[limpiar, setLimpiar]=useState(null);

    useEffect(()=>
    {
        async function actualizarPalabra()
        {
            if(params.id)
            {
                try
                {
                    const obtenerPalabra= await getPalabra(params.id);
                    console.log(obtenerPalabra.data);
                    setValue('español', obtenerPalabra.data.español);
                    setValue('romaji', obtenerPalabra.data.romaji);
                    setValue('japohk', obtenerPalabra.data.japohk);   
                }
                catch(e)
                {
                    if (e.response.data) 
                        alert(e.response.data);    
                    else
                        console.log(e);
                    
                    navigate("/palabras");
                }
            }
        }
        actualizarPalabra()
    }, [])

    const handleSub= handleSubmit(async(values)=>
    {       
        if(!params.id)
            try
            {
                const res= await addPalabra(values);
                alert("Español:"+res.data.español+"\n"+"Romaji:"+res.data.romaji+"\n"+"Japohk:"+res.data.japohk+"\n"+"Datos ingresados correctamente");
                console.log(res.data);
                
                //Array.from es para convertir los inputs en un arreglo
                Array.from(document.querySelectorAll('input')).forEach(input=> input.value="");
                document.getElementById("esp").focus();
                //inputEsp.current.focus();  
            }   
            catch(e)
            {
                console.log(e);
            }  
        else
        {
            try 
            {
               const res= updatePalabra(params.id, values) 
               alert("Datos actualizados"); 
               console.log(res.data);  
               navigate("/palabras");
            } 
            catch (error) 
            {
                console.log(error);   
            }
        }  
    });

    return (
        <div className="bg-zinc-800 max-w-md p-10 rounded-md">
            <form onSubmit={handleSub}>
                <input id="esp" {...register("español",{required:"true"})} placeholder="Español" /*ref={inputEsp}*/ required className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md m-1"/>
                <input {...register("romaji",{required:"true"})} placeholder="Romaji" required  className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md m-1"/>
                <input {...register("japohk",{required:"true"})} placeholder="Hiragana/Katakana" required className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md m-1"/>
                <button className="bg-white p-2 rounded-lg text-black mt-2 hover:bg-slate-300 active:bg-white" type="submit">{params.id ? "Actualizar":"Agregar"}</button>
            </form>
        </div>
    );
}

export default AgregarPalabra;
