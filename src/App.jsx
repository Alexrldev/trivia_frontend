import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import LoginPage from "./pages/LoginPage";
import AgregarPalabra from "./pages/AgregarPalabra";
import RutasProtegidas from "./RutasProtegidas";
import LogProteg from "./LogProteg";
import PalabrasProvider from "./context/PalabrasProvider";
import MostrarPalabras from "./pages/MostrarPalabras";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";


function App() 
{
  //const logged= funcLogged();
  return(
    <AuthProvider>
      <PalabrasProvider>
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/html/trivia" element={<Home/>}/>
            <Route element={<LogProteg/>}>
              <Route path="/html/trivia/login" element={<LoginPage/>}/>
            </Route>
            <Route element={<RutasProtegidas/>}>
              <Route path="/html/trivia/palabras" element={<MostrarPalabras/>}/>
              <Route path="/html/trivia/palabra/:id" element={<AgregarPalabra/>}/>
              <Route path="/html/trivia/add-palabra" element={<AgregarPalabra/>}/>
              <Route path="/html/trivia/perfil" element={<h1>Perfil</h1>}/>
            </Route>
            <Route path="*" element={<h1>Pagina no encontrada.</h1>}/>
          </Routes>
        </BrowserRouter>
      </PalabrasProvider>
    </AuthProvider>
  )
}

export default App;