import Footer from "./Footer";
import { Outlet, Link, useNavigate } from "react-router-dom"
import CartProduct from "./CartProduct";
import React, { useState, useEffect } from "react";
//import '../Styles/cart.css'

export default function CartComponent() {
    const [getCart, setGetcart] = useState([]);

    const navigate = useNavigate();

    useEffect(() =>{
        fetch('https://shopery.onrender.com/api/v1/cart')
        .then((res) => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json();
        })
        .then((data) => {
          setGetcart(data);
        })
        .catch((error) => {
          console.error('API Error:', error);
        });
    },[]);

    console.log(getCart)

    const cart = getCart.map(card=>{
        return(
        <CartProduct  
        key={card.id}
        card={card}
        />
        )
    });

    function handleNavigate() {
        navigate("/checkout")
    }
    return(
        <div className="cart-wrapper">

            <div className="crt-title-c">
            <p>My Shopping Cart</p>
            </div>
            
          <div className="cart-bdc">
                
                <br/>
                <main className="crt-mnc">
                    <div className="top-cart">
                        <div className="crt-hd">
                            <p className="prd">Product</p>
                            <p className="pric">Price</p>
                            <p className="qty">Quantity</p>
                            <p className="sbt">SubTotal</p>
                        </div>
                            <div className="crt-st-ctn">
                            {cart}
                            </div>
                        <div className="crt-actns">
                            <Link to='/shop' className="rts-btn"><button>Return to shop</button></Link>
                            <button>Update cart</button>
                        </div>
                    </div>
                    <div className="btm-crtc">
                       <p>Coupon Code</p>
                       <form>
                        <input type="text" />
                        <button>Apply Coupon</button>
                       </form>
                    </div>
                </main>
                <aside>
                    <p className="crt-ttl">Cart Total</p>
                    <div>
                        <p className="crt-light">Subtotal:</p>
                        <p className="crt-bld">$84.00</p>
                    </div>
                    <div>
                        <p className="crt-light">Shipping:</p>
                        <p className="crt-bld">Free</p>
                    </div>
                    <div>
                        <p className="crt-light">Total:</p>
                        <p className="crt-bld">$84.00</p>
                    </div>
                    <button className="ptd" onClick={handleNavigate}>Procced to Checkout</button>
                </aside>
          </div>
 
        </div>
    );
}