import { useNavigate } from 'react-router-dom';

export function BasketBtn({token}) {
  const navigate = useNavigate();
  const userToken = getInitialState().tokenUser;
  // const userToken = JSON.parse(localStorage.getItem('token'));
 
  const clickHandler = () => {
    if (userToken) {
      navigate(`/basket`);
    }
    
  };

  return (
    <div className="ms-2">
      <button onClick={clickHandler} type="button" className="btn btn-light btn-sm">Корзина</button>
    </div>
  )
}