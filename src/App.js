import React from 'react';
import './App.css';
import HomePage from "./Pages/HomePage/HomePage.Component"
import {Route, Switch} from "react-router-dom"
import ShopPage from "./Pages/ShopPage/ShopComponent";
import HeaderComponent from "./Components/Header/HeaderComponent";
import SignInAndSignUpComponent from "./Pages/SignInAndSignUp/SignInAndSignUpComponent";
import {auth} from "./FireBase/FireBaseUtils"


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
       currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      })
      console.log(user)
    })
  }
  
  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render(){ 
    return (
      <div>
      <HeaderComponent currentUser={this.state.currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route  path="/shop" component={ShopPage}/>
        <Route path="/signIn" component={SignInAndSignUpComponent}/>
      </Switch>
    </div>
   )
  }
}

export default App;