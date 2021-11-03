import React from 'react';
import { Route, Redirect } from "react-router-dom"
import Cookies from "universal-cookie";
const cookies = new Cookies();

const Protected = ({ component: Component, ...rest}) => {
    return (
     <Route 
     {...rest}
     render={(props) => {
         const token = cookies.get("TOKEN");
         
         if(token){
             return <Component {...props}/>;
         }else{
             return (
                 <Redirect 
                 to= {{
                     pathname: "/",
                     state: {
                         from: props.location,
                     }
                 }}
                 />
             )
         }
     }}
     />   );
};

export default Protected;
