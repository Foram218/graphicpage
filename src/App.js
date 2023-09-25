import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GraphicDesign from "./components/GraphicDesign";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={GraphicDesign} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
