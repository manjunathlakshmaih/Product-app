import React from "react";
import { useForm } from "react-hook-form";

const SignUpForm = () => {
  const { register, handleSubmit, formState: {errors}} = useForm();

  const onSubmit = (data) => {
    console.log("data:", data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("Username",{required: "Username is required"})}/>
      {errors.Username && <p>{errors.Username.message}</p>}
      <input {...register("email", { required: "Email is required" })} />
      {errors.email && <p>{errors.email.message}</p>}
      <button type="submit">Sign-up</button>
    </form>
  )
}

export default SignUpForm;