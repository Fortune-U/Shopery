import Footer from "./Footer";
import '../Styles/checkout.css';
import CheckOutProdComp from "./CheckOutProdComp";

export default function CheckOut() {
    return(
        <div className="checkout-wrp">
         <div className="checkout-bd">
            <main>
                <p className="bill-add">Billing Address</p>
              <form>
                <div className="first-inputs">
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
                    
                    
                </div>
                <div className="second-inputs">
                    <label htmlFor="address">Street Address</label>
                    <br/>
                    <input type="text" placeholder="6 eddy okeke" name="address" />
                </div>
                <div className="third-inputs">
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

                    <div>
                    <label htmlFor="">Phone</label>
                    <br/>
                    <input type="text" placeholder="+23490"/>
                    </div>
                </div>
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
              <div className="it-cmps"><CheckOutProdComp /><CheckOutProdComp /></div>
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
                <p className="bld">85$</p>
              </div>
              <div className="payment-box">
                <p>Payment Method</p>
                <form>
                <input type="radio"  name="pay" id="cod" />
                <label htmlFor="cod">Cash on delivery</label>
                <br/>
                <input type="radio"  name="pay" id="card" />
                <label htmlFor="card">Card</label>
                <br/>
                <input type="radio"  name="pay" id="bt" />
                <label htmlFor="bt">Bank transfer</label>
                <br/>
                <input type="radio"  name="pay" id="crypto" />
                <label htmlFor="crypto">Crypto</label>
                <br/>
                <button>Place Order</button>
                </form>
                

              </div>
            </aside>
         </div>
            
        <Footer />
        </div>
    );
}