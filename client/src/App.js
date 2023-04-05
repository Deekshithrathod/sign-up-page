import "./App.css";
import SignUp from "./components/SignUp";
import { RoughNotation } from "react-rough-notation";

function App() {
  return (
    <div className="App">
      <h1 id="title">
        Join the{" "}
        <RoughNotation
          type="box"
          show={true}
          color="#BA90C6"
          strokeWidth={8}
          padding={10}
          animationDuration={2000}
        >
          Wait-List
        </RoughNotation>
      </h1>
      <SignUp />
    </div>
  );
}

export default App;
