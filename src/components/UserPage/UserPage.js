// import { useEffect, useState } from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { useQuery } from "@tanstack/react-query";

export const USER_QUERY_KEY = 'USER_QUERY_KEY';

export function UserPage() {
    const userToken = JSON.parse(localStorage.getItem('token'));
    const { data, isLoading } = useQuery({
        queryKey: USER_QUERY_KEY, 
        queryFn: () => getUserData().then((res) => {return res.json();})
    });

    const getUserData = () => {
        return fetch(`https://api.react-learning.ru/v2/sm8/users/me`,{
             headers: {
               authorization: `Bearer ${userToken}`,
             }
         });
        //  .then((response) => response.json());
     };
     

    // const [state, setState] = useState([]);
    
    // useEffect(() => {
    //   fetch(`https://api.react-learning.ru/v2/sm8/users/me`,{
    //     headers: {
    //       authorization: `Bearer ${userToken}`,
    //     }
    // })
    //   .then((response) => response.json())
    //   .then((response) => setState(response));
    // },[]);
    if (isLoading) return ( <p>Loading..</p>)
return (
    <>
    <Header />
        <div className="card mb-3" >
            <div className="row g-0">
           <>
                <div className="col-md-4">
                    <img src={data.avatar} className="img-fluid rounded-start" alt={data.about} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{data.about}</h5>
                        <p className="card-text">{data.name}</p>
                        <p className="card-text">{data.email}</p>
                        <p className="card-text">{data.group}</p>
                    </div>
                </div>
                </> 
            </div>
        </div>
        <Footer />
        </>
   );
}