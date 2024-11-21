const BotonQuiz = ({func,texto, green}) => {
    return (
        <button className={`w-5/12 my-4 mx-2 p-4 rounded-md ${green?"bg-green-600":"bg-blue-600"}`} onClick={()=>func()}>{texto}</button>
    );
}

export default BotonQuiz;
