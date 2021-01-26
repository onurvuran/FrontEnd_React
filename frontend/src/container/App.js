
import React from 'react';
import UserSingupPage from '../pages/UserSinupPage';
import  LoginPage  from "../pages/LoginPage";
import LanguageSelector from '../components/Languageselector';
import HomePage from '../pages/HomePage';
import UserPage from '../pages/UserPage';
import { HashRouter as Router,Route,Redirect,Switch } from "react-router-dom";
import Topbar from '../components/Topbar';
function App() {
  return (
    <div >
      
      <Router>
        <Topbar/>
      <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path="/login" component={LoginPage}/>
      <Route path="/singup" component={UserSingupPage}/>
      <Route path="/user/:username" component={UserPage}/>
      <Redirect to="/" />
      </Switch>
       </Router>

      <LanguageSelector/>
     
    </div>
  );
}

export default App;
