import { useMutation } from '@tanstack/react-query';
import {  useState } from 'react';
// import { useNavigate } from 'react-router-dom';

export const SignIn = ({setToken}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const navigate = useNavigate();
    const getDataUser = async (user) => {
        const response = await fetch(`https://api.react-learning.ru/signin`, {
            method:"POST",
            body: JSON.stringify(
                {
                    email: user.email,
                    password: user.password
                }
            ),
            headers: { 'Content-Type': 'application/json'}
        });
        const data = await response.json();
        const token = data.token;
        localStorage.setItem('token', JSON.stringify(token));
        return token;
    }; 
    const { mutate, isError, isLoading } = useMutation(getDataUser, {
        onSuccess: (token) => {
            setToken(token);
        },
      });

      if (isLoading) {
        return (<p>Loading...</p>)
      }
      if (isError) {
        return console.log('Error')
      }
    return (
        <>
        <div className="container d-flex justify-content-center py-5">
               <form onSubmit={(e)=> e.preventDefault()} id='form' >
         <h1>Please Log In</h1>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email" 
                className="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                name="email"/>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password" 
                className="form-control" 
                id="exampleInputPassword1"
                name="password" />
            </div>
            <button onClick={()=>mutate({email: email, password: password})} type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
        </>
    )
}

   