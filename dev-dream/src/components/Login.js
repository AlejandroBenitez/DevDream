import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState();

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError();
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      /* Manejo de errores desde firebase, se manejan solo 2, averiguar por más */
      if (error.code === "auth/wrong-password") {
        setError("Contraseña incorrecta");
      } else if (error.code === "auth/user-not-found") {
        setError("Email no registrado");
      } else if (error.code === "auth/internal-error") {
        setError("Error interno");
      } else {
        setError(
          `El error es desconocido, código: ${error.code} y mensaje: ${error.message}`
        );
      }
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}{" "}
      {/* <--- Un if que verifica si existe algo en el estado error, de ser así muestra etiqueta <p></p> */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="youremail@company.ltd"
          autoCorrect="off"
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="**********"
          id="password"
          autoCorrect="off"
          onChange={handleChange}
          required
        />

        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
