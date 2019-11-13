import React from 'react'
import SignInComponent from "../../Components/SignIn/SignInComponent"
import SignUp from "../../Components/SignUp/SignUpComponent"
import "./SignInAndSignUpStyles.scss"

export default function SignInAndSignUpComponent() {
 return (
  <div className="sign-in-and-sign-up">
    <SignInComponent/>
    <SignUp/>
  </div>
 )
}
