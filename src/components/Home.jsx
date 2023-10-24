import React from 'react'
import img1 from "../assets/macbook.jpg"
import img2 from "../assets/galaxy.jpg"
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const Home = () => {

  const ProductList = [
    {
    name: "Mac Book",
    price: 12000,
    imgSrc: img1,
    id: "afhdfhskljdfh",
  },
   {
    name: "Samsung Galaxy",
    price: 490,
    imgSrc: img2,
    id: "afhdfsdfhfhskljdfh",
  },
];

const dispatch = useDispatch()

const addToCartHandler = (options) =>{
     dispatch({type: "addToCart", payload: options})
     dispatch({ type: "calculatePrice" });
     toast.success("Add to Cart");
}

  return (
    <div className='home' >
      {
    
         ProductList.map(i=>(
          <ProductCard key={i.id}
          imgSrc={i.imgSrc}
          name={i.name}
          price={i.price}
          id={i.id}
          handler={addToCartHandler} />

         ))
    
    }
    </div>
  )
}

const ProductCard = ({name, id, price, handler, imgSrc}) => (
    <div className="productCard">
   
   <img src={imgSrc} alt={name} />

   <p>{name}</p>

   <h4> ${price} </h4>
   <button onClick={()=>handler({name, price, id, quantity: 1, imgSrc})} >Add to Cart</button>


    </div>
)
 
export {img1}
export default Home