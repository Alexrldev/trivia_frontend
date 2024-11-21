const RespuestaCI = ({texto,green}) => {
    return (
        <span className={`p-1 ${green?"bg-green-600":"bg-red-600"} rounded-2xl p-2`}>{texto}</span>
    );
}

export default RespuestaCI;
