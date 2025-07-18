import React from "react";
import Banner from "../../Components/FrontPageComponent/Banner";
import SignUpForm from "../../Components/FrontPageComponent/Sign-up";
import "./SignUpPage.css";

const SignUpPage = () => {
  return (
    <div className="container">
      <Banner />
      <div className="green-bg">
        <button type="button">Sign Up</button>
      </div>
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
