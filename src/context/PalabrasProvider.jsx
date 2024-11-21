import { createContext } from "react";

const palabraContext=createContext();

const PalabrasProvider = ({children}) => 
{
const r=1;
    
    return (
        <palabraContext.Provider value={r}>
            {children}
        </palabraContext.Provider>
    );
}

export default PalabrasProvider;

