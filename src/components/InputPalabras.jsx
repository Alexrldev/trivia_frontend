const InputPalabras = ({ph}) => {
    return (
        <input type="text" placeholder={ph}required className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md m-1"/>
    );
}
//Definir los tipos esperados con proptypes
/*InputPalabras=
{
    nombre: PropTypes.boolean.isRequired
};*/

export default InputPalabras;

