import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState();

  const { signUp } = useAuth();
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError();
    try {
      await signUp(user.email, user.password);
      navigate("/");
    } catch (error) {
      /* Manejo de errores desde firebase, se manejan solo 2, averiguar por más */
      if (error.code === "auth/invalid-email") {
        setError("Correo inválido");
      } else if (error.code === "auth/weak-password") {
        setError("Contraseña demasiado corta (6 dígitos mínimo)");
      } else if (error.code === "auth/internal-error") {
        setError("Campo de contraseña vacío (6 dígitos mínimo)");
      } else if (error.code === "auth/email-already-in-use") {
        setError("Ese email está en uso, prueba con otro");
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

        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
