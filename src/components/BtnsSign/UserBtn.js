import { useNavigate } from 'react-router-dom';

export function UserBtn({token}) {
  const navigate = useNavigate();
  const userToken = JSON.parse(localStorage.getItem('token'));
 
  const clickHandler = () => {
    if (userToken) {
      navigate(`/user`);
    }
    
  };

  return (
    <div className="ms-2">
      <button onClick={clickHandler} type="button" className="btn btn-dark btn-sm">My Page</button>
    </div>
  )
}

// import { useEffect, useState } from "react";
 // const [state, setState] = useState([]);

  // useEffect(() => {
  //   fetch(`https://api.react-learning.ru/v2/sm8/users/me`,{
  //     headers: {
  //       authorization: `Bearer ${token}`,
  //     }
  // })
  //   .then((response) => response.json())
  //   .then((response) => setState(response));
  // }, []);
