
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Outlet } from "react-router-dom";
import { useState } from 'react';
import { SignIn } from './components/SignIn/SignIn';
import { Home } from './components/Home/Home';


function App() {
  const [token, setToken] = useState("");
  if(!token) {
        return <SignIn  setToken={setToken} />;
      } 

 
  return (
     <div className="App">
       <Header token={token} />
       <Home token={token} />
        <div>
        <Outlet />
        </div>
        <Footer />
        </div>
  );
}
export default App;

    //    