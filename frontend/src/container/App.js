
import React from 'react';
import UserSingupPage from '../pages/UserSinupPage';
import  LoginPage  from "../pages/LoginPage";
import LanguageSelector from '../components/Languageselector';
import HomePage from '../pages/HomePage';
import UserPage from '../pages/UserPage';
import { HashRouter as Router,Route,Redirect,Switch } from "react-router-dom";
import Topbar from '../components/Topbar';

class App extends React.Component {

  state={
    isLoggedIn: false,
    username: undefined
};

onLoginSuccess = (username)=>{
  this.setState({
    username,
    isLoggedIn:true
  })
}
 onLogoutSuccess=()=>{
   this.setState({
     isLoggedIn:false,
     username:undefined
   })

 }


  render(){
    const {isLoggedIn,username}= this.state;
  return (
    <div >

      <Router>

        <Topbar username={username} isLoggedIn={isLoggedIn} onLogoutSuccess={this.onLogoutSuccess}/>
      <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path="/login" component={  (props)=> {
        return <LoginPage {...props} onLoginSucces={this.onLoginSuccess} />;
        
      }}
      />
      <Route path="/singup" component={UserSingupPage}/>
      <Route path="/user/:username" component={UserPage}/>
      <Redirect to="/" />
      </Switch>

       </Router>

      <LanguageSelector/>
     
    </div>
  );
}
}

export default App;
