import React, { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [state, setstate] = useState({
    company_mail: "",
    company_name: "",
    password: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post("/signup", state);
      alert("Dtata added ", result.data.message);
    } catch (error) {
      alert("Error ");
    }

    console.log(state);
  };

  const inputHandler = (e) => {
    setstate((preval) => ({
      ...preval,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="text-center mt-4">
      <form
        class="container-fluid w-25 text-start border rounded"
        onSubmit={submitHandler}
      >
        <h1 className="text-center">SignUp</h1>
        <label htmlFor="#">Name</label>
        <input
          type="text"
          name="company_name"
          class="form-control"
          placeholder="Company Name"
          onInput={inputHandler}
        />

        <label htmlFor="#">Email</label>
        <input
          type="text"
          name="company_mail"
          class="form-control"
          placeholder="Username"
          onInput={inputHandler}
        />

        <label htmlFor="#">Password</label>
        <input
          type="password"
          name="password"
          class="form-control"
          placeholder="Password"
          onInput={inputHandler}
        />
        <button class="btn btn-outline-success my-2" type="submit">
          SignUp
        </button>
      </form>
    </div>
  );
}
