
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementCartAC, deleteCartAC, incrementCartAC, statusCartAC } from "../../redux/actionsCreators/basketAC";



export const Cart = ({pictures, _id, name, stock, price, wight}) => {
  const basket = useSelector(store => store.basket);
    const dispatch = useDispatch();

    const [disableInc, setInc] = useState(false);
    const [disableDec, setDec] = useState(false);

    const deleteHandler = () => {
        dispatch(deleteCartAC(_id));
      };

  const incrementHandler= () => {   
    const cartId = basket.filter((item) => item.id === _id);
    cartId.forEach((item) => {
       if (item.count >= stock) {
        setInc(true);
       } else {
        dispatch(incrementCartAC(_id));
        if (disableDec === true) {
          setDec(false);
        }
        
       }});
      };


    const decrementHandler= () => {   
      const cartId = basket.filter((item) => item.id === _id);
      cartId.forEach((item) => {
         if (item.count <= 1) {
          setDec(true);
         } else {
          dispatch(decrementCartAC(_id));
          if (disableInc === true) {
            setInc(false);
          }
         }});
        };



const quantityCart = () => {
  let quantity = 0;
  const cartId = basket.filter((item) => item.id === _id);
  cartId.forEach((item) => {
      quantity += item.count;
    } 
    );

    return quantity;
};

const statusHandler = () => {
  dispatch(statusCartAC(_id));
};

    return (
        <>
        <div className="row">
          <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">

          <div className="form-check">
          <button type="button" 
            className="btn btn-primary btn-sm me-1 mb-2" 
            title="Remove item"
            onClick={statusHandler}
            >Выбрать</button>    
         
          </div>

            <div className="bg-image hover-overlay hover-zoom ripple rounded" >
            <img src={pictures} className="w-100" />        
            </div>                
          </div>

          <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
            <p><strong>{name}</strong></p>
            <p>В наличии: {stock}</p>
            <p>Вес:{wight}</p>
            <p><strong>Цена: {price}</strong></p>
       
            <button type="button" 
            className="btn btn-primary btn-sm me-1 mb-2" 
            title="Remove item"
            onClick={deleteHandler}
            >Удалить</button>              
          </div>

          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div className="d-flex mb-4 mw-300 justify-content-between align-items-center" >
              <button className="btn btn-primary px-3 me-2" onClick={decrementHandler}  
              disabled={disableDec}
              >-</button>
            <div className="form-outline">
            <p>{quantityCart() }</p>
            </div>
            <button 
            className="btn btn-primary px-3 ms-2"
            onClick={incrementHandler}
            disabled={disableInc}
            >+</button>
            </div>
          </div>
          
        </div>

        <hr className="my-4" />
      
        </>



    )
}