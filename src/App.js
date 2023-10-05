import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GraphicDesign from "./components/GraphicDesign";
import Easi from "./components/screens/Easi";
import Enrollin from "./components/screens/Enrollin";
import Nuntucket from "./components/screens/Nuntucket";
import Sameep from "./components/screens/Sameep";
import OpenAI from "./components/screens/OpenAI";
import ChatGPT from "./components/screens/ChatGPT";
import KeepMoving from "./components/screens/KeepMoving";
import NantucketWeb from "./components/screens/NantucketWeb";
import CrushApp from "./components/screens/CrushApp";
import jPad from "./components/screens/jPad";
import jPadAdminPanel from "./components/screens/jPadAdminPanel";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={GraphicDesign} />
          <Route path="/Easi" Component={Easi} />
          <Route path="/Enrollin" Component={Enrollin} />
          <Route path="/Nuntucket" Component={Nuntucket} />
          <Route path="/Sameep" Component={Sameep} />
          <Route path="/OpenAI" Component={OpenAI} />
          <Route path="/CrushApp" Component={CrushApp} />
          <Route path="/ChatGPT" Component={ChatGPT} />
          <Route path="/KeepMoving" Component={KeepMoving} />
          <Route path="/NantucketWeb" Component={NantucketWeb} />
          <Route path="/jPad" Component={jPad} />
          <Route path="/jPadAdminPanel" Component={jPadAdminPanel} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
