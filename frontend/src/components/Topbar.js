import React, { Component } from 'react';
import logo from '../assets/logo.jpg';
import { Link } from "react-router-dom";
import { withTranslation } from 'react-i18next';
export  class Topbar extends Component {
    render() {
        const {t} = this.props;
        return (
            
            <div className="shadow-sm  bg-light mb-2">
                <div><nav className="navbar navbar-light container navbar-expend">
            <Link className="navbar-brand" to="/">
                 <img src={logo} width="60"alt="Think logo"/>
                 
                 Think
                 </Link>
                 <ul className="navbar-nav ml-auto">
                     <li>
                         <Link className="nav_link" to="/login">
                         {t('Login')}
                         </Link>
                     </li>
                     <li>
                     <Link className="nav_link" to="/singup">
                         {t('Sing Up')}
                         </Link>
                     </li>
                 </ul>
                 </nav>
               </div>
   

            </div>
        )
    }
}
export default withTranslation()(Topbar);
