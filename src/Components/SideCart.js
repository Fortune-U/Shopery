import '../Styles/sidecart.css';
import { useState,useEffect } from 'react';
//import Popup from 'reactjs-popup';
import { Link} from "react-router-dom";
import CartProduct from './CartProduct';
import { useDispatch } from 'react-redux';
import { newCartWindowState } from '../features/sideCartControl';

export default function SideCart() {

  const dispatch = useDispatch();

  const [carted, setCarted] = useState([]);
  const [ total, settotal] = useState("");

  useEffect(() => {
    fetch('https://shopery.onrender.com/api/v1/cart', {
      method: 'GET',
      credentials: 'include',
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        // Extract cart items array from the response object (assuming "items" key)
        const cartItems = data.cart || []; // Use default empty array if "items" is missing
        setCarted(cartItems);
        settotal(data.total);
      })
      .catch((error) => {
        console.error('API Error:', error);
      });
  }, []);

  const cartedItems = carted.length > 0
    ? carted.filter((card) => card.qty > 0).map((card) => (
        <CartProduct key={card.id} card={card} /> // Add unique key for each item
      ))
    : []; // Return empty array if carted is empty
    console.log(carted)
    
    return(
        <div className='sc-wrapper'>
            <div className='sc-header'>
                <p>
                     Shopping Cart ({carted.length})
                </p>
                <svg onClick={()=>{dispatch(newCartWindowState(false))}}  xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <path d="M18.75 6.25L6.25 18.75" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6.25 6.25L18.75 18.75" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
             <div>
             {cartedItems}
             </div>
            
            <div className='sc-bott-ctn'>
            <div className='sc-bott'>
            <div className='sc-preview'>
            <p>{carted.length} Products</p>
            <p>${total}</p>
            </div>  
            <div className='sc-btns'>
            <Link to="/checkout"><button className='sc-check' >Checkout</button></Link>
            <Link to="/cart">  <button className='sc-gtc' >Go to Cart</button></Link>
            </div>
            </div>
            </div>
           
        </div>
    );
}