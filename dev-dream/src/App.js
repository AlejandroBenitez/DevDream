import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import AuthProvider from "./context/authContext";

const App = () => {
  return (
    <div className="App">
      <h1>Welcome to DevDream!</h1>
      <div className="bg-slate-300 h-screen text-white flex">
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </AuthProvider>
      </div>
    </div>
  );
};

export default App;
