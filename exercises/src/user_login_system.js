import React,{useState} from 'react';

function LoginForm(){

    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [message,setMessage]=useState("");

    function handleUsername(e){
        setUsername(e.target.value);
    };
    function handlePassword(e){
        setPassword(e.target.value);
    };
    function handleClick(){
        if(username === 'sonu' && password === "sonu@123"){
            setMessage(`Welcome ${username} !!`);
        }
        else{
            setMessage('Incorrect password or username.Please try again')
        }
    };

    return(
        <div className='login-form'>
            <h1>Login Form</h1>
            <input type="text" placeholder="username" value={username} onChange={handleUsername} className='input'></input>
            <br/>
            <br/>
            <input type="text" placeholder="password" value={password} onChange={handlePassword} className='input'></input>
            <br/>
            <br/>
            <button onClick={handleClick} className='button'>Login</button>
            <br/>
            <p className='message'>{message}</p>
        </div>
    );

}
export default LoginForm