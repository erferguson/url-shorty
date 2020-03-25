import React from "react";
import "./App.css";
import { Switch, Route } from 'react-router-dom'

import Navigation from "./components/NavComponents/Navigation";
import Footer from './components/Footer/Footer'

import Home from './components/Home/Home'
import Features from './components/Features/Features'
import Pricing from './components/Pricing/Pricing'
import Resources from './components/Resources/Resources'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'

function App() {
  return (
    <div className="App">
      <Navigation />
        <Switch>
          <Route path="/features"><Features/></Route>
          <Route path="/pricing"><Pricing /></Route>
          <Route path="/resources"><Resources /></Route>
          <Route path="/login"><Login /></Route>
          <Route path="/sign-up"><SignUp /></Route>
          <Route exact path="/"><Home/></Route>
        </Switch>
      <Footer /> 
    </div>
  );
}

export default App;
