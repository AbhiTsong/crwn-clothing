import React from 'react';
import './App.css';
import HomePage from "./Pages/HomePage/HomePage.Component"
import {Route, Switch, Redirect} from "react-router-dom"
import ShopPage from "./Pages/ShopPage/ShopComponent";
import HeaderComponent from "./Components/Header/HeaderComponent";
import SignInAndSignUpComponent from "./Pages/SignInAndSignUp/SignInAndSignUpComponent";
import {auth, createUserProfileDoc} from "./FireBase/FireBaseUtils";
import {connect} from "react-redux";
import {setCurrentUser} from "./Redux/users/userAction";
import checkOutPage from "./Pages/CheckOutPage/checkOutPage"
import {createStructuredSelector} from "reselect"
import {currentUserState} from "./Redux/users/userSelector"

class App extends React.Component {
 
  unsubscribeFromAuth = null;

  componentDidMount(){
    const {setU} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDoc(userAuth);

        userRef.onSnapshot(snapShot => {
          setU({id: snapShot.id,
              ...snapShot.data()
            });
        });
      }
      setU(userAuth)
    })
  }
  
  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render(){ 
    return (
      <div>
      <HeaderComponent/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route  path="/shop" component={ShopPage}/>
        <Route  path="/checkout" component={checkOutPage}/>
        <Route exact path="/signIn" 
        render={() => this.props.currentUser 
        ? (<Redirect to="/"/>) 
        : (<SignInAndSignUpComponent/>)}/>
      </Switch>
    </div>
   )
  }
}

const mapDispatchToProps = dispatch => ({
  setU: user => dispatch(setCurrentUser(user))
})

const mapStateToProps = createStructuredSelector({
  currentUser: currentUserState
})

export default connect(mapStateToProps, mapDispatchToProps)(App);