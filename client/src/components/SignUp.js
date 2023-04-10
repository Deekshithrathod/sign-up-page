import React, { useState } from "react";

const SignUp = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
  });
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsClicked((prevState) => !prevState);
    const baseURL = "https://sign-up-page-backend.onrender.com";
    // const baseURL = "http://localhost";
    const port = "5002";
    const url = `${baseURL}:${port}/submit/notion`;

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
        setIsClicked((prevState) => !prevState);
        console.log(resData);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="jane.doe@mail.com"
          onChange={handleChange}
          name="email"
        />

        <button disabled={isClicked}>Join</button>
      </form>
    </div>
  );
};

export default SignUp;
