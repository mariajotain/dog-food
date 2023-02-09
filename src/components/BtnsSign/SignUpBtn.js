import { useNavigate } from 'react-router-dom';
import { getInitialState } from '../../redux/initState';

export function SignUpBtn() {
  
const navigate = useNavigate();

const clickHandler = () => {
  // if(JSON.parse(localStorage.getItem('token'))) {
    if (getInitialState().tokenUser) {
    // localStorage.removeItem('token'); 
    localStorage.clear();
    navigate(`/signup`);
  } 
};

return (
  <div className="ms-2">
    <button onClick={clickHandler} type="button" className="btn btn-light btn-sm">Sign Up</button>
  </div>
  )
}