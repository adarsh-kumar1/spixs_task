import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const [state, setstate] = useState({
    company_mail: "",
    password: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/login", state);
      alert("Login Successfully ");
    } catch (error) {
      alert("Email or Password is wrong !! ");
    }
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
        <h1 className="text-center">Login</h1>
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
          Login
        </button>
      </form>
    </div>
  );
}
