import { BrowserRouter, Routes, Route } from "react-router-dom";
import RadhaNaam from "./components/RadhaNaam";
import Home from "./components/RadhaCounter";
import Premanand from "./components/Premanand ";
import RadhaKrishna from "./components/Radha_krishna";
import Counter from "./components/Counter";
import Blog from "./components/Blog";

function App() {
  return (
    <BrowserRouter>
      <RadhaNaam />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/premanand" element={<Premanand />} />
        <Route path="/radha-krishna" element={<RadhaKrishna />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


 