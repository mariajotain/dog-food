// import { useEffect, useState } from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { useQuery } from "@tanstack/react-query";
import styles from "./UserPage.module.css";
import { NavLink, useNavigate } from 'react-router-dom';
import { getInitialState } from "../../redux/initState";
export const USER_QUERY_KEY = 'USER_QUERY_KEY';

export const UserPage = () => {
  const userToken = getInitialState().tokenUser;
  const navigate = useNavigate();
  
  if(!userToken) {
    navigate(`/signin`);   
  };
  
  const logOut = ()=> {
  localStorage.clear(); 
  navigate(`/signin`);
  };         
  const { data, isLoading } = useQuery({
    queryKey: [USER_QUERY_KEY], 
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
if (isLoading) return ( <p>Loading..</p>);
return (
  <>
    <Header />
    <section className={styles.section}>
    <div className="container py-5">

        <div className="row">
            <div className="col">
                <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item"><NavLink to="/" >Home</NavLink></li>
                        <li className="breadcrumb-item active" aria-current="page">My Profile</li>
                    </ol>
                </nav>
            </div>
        </div>

        <div className="d-flex justify-content-around">

          <div className="row">
            <div className="col-lg-8">
              <div className="card mb-3">
                <div className="card-body text-center">
                <img src={data.avatar} className="img-fluid rounded-start w-75 p-3" alt={data.about} />
                  <h5 className="my-3">{data.name}</h5>
                  <p className="text-muted mb-1">Lorem ipsum dolor sit amet </p>
                  <p className="text-muted mb-4">Lorem ipsum dolor sit amet</p>
                  <div className="d-flex justify-content-center mb-2">
                    <button onClick={logOut} type="button" className="btn btn-primary">Выйти</button>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="col-lg-8">
            <div className="card mb-4">
              <div className="card-body">

                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Full Name</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{data.name}</p>
                  </div>
                </div>

                <hr / >
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Email</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{data.email}</p>
                  </div>
                </div>

                <hr  />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Group</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{data.group}</p>
                  </div>
                </div>

                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">ID</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{data._id}</p>
                  </div>
                </div>

                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Description</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{data.about}</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

    </div>
    </section>
    <Footer />
</>
);

};


 




 










   





   

