import "./App.css";
import { Routes, Route } from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Topbar />
      <Home/>
    </div>
  );
}

export default App;
