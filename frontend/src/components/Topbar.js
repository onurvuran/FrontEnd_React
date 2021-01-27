import React, { Component } from 'react';
import logo from '../assets/logo.jpg';
import { Link } from "react-router-dom";
import { withTranslation } from 'react-i18next';

export  class Topbar extends Component {
   
    render() {
        const {t,isLoggedIn,username,onLogoutSuccess} =this.props;

        let links=(
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
        );
        if (isLoggedIn) {
            links =(
                <ul className="navbar-nav ml-auto">
                    <li >
                        <Link className="nav-link" to={`/user/${username}`}>
                            {username}
                            </Link>
                        
                    </li>
                    <li className="nav-link" onClick={onLogoutSuccess} style={{cursor:'pointer'}}>
                       {t('Logout')}
                    </li>
                    </ul>
            )
        }

        return (
            
            <div className="shadow-sm  bg-light mb-2">
                <div><nav className="navbar navbar-light container navbar-expend">
            <Link className="navbar-brand" to="/">
                 <img src={logo} width="60"alt="Think logo"/>
                 
                 Think
                 </Link>
                {links}
                 </nav>
               </div>
   

            </div>
        )
    }
}
export default withTranslation()(Topbar);
