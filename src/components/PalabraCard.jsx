import { Link } from "react-router-dom";

Link
const PalabraCard = ({palabra, eliminar}) => {
    return (
        <div className=" flex justify-between gap-9 m-3 bg-slate-800 p-2 rounded-lg">
            <div>
                <p>{palabra.español}</p>
                <p>{palabra.romaji}</p>
                <p>{palabra.japohk}</p>
            </div>
            <div className="flex gap-3 items-start">
                <button onClick={()=>eliminar(palabra._id)}>Delete</button>
                <Link to={`/palabra/${palabra._id}`}>Edit</Link> 
            </div>
        </div>
    );
}

export default PalabraCard;
