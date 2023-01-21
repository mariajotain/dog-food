// import { useState } from 'react';

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PRODUCTS_QUERY_KEY } from "../Home/Home";

const SignUp = ({setToken}) => {
const queryClient = useQueryClient();
// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');
// const [group, setGroup] = useState('');
       
// async function getDataUser(event) {
//     event.preventDefault();
//     const response = await fetch(`https://api.react-learning.ru/signup`, {
//         method:"POST",
//         headers: { 'Content-Type': 'application/json'},
//         body: JSON.stringify(
//             {
//                  email,
//                  group,
//                  password,
//             }
//          ),
//      });
//     const data = await response.json();
//     // перенаправить на страницу входа после регестрации
//     localStorage.setItem('token', JSON.stringify(data.token));
//     const token = data.token;
//      return token;
//         }

   
        const getDataUser = async (event) => {
            event.preventDefault();
            const email = event.target.email.value;
            const password = event.target.password.value;
            const group = event.target.group.value;
                const response = await fetch(`https://api.react-learning.ru/signup`, {
                    method:"POST",
                    headers: { 'Content-Type': 'application/json'},
                    body: JSON.stringify(
                        {
                            email,
                            group,
                            password,
                        }
                    ),
                });
                const data = await response.json();
                const token = data.token;
                return token;
            }; 

            const mutation = useMutation(
                (event) => getDataUser(event), {
                onSuccess: (token) => {
                    queryClient.invalidateQueries({ queryKey: PRODUCTS_QUERY_KEY });
                    localStorage.setItem('token', JSON.stringify(token));
                    setToken(token);
                },
              });


        const handleSubmit = (event) => {
            event.preventDefault();
            mutation.mutate(event);
        };

    return (
        <>
        <div className="container d-flex justify-content-center py-5">
            <form onSubmit={handleSubmit} >
            <h1>Please Sign Up</h1>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input 
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                type="email" 
                className="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Group</label>
                <input 
                type="text" 
                className="form-control"
                 placeholder="sm8" 
                 id="exampleInputEmail1" 
                //  value={group}
                // onChange={(e) => setGroup(e.target.value)}
                 aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input 
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
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
    SignUp
}