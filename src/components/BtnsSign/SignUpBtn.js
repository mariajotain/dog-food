import { useNavigate } from 'react-router-dom';

export function SignUpBtn() {
  
const navigate = useNavigate();

const clickHandler = () => {
    //     // redirect на страницу с регистрацией
    navigate(`/signup`);
};

return (
  <div className="ms-2">
    <button onClick={clickHandler} type="button" className="btn btn-dark btn-sm">Sign Up</button>
  </div>
  )
}