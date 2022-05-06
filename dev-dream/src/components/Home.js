import { useAuth } from "../context/authContext";

const Home = () => {
  const { user } = useAuth();
  return (
    <div>
      <h1>Welcome: {user}</h1>Home
    </div>
  );
};

export default Home;
