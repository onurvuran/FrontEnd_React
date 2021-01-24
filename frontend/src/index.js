import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './bootstrap.scss';
import reportWebVitals from './reportWebVitals';
//import UserSinupPage from './pages/UserSinupPage';
//import LoginPage from './pages/LoginPage';
import App from './App';
import './i18n';
//import Languageselector  from './components/Languageselector';

ReactDOM.render(
<div> 
  <App/>

</div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
