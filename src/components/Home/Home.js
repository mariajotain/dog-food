
import { useQuery } from "@tanstack/react-query";
import styles from "./Home.module.css";
import { CartItemHome } from "./CartItemHome";
import { getInitialState } from "../../redux/initState";
export const PRODUCTS_QUERY_KEY = 'PRODUCTS_QUERY_KEY';



export const Home = () => {
  // const userToken = JSON.parse(localStorage.getItem('token'));
    const userToken = getInitialState().tokenUser;
  

  const getProductsData = () => {
    return  fetch(`https://api.react-learning.ru/products/?limit=6`,{
         headers: {
           authorization: `Bearer ${userToken}`,
         }
     }).then((response) => response.json());

 };

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
    <>

    <div className={styles.container}>
         {isSuccess &&
        data.products.map((item) => (
        <CartItemHome key={item._id}
        {...item}
        />
        ))}

        {isLoading && <p>Loading..</p>}
      {error && <p>Error occurred!</p>}
    </div>
    </>
  );

};






