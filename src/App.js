import React from 'react';
import './App.css';
import HomePage from "./Pages/HomePage/HomePage.Component"
import {Route, Switch} from "react-router-dom"
import ShopPage from "./Pages/ShopPage/ShopComponent";
import HeaderComponent from "./Components/Header/HeaderComponent"


export default function App() {
  return (
    <div>
      <HeaderComponent/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route  path="/shop" component={ShopPage}/>
      </Switch>
    </div>
  )
}
