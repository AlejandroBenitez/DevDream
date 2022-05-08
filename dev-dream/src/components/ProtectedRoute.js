import { useAuth } from "../context/authContext";
import { Navigate } from "react-router-dom";
import MyNavbar from "./MyNavbar";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <h1>Loading ...</h1>;
  if (!user) return <Navigate to="/login" />;

  return (
    <>
      <MyNavbar>{children}</MyNavbar>
    </>
  );
};

export default ProtectedRoute;
