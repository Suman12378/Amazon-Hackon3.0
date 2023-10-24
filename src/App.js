import Cart from "./components/Cart";
import Header from "./components/Header";
import Home from "./components/Home";
import "./styles/app.scss"
import {Toaster} from "react-hot-toast"


import {BrowserRouter, Routes, Route} from "react-router-dom"
import Orders from "./components/Orders";


function App() {
  return (
    <BrowserRouter>
    <Header />
        <Routes>
            <Route path="/" element = {<Home/>}  />
            <Route path="/cart" element = {<Cart/>}  />
           <Route path="/orders" element = {<Orders/>}/>
        </Routes>
      <Toaster />
    </BrowserRouter>

  );
}

export default App;
