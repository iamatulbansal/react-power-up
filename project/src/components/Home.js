import { useOnline } from "../hooks";
const Home = () => {
  const isOnline = useOnline();
  return (
    <div>
      <h1>Home</h1>
      <h1>{isOnline ? "🟢" : "🔴"}</h1>
    </div>
  );
};
export default Home;
