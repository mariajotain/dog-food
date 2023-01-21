import { useState } from 'react';
import { useMutation, useQueryClient} from "@tanstack/react-query";
import { useNavigate } from 'react-router-dom';
import { USER_QUERY_KEY } from '../UserPage/UserPage';

export const SignUp = ({setToken}) => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [group, setGroup] = useState('');
const queryClient = useQueryClient();
const navigate = useNavigate();

const createDataUser = async (user) => {
    // const response = await
 return  await fetch(`https://api.react-learning.ru/signup`, {
        method:"POST",
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(
            {
            email: user.email,
            password: user.password,
            group: user.group
            }
        )
    }).then((res)=>res.json());
 
    // const data = await response.json();
    // const token = data.token;
    // // console.log(token);
    // localStorage.setItem('token', JSON.stringify(token));
    // setToken(token);
    // return token;
}; 
const { mutate, isError, isLoading, isSuccess } = useMutation(createDataUser, {
    onSuccess: () => {
        // queryClient.invalidateQueries({ queryKey: USER_QUERY_KEY });
    // console.log("ok");
    navigate(`/`);
    },
});
if (isSuccess) {
    return (<p>Loading...</p>)
}
if (isLoading) {
    return (<p>Loading...</p>)
}
if (isError) {
    return console.log('Error')
}
return (
    <>
    <div className="container d-flex justify-content-center py-5">
        <form onSubmit={(e)=> e.preventDefault()} >
        <h1>Please Sign Up</h1>
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
            <label for="exampleInputEmail1" className="form-label">Group</label>
            <input 
            type="text" 
            className="form-control"
             placeholder="sm8" 
             id="exampleInputEmail1" 
             value={group}
            onChange={(e) => setGroup(e.target.value)}
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
        <button onClick={()=>mutate({email: email, password: password, group: group})}type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
    </>
)
}
