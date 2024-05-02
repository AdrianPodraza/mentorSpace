import Wrapper from "./Pages/Wrapper";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Destination from "./Pages/Destination";
import Crew from "./Pages/Crew";
import Technology from "./Pages/Technology";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Wrapper />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/destination/:planetName?" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/crew/:crewName?" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/technology/:techName?" element={<Technology />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
