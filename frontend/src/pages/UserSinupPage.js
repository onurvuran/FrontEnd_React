import React from 'react';
import { singup } from '../api/apiCalls';
import Input from '../components/Input';
import { withTranslation } from 'react-i18next';
import  ButtonWithProgress from '../components/ButtonWithProgress';
import { withApiProgress } from '../shared/ApiProgress';




class UserSinupPage extends React.Component{
    state = {
        username:null,
        displayName:null,
        password:null,
        passwordRepeat:null,
        errors:{}
    };

    onChange = event =>{
        const { t }= this.props;
        const{name,value} = event.target;
        const errors = {...this.state.errors}
        errors[name] = undefined;
        if(name === 'password' || name === 'passwordRepeat'){

            if (name === 'password' && value !== this.state.passwordRepeat) {
                errors.passwordRepeat =t('Password mismatch');
            }else if (name === 'passwordRepeat' && value !== this.state.password) {
                errors.password=t('Password mismatch');
                
            }else{
                errors.passwordRepeat = undefined;
            }

        }

        this.setState({
            [name]:value,
            errors
        });
    };
    onClickSignup = async event => {
        event.preventDefault();
        const {username,displayName,password}= this.state;


        const body ={
            username,
            displayName,
            password
        };

       
        try{
            const response = await singup(body);
        }catch (error){
            if(error.response.data.validationErrors){
                this.setState({errors:error.response.data.validationErrors});
            }
           
        }

    };
   
   
    render(){
        const { errors} = this.state;
        const { displayName,username,password,passwordRepeat}= errors;
        const { pendingApiCall,t }= this.props;

        return(
            <div className="container ">
                <form>
                <h1 className="text-center">{t('SING UP')}</h1> 

                <Input name="username"label = {t('Username')} error={username} onChange={this.onChange}/>
                <Input name="displayName"label = {t('DisplayName')} error={displayName} onChange={this.onChange}/>
                <Input name="password" label={t('Password')} error={password} onChange={this.onChange}  type="password"/>
                <Input name="passwordRepeat" label={t('Password Repeat')} error={passwordRepeat} onChange={this.onChange}  type="password"/>
                <div className="text-center">
                <ButtonWithProgress  
                onClick={this.onClickSignup}
                disabled={this.state.pendingApiCall || passwordRepeat !== undefined}
                pendingApiCall={pendingApiCall}
                text={t('SING UP')}
                    />
                </div>
              
            </form>
            </div>
            
           
        );

    }
    
}
 const UserSingupPageWithApiProgress = withApiProgress(UserSinupPage,'/api/1.0/users');
 const UserSingupPageWithTranslation = withTranslation()(UserSingupPageWithApiProgress);

 export default  UserSingupPageWithTranslation;

