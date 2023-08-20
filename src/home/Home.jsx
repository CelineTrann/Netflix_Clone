import Navbar from "../components/navbar/NavBar";
import "./Home.scss"

export default function App() {
  return (
    <div className="home">
      <Navbar />
      <img
        width="100%"
        src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrbg&dpr=2&w=500"
        alt=""
      />
    </div>
  );
}