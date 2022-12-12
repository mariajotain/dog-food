import { useState } from 'react'
import { UserPage } from '../UserPage/UserPage';


const SignIn = ({setToken}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   
async function getDataUser(event) {
    event.preventDefault();
        const response = await fetch(`https://api.react-learning.ru/signin`, {
            method:"POST",
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(
                {
                    email,
                    password,
                }
            ),
        });
        const data = await response.json();
        const token = data.token;
        localStorage.setItem('token', JSON.stringify(token));
        setToken(token);
        // setEmail("");
        // setPassword("");
    }
    
    return (
        <>
        <div className="container d-flex justify-content-center py-5">
         
         <form onSubmit={getDataUser} >
         <h1>Please Log In</h1>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email" 
                className="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password" 
                className="form-control" 
                id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
        </>
    )
}

export {
    SignIn,
}

