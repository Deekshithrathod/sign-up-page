// import Confetti from "react-confetti/dist/types/Confetti";
import "./App.css";
import { Navbar } from "./components/Navbar";
import SignUp from "./components/SignUp";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <SignUp />
      </div>
    </>
  );
}

export default App;
