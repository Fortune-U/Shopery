import '../Styles/accsettings.css';
import profile from '../Assets/dummy.jpg'

export default function AccSettings() {
    return(
    <div className="acc-wrapper">
        <div className='ctn-tt'>
        <p className='act-set'>Account Settings</p>
        <div className="acc-top">
        
           <main>
            <form>
            <label htmlFor="firstname">First Name</label>
            <br/>
            <input type="text" id="firstname" placeholder="Dianne" />
            <br/>
            <label htmlFor="">Last Name</label>
            <br/>
            <input type="text" id="lastname" placeholder="Russell" />
            <br/>
            <label htmlFor="email">Email Address</label>
            <br/>
            <input type="text" id="email" placeholder="dianne.russell@gmail.com" />
            <br/>
            <label htmlFor="pnumber">Phone Number</label>
            <br/>
            <input type="text" id="pnumber" placeholder="(603) 555-0123" />
            <br/>
            <button className="sv-chng">Save Changes</button>
            </form>
           </main>

           <aside>
            <div className="edit-prof-ctn">
                <div className="prof-photo-ctn"><img src={profile} alt='' /></div>
                <button className="chs-image">Choose image</button>
            </div>
           </aside>
        </div>
        </div>

        <div className="acc-mid">
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

              </form>
            </main>

        </div>

        <div className="acc-btm">
            <p>Change Password</p>

            <form>
                <label htmlFor="pass">Current Password</label>
                <br />
                <input type="password" placeholder="Password"  id="pass"/>

                <div className='pass-shi'>
                    <div>
                    <label htmlFor="n-pass">New Password</label>
                    <br />
                    <input type="password" id="n-pass" />
                    </div>
                    
                    <div>
                    <label htmlFor="c-pass">Confirm Password</label>
                    <br />
                    <input type="password" id="n-pass" />
                    </div>

                    
                </div>

                <button className="change-pass">Change Password</button>
            </form>
        </div>

    </div>
    );
}