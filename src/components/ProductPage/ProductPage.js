import { useNavigate } from "react-router-dom";
import { getInitialState } from "../../redux/initState";




export const ProductPage = () => {
    const userToken = getInitialState().tokenUser;
    const navigate = useNavigate();
    
    if(!userToken) {
      navigate(`/signin`);   
    };


    return (
        <>
 <section >
    <div className="container py-5 ">

        <div className="row">
                    <div className="col">
                        <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
                            <ol className="breadcrumb mb-0">
                                <li className="breadcrumb-item"><NavLink to="/" >Home</NavLink></li>
                                <li className="breadcrumb-item active" aria-current="page">НАЗВАНИЕ ТОВАРА</li>
                            </ol>
                        </nav>
                    </div>
        </div>

      
       
    </div>
</section>

    <Footer />

        </>
    )
};