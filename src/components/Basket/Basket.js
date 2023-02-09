

import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCartsAC } from "../../redux/actionsCreators/basketAC";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Cart } from "./Cart";
import { NavLink } from 'react-router-dom';
import styles from "./Basket.module.css";
import { getInitialState, REDUX_LS_KEY } from "../../redux/initState";

const GET_CART = 'GET_CART';



export const Basket = () => {

  // const userToken = JSON.parse(localStorage.getItem('token'));
  const userToken = getInitialState().tokenUser;
  const basket = useSelector(store => store.basket);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  if(!userToken) {
    navigate(`/signin`);
         
  };

    // useEffect(() => {
    // }, [dispatch]) 

    const  getProductsByIds = () =>{
      const ids = basket.map((item) => item.id);
     return  Promise.all(ids.map(id =>  fetch(`https://api.react-learning.ru/products/${id}`, {
           headers: {
             authorization: `Bearer ${userToken}`,
           }}
           )
         .then(res => res.json())
         .catch(() => {})
         
         ));
       };
       
    const { data, isSuccess, isLoading, error } = useQuery({ 
      queryKey: [GET_CART],
      queryFn: getProductsByIds,
    //    queryFn: () =>  {
    //  getProductsByIds(basket.map((item) => item.id))
    // }
    }
    );

    const getTotalQuantity = () => {
      let total = 0;
      basket.forEach((item) => {
        total += item.count;
      });
      return total;
    };

    const clearHandler = () => {
      dispatch(clearCartsAC());
    };

     const getTotalPrice = () => {
      let price = 0;
        basket.forEach((item) => {
          if (item.status == true)
          price += item.price * item.count;
        });
      return price;
    };  

   const getValue = () => {
      let value = 0;
        basket.forEach((item) => {
          if (item.status == true)
          value += item.count;
        });
      return value;
    };  


   
return (
  <>
    <Header />
  

    <section className={styles.section}>
    <div className="container py-5 ">
    <div className="row">
                <div className="col">
                    <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><NavLink to="/" >Home</NavLink></li>
                            <li className="breadcrumb-item active" aria-current="page">Basket</li>
                        </ol>
                    </nav>
                </div>
            </div>

      
        <div className="row d-flex justify-content-center my-4">

        <div className="card-header py-3">
            <h4 className="mb-0">Количество товара - {getTotalQuantity()}</h4>
            <button onClick={() => navigate("/")} type="button" 
        className="btn btn-dark btn-sm my-2 ">Главная</button>
            <button onClick={() => navigate("/user")} type="button" 
        className="btn btn-dark btn-sm my-2 m-2">Профиль</button>
      <button
          onClick={clearHandler}
          type="button"
          className="btn btn-danger"
        >
          Очистить корзину
        </button>
        </div>
          <div className="col-md-8">
            <div className="card mb-4">
              <div className="card-body">
              { isSuccess 
      && data.map((item) => ( 
      <Cart key={item._id}
      {...item}
      />
      ) )}
              </div>       
            </div>
          </div>
    
      <div className="col-md-4">
        <div className="card mb-4">
          <div className="card-header py-3">
            <h5 className="mb-0">Итого</h5>
          </div>
          <div className="card-body">
          <ul className="list-group list-group-flush">
             <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
            Выбрано товаров: <span>{getValue()}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
            Общая стоимость: <span>{getTotalPrice()}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center px-0">
            Доставка<span>Бесплатно</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
            <div><strong>Мы принимаем</strong></div>
            <div>
            <img className="me-2" width="45px"
            src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
            alt="Visa" />
            <img className="me-2" width="45px"
            src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
            alt="Mastercard" />
            </div>
            </li>
        </ul>
        <button type="button" className="btn btn-primary btn-lg btn-block">Перейти к оформлению</button>




          </div>
      </div> 
      </div> 
 
  </div>
  </div>
  
 
     {isLoading && <p>Loading..</p>}
      {error && <p>Error occurred!</p>}
    </section>

    <Footer />
  </>
)
};