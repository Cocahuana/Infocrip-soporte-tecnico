import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useState } from "react";
import Home from "./Pages/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import { themeContext } from "./context/themeContext";
import { theme } from "./components/Theme/Theme";
function App () {
  const [myTheme, setMyTheme] = useState( theme )
  return (
    <themeContext.Provider value={ myTheme }>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={ <Home /> } />
        </Routes>
      </BrowserRouter>
    </themeContext.Provider>
  );
}

export default App;
