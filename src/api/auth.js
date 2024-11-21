import instancia from "./axios";

//manda un response con los datos registrados (variable.data)
//export const palabraRequest= palabra => instancia.post("/palabras", palabra);

//login
export const login= usuario=> instancia.post("/login", usuario);

export const verifyToken= ()=> instancia.get("/verify");

export const logout=()=>instancia.post("/logout");
