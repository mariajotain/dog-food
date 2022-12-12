import { useEffect, useState } from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

export function UserPage() {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    
    const [state, setState] = useState([]);
    
    useEffect(() => {
      fetch(`https://api.react-learning.ru/v2/sm8/users/me`,{
        headers: {
          authorization: `Bearer ${userToken}`,
        }
    })
      .then((response) => response.json())
      .then((response) => setState(response));
    },[]);
return (
    <>
    <Header />
        <div className="card mb-3" >
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={state.avatar} className="img-fluid rounded-start" alt={state.about} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{state.about}</h5>
                        <p className="card-text">{state.name}</p>
                        <p className="card-text">{state.email}</p>
                        <p className="card-text">{state.group}</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
   );
}

