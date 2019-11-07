import React, { Component } from 'react';
import FormInput from '../FormInput/FormInputComponent';
import "./SignInStyles.scss";
import CustomButton from "../CustomButton/CustomButtonComponent"
import {auth, signInWithGoogle} from "../../FireBase/FireBaseUtils"

class SignInComponent extends Component {
 constructor(props) {
  super(props)
  this.state = {
    email: "", password: ""
  }
 }
 
 handleSubmit = async event => {
  event.preventDefault();
  const {email, password} = this.state;
  try{
    await auth.signInWithEmailAndPassword(email, password)
    this.setState({
      email:"", password:""
    })
  }catch(error){
    console.log(error.message)
  }
  }
  
  handleChange =  event => {  
    const {name, value} = event.target;
  this.setState({[name]: value})
 }

 render() {
  return (
   <div className="sign-in">
    <h1>I already Have An Account</h1>
    <span>Sign In With Email And Password</span>
    <form onSubmit={this.handleSubmit}>
        <FormInput 
         type="email" 
         value={this.state.email} 
         name="email" 
         label="Email"
         onChange={this.handleChange} 
         required
        />
        <FormInput 
         type="password" 
         value={this.state.password} 
         name="password"
         label="Password" 
         onChange={this.handleChange} 
         required
        />
        <div className="button">
          <CustomButton type="submit">SIGN IN</CustomButton>
          <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
          {" "}SIGN IN WITH GOOGLE{" "}</CustomButton>
        </div>

    </form>
   </div>
  )
 }
}

export default SignInComponent;