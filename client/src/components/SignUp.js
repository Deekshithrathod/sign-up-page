import React, { useState } from "react";

const SignUp = () => {
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
    // console.log(formData);
    const url = "http://localhost:5001/submit";
    const data = { email: formData.email };
    console.log(data);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((resData) => {
        console.log(resData);
      })
      .catch((error) => {});
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

        <button>Join</button>
      </form>
    </div>
  );
};

export default SignUp;
