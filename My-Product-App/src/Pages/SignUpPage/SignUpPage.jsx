import React from "react";
import './SignUpPage.css';
import Banner from '../../Components/FrontPageComponent/Banner';
import SignUpForm from "../../Components/FrontPageComponent/Sign-up";

const SignUpPage = () => {
  return (
    <div className="container">
      <Banner />
      <SignUpForm />
    </div>
  )
}

export default SignUpPage;