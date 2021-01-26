import React, { Component } from 'react'
import axios from 'axios';


function getDisplayName(WrappedComponenet) {
    return WrappedComponenet.displayName || WrappedComponenet.name ||'Componenet';
}
export function withApiProgress(WrappedComponent,apiPath) {
    
    

return class  extends Component {
    static displayName = `ApiProgress(${getDisplayName(WrappedComponent)})`;
    // static displayName = 'ApiProgress('+getDisplayName(WrappedComponent)+')';
    state ={
        pendingApiCall:false
    }
    componentDidMount(){
        this.requestInterceptor = axios.interceptors.request.use(request=>{
            console.log('running request İnterceptor',apiPath);
            this.updateApiCallFor(request.url,true);
                return request;
            }
        );

        this.responseInterceptor = axios.interceptors.response.use(
            response => {
            this.updateApiCallFor(response.config.url,false);
            return response;   
        },
         error => {
            this.updateApiCallFor(error.config.url,false)
             throw error;
             }
             );
     }
     componentWillUnmount(){
        axios.interceptors.response.eject(this.responseInterceptor);
         axios.interceptors.request.eject(this.requestInterceptor);
        
     }

     updateApiCallFor =(url,inProgress)=>{
        if (url ===apiPath) {
            this.setState({pendingApiCall:inProgress});
            
        } 
     }

    render() {
        const {pendingApiCall} = this.state;
        return <WrappedComponent pendingApiCall={pendingApiCall} {...this.props}/>
    }
}
}