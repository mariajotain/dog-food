import { useNavigate } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";


export const Favourite = () => {
    const userToken = JSON.parse(localStorage.getItem('token'));
    const navigate = useNavigate();

    if(!userToken) {
      navigate(`/signin`);    
    };


    return (

    <>
    <Header />
    {/* <div className="card-product d-flex ">
          <div className={styles.card} >
          <div className="card my-2 card-header" key={_id} >
          <img src={pictures} className="card-img-top" />
            <div className="card-body">
              <p className="card-title">{name}</p>
              <p className="card-text">Цена: {price}</p>
              <p className="card-text">Количество: {stock}</p>
              <p className="card-text">Вес: {wight}</p>
              <p className="card-text">Описание: {description}</p>
            </div>
            <div>
           
            </div>
            <button onClick={()=>dispatch(addNewCartAC(_id, stock, price))}
             className="btn btn-dark btn-sm">Купить</button>
             <button onClick={()=>dispatch(favouriteCartAC(_id))}
             className="btn btn-dark btn-sm">В избранное</button>
          </div>
          </div>
    </div> */}
    <Footer />
    </>




    );
};