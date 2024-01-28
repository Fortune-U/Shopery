import '../Styles/cartproduct.css';
import close from '../Assets/Close.svg';
import { useState } from 'react';

export default function CartProduct(props) {

    const [counter, setCounter] = useState(props.card.qty);
    const [subTotal, setSubTotal] = useState(props.card.subtotal);
    // const [cartChange, setCartChange] = useState();

   

    
    
    const handleClick1 = () => {
        // Counter state is incremented
        // setSubTotal(cartChange.Cart.subtotal);
        setCounter(counter + 1);
        
        fetch(`https://shopery.onrender.com/api/v1/cart/add/${props.card.productId}`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          quantity:1
        })
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Assuming the response is in JSON format
      })
      // .then(response => {
      //   setCartChange(response)
      // })
      .catch(error => {
        // Handle errors
        console.error('Error:', error);
  
    });
    
    };
 
    // Function is called everytime decrement button is clicked
    const handleClick2 = () => {
        // Counter state is decremented
        // setSubTotal(cartChange.Cart.subtotal);
        setCounter(counter - 1);
        
        fetch(`https://shopery.onrender.com/api/v1/cart/remove/${props.card.productId}`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          quantity:1
        })
      })
      
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Assuming the response is in JSON format
      })
      // .then(response => {
      //   setCartChange(response)
      // })
      .catch(error => {
        // Handle errors
        console.error('Error:', error);
  
    });
    
    };
    


    function remove () {
      fetch(`https://shopery.onrender.com/api/v1/cart/remove/${props.card.productId}`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          quantity:props.card.qty
        })
      })
      
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Assuming the response is in JSON format
        
      })
      // .then(response => {
      //   setCartChange(response);
      //   window.location.reload();
      // })
      
      .catch(error => {
        // Handle errors
        console.error('Error:', error);
  
    });
    window.location.reload();
    };
    






    return(
        <div className="ct-wrp">
            <div className="img-txt">
                <div className='small-img'>
                    <img  src={props.card.image} alt=''/>
                </div>
                
                <p>{props.card.name}</p>
            </div>
            <p className='prc'>${props.card.price}</p>
            <div className='add-cart-btns'>
                <div>
                            <button onClick={handleClick2}>-</button>
                            <p>
                                {/* {props.card.qty} */}
                            {counter}
                            </p>
                            <button onClick={handleClick1}>+</button>
                            </div>
            </div>
            <p className='sb-ttl'>${subTotal}</p>
            <button onClick={remove} className='rmv-prd-btn'><img src={close} alt='' /></button>


        </div>
    );
}