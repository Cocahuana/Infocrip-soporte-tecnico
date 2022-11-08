import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./Pages/Home/Home";
import Navigation from "./components/Navigation/Navigation";
function App () {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={ <Home /> }>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
