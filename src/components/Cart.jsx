import React from 'react'
import toast from 'react-hot-toast';
import {AiFillDelete} from "react-icons/ai"
import { useNavigate} from "react-router-dom"


import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

  const  {cartItems, subTotal, tax, shipping, total} = useSelector(state => state.cart)
  const increment = (id) => {
    dispatch({
        type: "addToCart",
        payload: {id},
    });
    dispatch({ type: "calculatePrice" });
  };
  const decrement = (id) => {
    dispatch({
        type: "decrement",
        payload: id,
      });
      dispatch({ type: "calculatePrice" });
  };
  const deleteHandler = (id) => {
    dispatch({
        type: "deleteFromCart",
        payload: id,
      });
      dispatch({ type: "calculatePrice" });

  };

  const cartToOrder = () => {
    dispatch({ type: "convert"});
    dispatch({type: "zero"});
   
    toast.success("Order Placed");
  }


    return (
        <div className="cart">

           <main>
          {
            cartItems.length > 0 ? (
                cartItems.map(i=>(
                    <CartItem 
                    imgSrc={i.imgSrc}
                    name={i.name}
                    price={i.price}
                    id={i.id}
                    qty={i.quantity}
                    key = {i.id}
                    increment={increment}
                    decrement={decrement}
                    deleteHandler={deleteHandler}
                    />
                ))
            ): <h1>No Items Yet</h1>
          }
           </main>

            <aside>
                <h2>Subtotal: ${subTotal}</h2>
                <h2>Shipping: ${shipping}</h2>
                <h2>Tax: ${tax}</h2>
                <h2>Total: ${total}</h2>
                <button className="btn-buy" onClick={cartToOrder} >Buy Now</button>
            </aside>


        </div>
    )
}

const CartItem = ({ name, price, imgSrc, qty, id, increment, decrement, deleteHandler }) => {
    return(
  <div className="cartItem">
      <img src={imgSrc} alt="Item" />
      <article>
        <h3> {name} </h3>
        <p>${price}</p>
      </article>

      <div>
        <button onClick={() => decrement(id)}>-</button>
        <p>{qty}</p>
        <button onClick={() => increment(id)}>+</button>
      </div>

      <AiFillDelete onClick={()=>deleteHandler(id)} />

  </div> 
    );
};

export default Cart