import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import { NETFLIX_BACKGROUNG_IMAGE_URL } from "../utils/constants";
import { validateData } from "../utils/validateForm";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const [errorMessage, setErrorMessage] = useState(null);
  const handleButtonClick = () => {
    const message = isSignInForm
      ? validateData(email.current.value, password.current.value)
      : validateData(
          email.current.value,
          password.current.value,
          fullName.current.value
        );
    setErrorMessage(message);
  };

  return (
    <>
      <Header />
      <div className="absolute">
        <img src={NETFLIX_BACKGROUNG_IMAGE_URL} alt="Netflix Background" />
      </div>
      <form
        className="absolute p-12 bg-black w-3/12 my-36 mx-auto left-0 right-0 text-white bg-opacity-80"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex flex-col">
          <h1 className="text-3xl my-4 font-bold">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={fullName}
              autoComplete="off"
              type="text"
              placeholder="Full Name"
              className="my-2 p-2 bg-gray-900 border border-gray-500"
            />
          )}
          <input
            ref={email}
            type="email"
            placeholder="Email"
            className="my-2 p-2 bg-gray-900 border border-gray-500"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="my-2 p-2 bg-gray-900 border border-gray-500"
          />
          <p className="text-red-700 text-lg font-bold">{errorMessage}</p>
          <button
            className="bg-red-600 p-3 my-8 rounded-md"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <div>
            <span className="my-2">
              {isSignInForm ? "New to Netflix?" : "Existing user?"}{" "}
            </span>
            <span
              className="my-2 font-semibold cursor-pointer hover:underline"
              onClick={toggleSignInForm}
            >
              {isSignInForm ? "Sign up now." : "Sign in now."}
            </span>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;