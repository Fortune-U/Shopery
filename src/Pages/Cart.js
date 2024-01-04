import Footer from "../Components/Footer";
import { Outlet, Link } from "react-router-dom"
import CartProduct from "../Components/CartProduct";
import React, { useState, useEffect } from "react";
import '../Styles/cart.css'

export default function Cart() {
    const [getCart, setGetcart] = useState([]);


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
    },[getCart]);

    

    const cart = getCart.map(card=>{
        return(
        <CartProduct  
        key={card.id}
        card={card}
        />
        )
    });
    return(
        <div className="cart-wrapper">

            <div className="crt-title">
            <p>My Shopping Cart</p>
            </div>
            
          <div className="cart-bd">
                
                <br/>
                <main className="crt-mn">
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
                    <div className="btm-crt">
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
                    <button className="ptd">Procced to Checkout</button>
                </aside>
          </div>
 
        <Footer />
        </div>
    );
}