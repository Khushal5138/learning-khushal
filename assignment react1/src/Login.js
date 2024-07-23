import { useParams } from "react-router-dom";

function Login()
{

    let params=useParams();
    console.log(params);
    function doLogin()
    {
        alert("I am able to login now");
    }
    return(
        <div className="Login">
            <h1>Title = {params.title}</h1>
            <h1>Token = {params.token}</h1>
            <input type="text" name="username"/>
            <input type="password" name="password"/>
            <button onClick={doLogin}>Login</button>
        </div>
    );
}
export default Login;