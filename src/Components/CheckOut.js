import Footer from "./Footer";
import '../Styles/checkout.css';
import CheckOutProdComp from "./CheckOutProdComp";
import { useState,useEffect } from "react";
import { PaystackButton } from 'react-paystack';

export default function CheckOut() {

 

  const [checkprod, setCheckProd] = useState({ cart:[]});
  const [priceTotal, setPriceTotal] = useState (0)

  //Paystack integrations
  const config = {
    reference: Math.floor(Math.random() * 100000000).toString(),
    email: "user@example.com",
    amount: 20000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: 'pk_test_31c13a73391c4918b06a89799792a5f6c445314d',
  };

  const handlePaystackSuccessAction = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);}
  
  

    // you can call this function anything
    const handlePaystackCloseAction = () => {
      // implementation for  whatever you want to do when the Paystack dialog closed.
      console.log('closed')
    }

    const componentProps = {
        ...config,
        text: 'Place order',
        onSuccess: (reference) => handlePaystackSuccessAction(reference),
        onClose: handlePaystackCloseAction,
    };

  
  useEffect(() =>{
    
    fetch('https://shopery.onrender.com/api/v1/cart',{
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
      setCheckProd(data);
      setPriceTotal(data.total)
      
    })


    .catch((error) => {
      console.error('API Error:', error);
    });
},[]);





const mappedProd = checkprod.cart
.filter(card => card.qty > 0)
.map(card=>{
  return(
  <CheckOutProdComp
  key={card.id}
  card={card}
  />
  )
  });

    return(
        <div className="checkout-wrp">
         <div className="checkout-bd">
            <main>
                <p className="bill-add">Billing Address</p>
              <form>
                {/* <div className="first-inputs">
                    <div>
                    <label htmlFor="">First name</label>
                    <br/>
                    <input type="text" />
                    </div>
                    
                    <div>
                    <label htmlFor="">Last name</label>   
                    <br/>
                    <input type="text" />
                    </div>

                    <div>
                    <label htmlFor="" className="lb-opt">Company name <p className="opt">(optional)</p></label>
                    <input type="text" />
                    </div>
                    
                    
                </div> */}
                <div className="second-inputs">
                    <label htmlFor="address">Street Address</label>
                    <br/>
                    <input type="text" placeholder="6 eddy okeke" name="address" />
                </div>
                <div>
                    <label htmlFor="">Phone</label>
                    <br/>
                    <input type="text" placeholder="+23490"/>
                    </div>
                {/* <div className="third-inputs">
                    <div>
                    <label htmlFor="country">Country / Region</label>
                    <br/>
                    <select name="country" id="country">
                    <option value="Nigeria">Nigeria</option>
                    </select> 
                    </div>

                    <div>
                    <label htmlFor="state">State</label>
                    <br/>
                    <select name="state" id="state">
                    <option value="Lagos">Lagos</option>
                    </select> 
                    </div>

                    <div className="zip-cd">
                    <label htmlFor="">Zip Code</label>
                    <br/>
                    <input type="text" />
                    </div>

                </div>
                <div className="fourth-inputs">
                    <div>
                    <label htmlFor="">Email Address</label>
                    <br/>
                    <input type="text" placeholder="Email" />
                    </div>

                   
                </div> */}
                <div className="ship-chck">
                    <input type="checkbox" />
                    <p>Ship to a different address</p>
                </div>

                <div className="fifth-input">
                    <p>Additional Info</p>
                    <div>Order Notes (optional)</div>
                    <input type="text" placeholder="Notes about your order, e.g, special notes for delivery" />
                </div>
              </form>
            </main>
            <aside>
              <div className="asi-title">Order summary</div>
              <div className="it-cmps">{mappedProd}</div>
              <div className="sb-line">
                <p className="lght">Subtotal:</p>
                <p className="bld">85$</p>
              </div>

              <div className="sb-line2">
                <p className="lght">Shipping</p>
                <p className="bld">Free</p>
              </div>

              <div className="sb-line3">
                <p className="lght">Total:</p>
                <p className="bld">{priceTotal}$</p>
              </div>
              <div className="payment-box">
                <p>Payment Method</p>
                <form>
                
                <input type="radio"  name="pay" id="card" />
                <label htmlFor="card">Paystack</label>
                <br/>
                {/* <input type="radio"  name="pay" id="bt" />
                <label htmlFor="bt">Bank transfer</label>
                <br/>
                <input type="radio"  name="pay" id="crypto" />
                <label htmlFor="crypto">Crypto</label>
                <br/> */}
                
                
                </form>
                <PaystackButton className="paystack-button" {...componentProps} />
                

              </div>
            </aside>
         </div>
            
        <Footer />
        </div>
    );
}