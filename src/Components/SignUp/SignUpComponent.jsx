import React, { Component } from 'react'
import CustomButton from "../CustomButton/CustomButtonComponent";
import {auth, createUserProfileDoc} from "../../FireBase/FireBaseUtils";
import FormInput from "../FormInput/FormInputComponent"
import "./SignUpStyles.scss"

class SignUp extends Component {
 constructor(props) {
  super(props)
  this.state = {
    email: "", displayName: "", 
    password: "", confirmPassword: ""
  }
 }

 handleSubmit = async event => {
  event.preventDefault();
  const {email, displayName, password, confirmPassword} = this.state;
  
  if(password !== confirmPassword){
   alert("Your passwords dont match")
  }

  try{
    const {user} = await auth.createUserWithEmailAndPassword(email, password);
    await createUserProfileDoc(user, {displayName})
    this.setState({
     email: "", displayName: "", 
    password: "", confirmPassword: ""
    })
  }catch(error){
   console.error(error)
  }
 }
 
handleChange = event => {
 const {name, value} = event.target;
 this.setState({[name]: value})
}


 render() {
  const {email, displayName, password, confirmPassword} = this.state;
  return (
   <div className="sign-up">
    <h2 className="title">I dont have an account</h2>
    <span>Sign Up With Email & Password</span>
     <form onSubmit = {this.handleSubmit}>
      <FormInput
      name = "displayName"
      type = "text"
      value = {displayName}
      label = "Display Name"
      onChange ={this.handleChange}
      required
      />
      <FormInput
      name="email"
      type="email"
      value ={email}
      label= "Email"
      onChange={this.handleChange}
      required
      />
      <FormInput
      name="password"
      type="password"
      value ={password}
      label= "Password"
      onChange={this.handleChange}
      required
      />
      <FormInput
      name="confirmPassword"
      type="password"
      value ={confirmPassword}
      label= "Confirm Password"
      onChange={this.handleChange}
      required
      />
      <CustomButton type="submit">SIGN ME UP</CustomButton>
     </form>
   </div>
  )
 }
}

export default SignUp;