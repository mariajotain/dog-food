
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Outlet } from "react-router-dom";
// import { useState } from 'react';
import { SignIn } from './components/SignIn/SignIn';
import { Home } from './components/Home/Home';
import { getInitialState } from './redux/initState';


function App() {
  // const [token, setToken] = useState("");
  
  if(!getInitialState().tokenUser) {
    // if(!JSON.parse(localStorage.getItem('token'))) {
  // setToken(JSON.parse(localStorage.getItem('token')));
        return  <SignIn />
    
      };

     
  return (
     <div className="App">
       <Header />
       <Home />
        <div>
        <Outlet />
        </div>
        <Footer />
        </div>
  );
      
}
export default App;
