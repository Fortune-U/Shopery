import Footer from "./Footer";
import '../Styles/checkout.css';
import CheckOutProdComp from "./CheckOutProdComp";
import { useState,useEffect } from "react";
import { PaystackButton } from 'react-paystack';
import AddressPopup from "./AddressPopup";
import MultiaddressPopup from "./MultiAddressPopup";
import { useSelector } from "react-redux";

const currentDate = new Date();
// Get date components
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; // Months are zero-based (0 = January)
const day = currentDate.getDate();

// Get time components
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

// Format date and time
const formattedDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
const formattedTime = `${hours < 10 ? '0' + hours : hours}-${minutes < 10 ? '0' + minutes : minutes}-${seconds < 10 ? '0' + seconds : seconds}`;



export default function CheckOut() {

 

  const [checkprod, setCheckProd] = useState({ cart:[]});
  const [priceTotal, setPriceTotal] = useState (0);
  const [address , setAddress] = useState({});
  const [addressFound, SetAddressFound] = useState(false);
  const [addressInUse, setAddressInUse] = useState({});
  const [user, setUser] = useState([]);
  const [deliveryFee, setDeliveryFee] = useState();
  
  const addressId = useSelector((state)=>state.addressid.value);
  console.log(addressId);
 

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

    fetch('https://shopery.onrender.com/api/v1/user/my-address',{
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
      setAddress(data);

    
  
      if (data.address.length == 1 ) {
        console.log("one address found");
        SetAddressFound(true);
        setAddressInUse(data.address[0]);
      } else if (data.address.length > 1) {
        console.log("multiple addressed found");
        SetAddressFound(true);
        setAddressInUse(data.address[address.length - 1]);
       
      } else  {
        SetAddressFound(false);
        console.log("no address found");
        
      }
      
    })
    .catch((error) => {
      console.error('API Error:', error);
    });

    fetch('https://shopery.onrender.com/api/v1/user/profile',{
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
      setUser(data);
      
    })


    .catch((error) => {
      console.error('API Error:', error);
    });

    

    // Generate random delivery fee
    setDeliveryFee(Math.floor(Math.random() * 10000));
},[]);
  
  
  //Paystack integrations
  const config = {
    //reference should be uuid + time
    reference: user.uuid + formattedDate + "-" + formattedTime,
    email: user.email,
    amount: (priceTotal + deliveryFee) * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: 'pk_test_31c13a73391c4918b06a89799792a5f6c445314d',
  };

  const handlePaystackSuccessAction = (reference) => {
   
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
    fetch(`https://shopery.onrender.com/api/v1/checkout`,  {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        addressId: addressId,
      transaction: parseInt(reference.transaction),
      reference: reference.reference,
      status: reference.status
      })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json(); // Assuming the response is in JSON format
    })
   
    .catch(error => {
      // Handle errors
      console.error('Error:', error);

  });
  
}

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

  
    





// console.log(addressInUse);


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
                {/* 
                <MultiaddressPopup /> */}
                
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
                 {addressFound ?
                 (
                <div className="second-inputs">
                  
                  <MultiaddressPopup />
                  
                    {/* <label htmlFor="address">Street Address</label>
                    <br/>
                    <input type="text" placeholder={addressInUse.houseNumber + " " + addressInUse.streetName + " " + addressInUse.city + " " + addressInUse.state} name="address" readOnly />
                     */}
                </div> ) :
                 (
                <div className="second-inputs">
                  
                  <AddressPopup />
                </div>
                 )
                }

                
               
                <div className="third-inputs">
                    

                    {/* <div>
                    <label htmlFor="state">State</label>
                    <br/>
                    <select name="state" id="state">
                    <option value="Lagos">Lagos</option>
                    </select> 
                    </div> */}

                   

                </div>
                
                <div className="ship-chck">
                    {/* <input type="checkbox" />
                    <p>Ship to a different address</p> */}
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
                <p className="bld">{priceTotal} NGN</p>
              </div>

              <div className="sb-line2">
                <p className="lght">Shipping</p>
                <p className="bld">{deliveryFee} NGN</p>
              </div>

              <div className="sb-line3">
                <p className="lght">Total:</p>
                <p className="bld">{priceTotal + deliveryFee} NGN</p>
              </div>
              <div className="payment-box">
                
                
                
                
                <PaystackButton className="paystack-button" {...componentProps} />
                

              </div>
            </aside>
         </div>
            
        <Footer />
        </div>
    );
}