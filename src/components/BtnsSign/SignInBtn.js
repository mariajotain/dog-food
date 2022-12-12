import { useNavigate } from 'react-router-dom';

export function SignInBtn() {

  const navigate = useNavigate();

  const clickHandler = () => {
      // redirect на страницу с входом
    navigate(`/signin`);
  };

  return (
    <div className="ms-2">
      <button onClick={clickHandler} type="button" className="btn btn-dark btn-sm">Sign In</button>
    </div>
  )
}





