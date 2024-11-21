import instancia from "./axios";

export const getPalabrasHome= ()=> instancia.get("/palhome");

export const getPalabras= ()=> instancia.get("/palabras");
export const getPalabra= (id)=> instancia.get(`/palabras/${id}`);
export const deletePalabra= (id)=> instancia.delete(`/palabras/${id}`);
export const updatePalabra= (id,palabra)=> instancia.put(`/palabras/${id}`, palabra);
export const addPalabra= (palabra)=> instancia.post("/palabras", palabra);