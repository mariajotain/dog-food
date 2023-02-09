import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNewCartAC, favouriteCartAC } from "../../redux/actionsCreators/basketAC";
import styles from "./Home.module.css";





export const CartItemHome = ({pictures, _id, name, stock, price, wight, description}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    return (
        <>
        <div className="card-product d-flex ">
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
            <div className="d-flex flex-column">
            <button onClick={()=>dispatch(addNewCartAC(_id, stock, price))}
             className="btn btn-dark btn-sm m-2">Купить</button>
             {/* <button onClick={navigate(`/user`)}
             className="btn btn-dark btn-sm m-2">Подробнее</button> */}
             {/* <button onClick={()=>dispatch(favouriteCartAC(_id, stock, price))}
             className="btn btn-danger btn-sm ">В избранное</button> */}
             </div> 
          </div>
          </div>
    </div>
        </>
    )
}