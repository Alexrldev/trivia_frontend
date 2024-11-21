import axios from "axios"

const instancia= axios.create(
    {
        //creamos una instancia con la url base y credenciales en true para leer el cookie
        //baseURL:"http://localhost:3000/api",
        baseURL:"https://backend-trivia.onrender.com/api",
        withCredentials:true
    }
);

export default instancia;