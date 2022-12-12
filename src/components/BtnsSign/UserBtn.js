import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";

export function UserBtn({token}) {
  const navigate = useNavigate();
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch(`https://api.react-learning.ru/v2/sm8/users/me`,{
      headers: {
        authorization: `Bearer ${token}`,
      }
  })
    .then((response) => response.json())
    .then((response) => setState(response));
  }, []);

  const clickHandler = () => {
    navigate(`/user`);
  };

  return (
    <div className="ms-2">
      <button onClick={clickHandler} type="button" className="btn btn-dark btn-sm">My Page</button>
    </div>
  )
}
