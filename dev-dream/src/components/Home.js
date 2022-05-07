import { useAuth } from "../context/authContext";

const Home = () => {
  const { user, logOut } = useAuth();

  const handleLogout = async () => {
    await logOut();
  };

  return (
    <div>
      <h1>Welcome: {user.email}</h1>
      <p>Home</p>
      <button onClick={handleLogout}>LogOut</button>
    </div>
  );
};

export default Home;
