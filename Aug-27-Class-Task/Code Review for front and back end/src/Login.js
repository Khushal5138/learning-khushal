// import { useState } from "react";
// import { useParams } from "react-router-dom";
// import App from "./App";


// function Login(props)
// {
//     let params=useParams();
//     // let [log,setLog] = useState(true);
//     console.log(params);
//     function doLogin()
//     {
//         alert("I am able to login now");
//         // setLog(false);
//     }
//     function greet()
//     {
//       alert("You can login ! We hope you have a pleasant experience!");
//     }
//     return(
//         <div className="Login">
//             <button onClick={props.greeting}>Greet</button>
//             <h2>Login URL= {props.log_url}</h2>
//             <h1>Login Attempts = {props.login_att}</h1>
//             <h1>Title = {params.title}</h1>
//             <h1>Token = {params.token}</h1>
//             <input type="text" name="username"/>
//             <input type="password" name="password"/>
//             <button onClick={doLogin}>Login</button>
//         </div>
//     );
// }
// export default Login;

import React from 'react';

const Login = ({ onLogin }) => {
  return (
        <div className="Login">
            <h1>Login In Now to Access the Menu!</h1>
            <input type="text" name="username"/>
            <input type="password" name="password"/><br/>
            <button onClick={onLogin}>Login</button>
        </div>
    );
};

export default Login;
