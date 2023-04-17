import React from "react";
import { RoughNotation } from "react-rough-notation";
import Confetti from "react-confetti";

const Thankyou = () => {
  return (
    <div className="thankyou">
      <Confetti className="confetti" />
      <h1 className="title">
        <RoughNotation
          type="underline"
          show={true}
          color="#9EA8FF"
          strokeWidth={1}
          iterations={2}
          animationDuration={1000}
        >
          Welcome to the <br />
        </RoughNotation>
        <RoughNotation
          type="circle"
          show={true}
          color="red"
          strokeWidth={8}
          iterations={2}
          animationDuration={1000}
          padding={20}
        >
          tribe
        </RoughNotation>
      </h1>
    </div>
  );
};

export default Thankyou;
