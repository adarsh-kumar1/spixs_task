import "./App.css";
import Navs from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navs />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/service" element={<Header />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
