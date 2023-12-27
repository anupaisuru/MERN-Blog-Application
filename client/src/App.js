import "./App.css";
import { Routes, Route } from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import Single from "./pages/single/Single";

function App() {
  return (
    <div className="App">
      <Topbar />
      <Single/>
    </div>
  );
}

export default App;
