import React from "react";
import { useForm } from "react-hook-form";
import SocialMediaIcons from "./SocialMedia";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Create an Account</h1>
      <SocialMediaIcons />
      <p>or use your email for registration</p>
      <input
        {...register("Name", { required: "Name is required" })}
        placeholder="Name"
        type="text"
      />
      {errors.Username && <p>{errors.Username.message}</p>}
      <input
        {...register("email", { required: "Email is required" })}
        placeholder="Name"
        type="email"
      />
      {errors.email && <p>{errors.email.message}</p>}
      <input
        {...register("password", { required: "password is required" })}
        placeholder="Password"
        type="password"
      />
      {errors.password && <p>{errors.password.message}</p>}
      <button type="submit">Sign-up</button>
    </form>
  );
};

export default SignUpForm;
