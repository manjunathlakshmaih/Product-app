import { useState } from "react";
import { useForm } from "react-hook-form";
import SocialMediaIcons from "./SocialMedia";
import Input from "../helpingcomponent/Input";
import "./Common.css";

const SignUpForm = () => {
  const [isSignup, setIsSignUp] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("data:", data);
    if (isSignup) {
      console.log("user Signed Up:", data);
    } else {
      console.log("user Signed In:", data);
    }
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
      <h1>{isSignup ? "Create an Account" : "Sign In"}</h1>
      <SocialMediaIcons />
      <p className="sign-up-options">or use your email{isSignup ? " for registration" : " Sign In"} </p>
      {isSignup && (
        <Input
          name="name"
          type="text"
          placeholder="Name"
          register={register}
          rules={{ required: "Name is required" }}
          error={errors.name}
        />
      )}
      <Input
          name="email"
          type="email"
          placeholder="Email"
          register={register}
          rules={{ required: "Email is required" }}
          error={errors.email}
        />
      <Input
          name="password"
          type="password"
          placeholder="Password"
          register={register}
          rules={{ required: "password is required" }}
          error={errors.password}
        />
      <button type="submit">{isSignup ? "Sign-up" : "Sign In"}</button>
      <p className="toggle-signup" onClick={() => setIsSignUp(!isSignup)}>
        {isSignup
          ? "Already have an account? Sign In"
          : "Don't have an account? Sign Up"}
      </p>
    </form>
  );
};

export default SignUpForm;
