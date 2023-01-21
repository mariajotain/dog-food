import { useNavigate } from 'react-router-dom';

export function SignInBtn() {
  const navigate = useNavigate();
  const clickHandler = () => {
    if(JSON.parse(localStorage.getItem('token'))) {
      localStorage.removeItem('token'); 
      localStorage.clear();
      navigate(`/signin`);
    } 
   
  };

  return (
    <div className="ms-2">
      <button onClick={clickHandler} type="button" className="btn btn-dark btn-sm">Login</button>
    </div>
  )
}





