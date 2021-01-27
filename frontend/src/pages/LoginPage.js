import React, { Component } from 'react';
import Input from '../components/Input';
import { withTranslation } from 'react-i18next';
import { login } from '../api/apiCalls';

import ButtonWithProgress from '../components/ButtonWithProgress';
import { withApiProgress } from '../shared/ApiProgress';

class LoginPage extends Component {
    state ={
        username : null,
        password: null,
        error:null,
        pendingApiCall:false
    }
 
    onChange = evet =>{
        const {name,value} = evet.target;
        this.setState({
            [name]:value,
            error:null
        })
    }
    onClickLogin = async event =>{
        event.preventDefault();
        const{ username,password } = this.state;
        const { onLoginSuccess } =this.props;
        const creds={
            username,
            password
        };
        const {push} = this.props.history;

        this.setState({
            error:null
        })
        try{
             await login(creds);
            push('/');
            onLoginSuccess(username);
        }catch (apiError){
            this.setState({
                error:apiError.response.data.message
            });


        }
        
      
    };
    render() {
        const {t,pendingApiCall}= this.props;
        const {username,password,error} = this.state;
        const buttonEnabled=username && password
        return (
            <div className="container">
                <h1 className="text-center">{t('LOGIN')}</h1>
                <form>
                <Input label={t('Username')} name="username" onChange={this.onChange}/>
                <Input label={t('Password')} name="password" type="password" onChange={this.onChange}/>
                {error &&  <div className="alert alert-danger" >
                     {error}
                  </div>}
                <div className="text-center">
                <ButtonWithProgress 
                onClick={this.onClickLogin}
                disabled={!buttonEnabled || pendingApiCall}
                    pendingApiCall ={pendingApiCall}
                text={t('LOGIN')} 
                   />
                </div>
                </form>
            </div>
        );
    }
}
const LoginPageWithTranslation = withTranslation()(LoginPage);
export default withApiProgress(LoginPageWithTranslation,'/api/1.0/auth');
