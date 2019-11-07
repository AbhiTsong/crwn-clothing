import React from 'react';
import './App.css';
import HomePage from "./Pages/HomePage/HomePage.Component"
import {Route, Switch} from "react-router-dom"
import ShopPage from "./Pages/ShopPage/ShopComponent";
import HeaderComponent from "./Components/Header/HeaderComponent";
import SignInAndSignUpComponent from "./Pages/SignInAndSignUp/SignInAndSignUpComponent";
import {auth, createUserProfileDoc} from "./FireBase/FireBaseUtils"



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
       currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDoc(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser:{
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      }
      this.setState({currentUser: userAuth})
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