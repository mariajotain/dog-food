
import { useEffect, useState } from "react";
import styles from "./Home.module.css";

export const Home = ({token}) => {


const [state, setState] = useState([]);
const tokenString = localStorage.getItem('token');
const userToken = JSON.parse(tokenString);
useEffect(() => {
  fetch(`https://api.react-learning.ru/products`,{
    headers: {
      authorization: `Bearer ${userToken}`,
    }
})
  .then(response=>response.json())
  .then(response=>setState(response.products));
}, []);

  return (
    <div className={styles.container}>
        {state.map(item => 
        <>
        <div className="card-product d-flex ">
          <div className={styles.card}>
          <div className="card my-2 card-header">
          <img src={item.pictures} className="card-img-top" alt={item.name} />
            <div className="card-body">
              <p className="card-title">{item.name}</p>
              <p className="card-text">{item.discount}</p>
              <p className="card-text">{item.price}</p>
              <p className="card-text">{item.stock}</p>
              <p className="card-text">{item.description}</p>
            </div>
            <button className="btn btn-dark btn-sm">Добавить в корзину</button>
          </div>
          </div>
        </div>
        </>
        )}
    </div>
  );

};






