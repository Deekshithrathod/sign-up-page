import React, { useState } from "react";
import Title from "./Title";
import Thankyou from "./Thankyou";

const SignUp = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
  });
  const [isValidEmail, setIsValidEmail] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // validate the email
    if (pattern.test(formData.email)) {
      setIsValidEmail(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsClicked((prevState) => !prevState);
    const baseURL = "https://sign-up-page-backend.onrender.com";
    const url = `${baseURL}/submit/notion`;

    const data = { email: formData.email };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((resData) => {
        // setIsClicked((prevState) => !prevState);
        console.log(resData);
      })
      .catch((error) => console.error(error));
  };
  return !isClicked ? (
    <>
      <div className="signUp">
        <Title />
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="jane.doe@mail.com"
            onChange={handleChange}
            name="email"
          />
          <div className="emailValidation">{isValidEmail ? "✅" : "❌"}</div>
          <button disabled={!isValidEmail || isClicked}>Submit</button>
        </form>
      </div>
    </>
  ) : (
    <>
      {/* <Confetti className="confetti" /> */}
      <Thankyou />
    </>
  );
};

export default SignUp;
