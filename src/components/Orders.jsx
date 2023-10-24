import React from 'react'
import toast from 'react-hot-toast';
import {useDispatch, useSelector} from "react-redux"
import { Link } from 'react-router-dom';
import Check from './check';
//import ImageClassifier from "../recycle";




const Orders = () => {



const  {orderItems} = useSelector(state => state.cart);
  

 

  return (
    <div className="order-home">
      <main>
          {
            orderItems.length > 0 ? (
                orderItems.map(i=>(
                    <OrderItem
                    imgSrc={i.imgSrc}
                    name={i.name}
                    price={i.price}
                    id={i.id}
                    qty={i.quantity}
                    key = {i.id}
                    />
                ))
            ): <h1>No Items Yet</h1>
          }
           </main>
    </div>
  )
}

const OrderItem = ({ name, price, imgSrc, qty, id }) => {
  const dispatch = useDispatch();
   const addReward = (id, imgSrc) => {
   
    dispatch({type: "addPoints",
     payload: id,});
    //console.log("hello Im reward")
   // toast.success("you are rewarded");
   <Check/>
   };
  return(
<div className="productCard">
    <img src={imgSrc} alt="Item" />
    
      <h4> {name} </h4>
      <p>${price}</p>

      <button style={{marginTop:"1rem"}} onClick={()=>addReward(id, imgSrc)}>Advisory</button>
   
</div> 
  );
};

export default Orders