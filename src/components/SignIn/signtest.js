import { useMutation, useQueryClient } from '@tanstack/react-query';
import { NavLink } from 'react-router-dom';
import { PRODUCTS_QUERY_KEY } from '../Home/Home';
// import { useEffect, useState } from 'react';
// import { PRODUCTS_QUERY_KEY } from '../Home/Home';


const SignIn = ({setToken}) => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

// const getDataUser = async (event) => {
//     event.preventDefault();
//     const email = event.target.email.value;
//     const password = event.target.password.value;
//         const response = await fetch(`https://api.react-learning.ru/signin`, {
//             method:"POST",
//             headers: { 'Content-Type': 'application/json'},
//             body: JSON.stringify(
//                 {
//                     email,
//                     password,
//                 }
//             ),
//         });
//         const data = await response.json();
//         const token = data.token;
//         localStorage.setItem('token', JSON.stringify(token));
//         setToken(token);
//     }; 
const queryClient = useQueryClient();
const getDataUser = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
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
         
         {/* <form onSubmit={getDataUser} id='form' > */}
               <form onSubmit={handleSubmit} id='form' >
         <h1>Please Log In</h1>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input 
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                type="email" 
                className="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                name="email"/>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input 
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
                type="password" 
                className="form-control" 
                id="exampleInputPassword1"
                name="password" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            {/* <NavLink to="/signup" >Зарегистрироваться</NavLink> */}
        </form>
        </div>
        </>
    )
}

export {
    SignIn,
}

    //  const response = await fetch(`https://api.react-learning.ru/signin`, {
    //         method:"POST",
    //         headers: { 'Content-Type': 'application/json'},
    //         body: JSON.stringify(formData),
    //     })
    //     .then(response => alert("Сообщение отправлено"))
    //     .catch(error => console.error(error))
    //     ;


// const getDataUser = async (event) => {
//     event.preventDefault();

//     if (document.getElementById('form')) {
//         const form = document.getElementById('form');
//             let formData = new FormData(this);
//             formData = Object.fromEntries(formData);

//                 ajaxSend(formData)
//                     .then((response) => {
//                         console.log(response);
//                     })
//                     .catch((err) => console.error(err));
       
//     }
   
    // const params = new FormData(form);
    // params.set('email', event.target.email.value);
    // params.set('password', event.target.password.value);
    // console.log(params.get('email'));
    
   
    //     const data = await response.json();
    //     const token = data.token;
    //     localStorage.setItem('token', JSON.stringify(token));
    //     setToken(token);
    // };