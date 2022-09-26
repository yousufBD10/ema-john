import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee ,faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import './Product.css';
const Product = (props) => {
    const { img,name,price,ratings,quantity} = props.product;
    const {carthandle} = props;
  
    return (
        <div className='product'>
            <img src={img} alt=''></img>
           <div className='product-info'>
           <p>Name : {name}</p>
            <p>Rating : {ratings} Stars</p>
            <p>Quatity : {quantity}</p>
            <p>Price : ${price}</p>
           </div>
        
         <button onClick={carthandle} className='btn-cart'>
            <p>Add to cart</p><FontAwesomeIcon icon={faCoffee } ></FontAwesomeIcon>
         </button>
         
            
        </div>
    );
};

export default Product;