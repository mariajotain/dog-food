
import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";
import styles from "./Home.module.css";

export const PRODUCTS_QUERY_KEY = 'PRODUCTS_QUERY_KEY';


export const Home = ({token}) => {
  const userToken = JSON.parse(localStorage.getItem('token'));


  const getProductsData = () => {
    return fetch(`https://api.react-learning.ru/products`,{
         headers: {
           authorization: `Bearer ${userToken}`,
         }
     }).then((response) => response.json());

 };
//  .then((response)=> response.products)
 const { isLoading, error, data, isSuccess } = useQuery({ 
  queryKey: [PRODUCTS_QUERY_KEY], 
  queryFn: getProductsData,
  });

// const [state, setState] = useState([]);
// useEffect(() => {
//   fetch(`https://api.react-learning.ru/products`,{
//     headers: {
//       authorization: `Bearer ${userToken}`,
//     }
// })
//   .then(response=>response.json())
//   .then(response=>setState(response.products));
// }, []);

  return (
    <div className={styles.container}>
         {isSuccess &&
        data.products.map((item) => 
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
        {isLoading && <p>Loading..</p>}
      {error && <p>Error occurred!</p>}
    </div>
  );

};






