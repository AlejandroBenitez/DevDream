import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";

const App = () => {
  return (
    <div className="App">
      <h1>Welcome to DevDream!</h1>
      <div className="bg-slate-300 h-screen text-white flex">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
