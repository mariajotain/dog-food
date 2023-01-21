import { useNavigate } from 'react-router-dom';

export function SignUpBtn() {
  
const navigate = useNavigate();

const clickHandler = () => {
  if(JSON.parse(localStorage.getItem('token'))) {
    localStorage.removeItem('token'); 
    localStorage.clear();
    navigate(`/signup`);
  } 
};

return (
  <div className="ms-2">
    <button onClick={clickHandler} type="button" className="btn btn-dark btn-sm">Sign Up</button>
  </div>
  )
}