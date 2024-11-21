import { useRef, useState } from "react";
import BotonQuiz from "./BotonQuiz";
import RespuestaCI from "./RespuestaCI";

const Quiz = ({pregunta, index, setIndex, reinicio, setReinicio}) => {
    const[incorrecto,setIncorrecto]=useState(false);
    const [finalizado, setFinalizado]=useState(false);
    const[acertado,setAcertado]=useState(false);
    const NUM_PREG=9;
    const input= useRef(null);    
    const sigPreg = () =>
    {
        console.log(pregunta.español);
        const respString=input.current.value;
        if(respString.toLowerCase()===pregunta.español.toLowerCase())
        {
            setAcertado(true);

            input.current.focus();
            input.current.value="";
            setTimeout(()=>setAcertado(false),2000);
            incrementar();
            if(index===9)
            {
                setFinalizado(true);
            }
        }
        else 
        {
            setIncorrecto(true);
            setTimeout(()=>setIncorrecto(false),2000);
        }
    }

    const incrementar=()=>
    {
        if(index<NUM_PREG)
        {   
            setIndex(index+1);
        }
    }

    const reiniciar=()=>
    {
        setIndex(0);
        setReinicio(!reinicio);
        setFinalizado(false);
    }

    return (
        <div>
            <div className= "animate-fadein bg-slate-800 rounded-3xl w-80 h-96 flex flex-col items-center p-4 gap-4">
                {
                    finalizado 
                    ? 
                        <>
                            <span>Finalizado</span>
                            <BotonQuiz func={reiniciar} texto={"Reiniciar"} green={false}/>
                        </>
                    :
                    <>
                    <h1>Escribe la traducción en español de:</h1>
                    <span className="font-bold text-2xl ">{pregunta.japohk}</span>
                    <input ref={input} onKeyDown={e => {if(e.code==="Enter") sigPreg()}} className="w-3/4 text-black" name="respuesta"/>
                    <div className="flex justify-center w-full">
                        <BotonQuiz func={sigPreg} texto={"Siguiente"} green={true} />
                        <BotonQuiz func={reiniciar} texto={"Reiniciar"} green ={false}/>
                    </div>
                    <span>{index+1}/10</span>
                    {
                        incorrecto &&
                            <RespuestaCI texto={"Respuesta incorrecta"} green={false}/>
                    }
                    {
                        acertado&&
                        <RespuestaCI texto={"Respuesta correcta"} green={true}/>
                    }
                    </>
                }
            </div>
        </div>
    );
}

export default Quiz;
