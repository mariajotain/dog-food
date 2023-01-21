import { useNavigate } from "react-router-dom";



export const Login = ({setToken}) => {
    const navigate = useNavigate();

    const singInHandler = () => {
  
    navigate(`/signin`);
    //   if(JSON.parse(localStorage.getItem('token'))) {
    //     localStorage.removeItem('token'); 
    //     localStorage.clear();

      
};
const singUpHandler = () => {
    navigate(`/signup`);
    //   if(JSON.parse(localStorage.getItem('token'))) {
    //     localStorage.removeItem('token'); 
    //     localStorage.clear();
   
      
};

    return(
        <>
            <p>Пожалуйста, авторизуйтесь или зарегистрируйтесь в системе</p>
            <div className="ms-2 d-flex ">
                <button onClick={singInHandler} type="button" className="btn btn-dark btn-sm">Авторизация</button>
                <button onClick={singUpHandler} type="button" className="btn btn-dark btn-sm">Регистрация</button>
        </div>
        </>
    );
};