import styles from "./header.module.css";
import { SignUpBtn } from "../BtnsSign/SignUpBtn";
import { UserBtn } from "../BtnsSign/UserBtn";
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';



export const Header = () => {
    const basket = useSelector(store => store.basket);
    const navigate = useNavigate();

    const getTotalQuantity = () => {
      let total = 0;
      basket.forEach((item) => {
        total += item.count;
      });
      return total;
    };

    // const getTotalFavourite = () => {
    //     let value = 0;
    //     basket.forEach((item) => {
    //       if (item.favourite == true)
    //       value += item.count;
    //     });
    //   return value;
    //   };
    


    return (
        <>
        <header>
            <div className={styles.logo}>
                <NavLink to="/" >DogFood</NavLink>
            </div>
          
            <div className="d-flex">
                <SignUpBtn />
                <UserBtn />
                <div className="ms-2">
                <button onClick={() => navigate("/basket")} type="button" className="btn btn-light btn-sm m-2" >Корзина {getTotalQuantity() || 0}</button>
                {/* <button onClick={() => navigate("/favourite")} type="button" className="btn btn-light btn-sm">Избранное {getTotalFavourite() || 0}</button> */}
                </div>
   
            </div>
        </header>
    </>
    );
};
