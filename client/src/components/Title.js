import React from "react";
import { RoughNotation } from "react-rough-notation";

const Title = () => {
  return (
    <h2 className="title">
      Join the Tribe,
      <br />
      No{" "}
      <RoughNotation
        type="underline"
        show={true}
        color="#9EA8FF"
        strokeWidth={4}
        iterations={3}
        animationDuration={1000}
      >
        distraction
      </RoughNotation>
      <br />
      Only &nbsp;&nbsp;{" "}
      <RoughNotation
        type="circle"
        show={true}
        color="#FF6666"
        strokeWidth={8}
        padding={25}
        animationDuration={2000}
      >
        Focus
      </RoughNotation>
      <br />
      Sign-up for Wait-List{" "}
    </h2>
  );
};

export default Title;
