import React from 'react';
import './App.css';
import HomePage from "./Pages/HomePage/HomePage.Component"
import {Route, Switch} from "react-router-dom"

const Hats = () => 
  (<div>
   <h1>Hats</h1>
  </div>
 )



export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/shop/hats" component={Hats}/>
      </Switch>
    </div>
  )
}
