import Featured from "../components/featured/Featured";
import Navbar from "../components/navbar/NavBar";
import "./Home.scss"

export default function App() {
  return (
    <div className="home">
      <Navbar />
      <Featured />
    </div>
  );
}