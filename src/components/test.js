import { useMutation, useQueryClient } from '@tanstack/react-query';
// import { useState } from 'react';
import { PRODUCTS_QUERY_KEY } from '../Home/Home';


const SignIn = ({setToken}) => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

// const getDataUser = async (event) => {
//     event.preventDefault();
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


// const queryClient = useQueryClient();

//  const signInRequest = () => fetch(`https://api.react-learning.ru/signin`, {
//     method:"POST",
//     headers: { 'Content-Type': 'application/json'},
//     body: JSON.stringify(
//         {
//             email,
//             password,
//         }
//     ),
// }).then((res) => {return res.json();});

 const loginUserFn = async (form) => {
  
    const response = await fetch(`https://api.react-learning.ru/signin`, {
        method:"POST",
        body: {
            email:form.email,
            password:form.password,
        },
    });
    const data = await response.json();
    // const token = data.token;
    console.log(data);
  };
  const { mutateAsync } = useMutation((form) => loginUserFn(form), {
    onSuccess: () => {
     
    },
  });


// }).then((res) => {return res.json();});


// const { mutateAsync } = useMutation((formData) => {() => signInRequest(formData);}
      
//         // const response = fetch(`https://api.react-learning.ru/signin`, {
//         //     method:"POST",
//         //     body: formData,
//         // });
//         // const result = response.json();
//         // .then((res) => res.json()).then((resp)=>console.log(resp));
   
//     // }


       
//         // onSuccess: () => {
//         //  queryClient.invalidateQueries({ queryKey: PRODUCTS_QUERY_KEY });
//         // },
//      );
    
//       const userHandler = async (event) => {
//         event.preventDefault();
      
//         console.log( form.email , form.password);
//        await mutateAsync(form );
     
// //         // if(isSuccess) {
// //         //     const token = data.token;
// //         //     localStorage.setItem('token', JSON.stringify(data.token));
// //         //     setToken(token);
// //         // }
//       };
    //   if (isLoading) return ( <p>Loading..</p>)
 
    const mutation = useMutation({
        mutationFn: (newTodo) => {
          return axios.post('/todos', newTodo)
        },
      })
    return (
        <>
        
        <div className="container d-flex justify-content-center py-5">
         
         {/* <form onSubmit={getDataUser} > */}
            {/* <form onSubmit={userHandler} > */}
            <form onSubmit={userHandler} ></form>
            {() => {
              mutation.mutate({ id: new Date(), title: 'Do Laundry' })
            }}
              <form onSubmit={(event)=> 
            {  event.preventDefault();
                const form = new FormData();
                form.append('email', 'Вася')
                console.log( form.email);
                mutateAsync(form);
            }
            } >
         <h1>Please Log In</h1>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input 
                // value={email}
                    // value={event.target.value}
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
                // value=""
                // onChange={(e) => setPassword(e.target.value)}
                type="password" 
                className="form-control" 
                id="exampleInputPassword1"
                name="password" />
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



 