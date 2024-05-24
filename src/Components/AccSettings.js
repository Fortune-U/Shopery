import '../Styles/accsettings.css';
import dummyprofile from '../Assets/dummy.jpg'
import { useState, useEffect } from 'react';

export default function AccSettings() {

    const [profile, setProfile] = useState({});
    const [address, setAddress] = useState({});

    const uuid = profile.uuid;

     useEffect(()=>{
        fetch('https://shopery.onrender.com/api/v1/user/profile', {
            method: 'GET',
            credentials: 'include',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            
          })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setProfile(data);
      })
      .catch((error) => {
        console.error('API Error:', error);
      });


      fetch(`https://shopery.onrender.com/api/v1/user/address/${uuid}`, {
            method: 'GET',
            credentials: 'include',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            
          })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setAddress(data);
      })
      .catch((error) => {
        console.error('API Error:', error);
      });
     },[uuid]);

const addy = address.houseNumber + ', ' + address.streetName  + ' ' + address.city + '. ' + address.state

    return(
    <div className="acc-wrapper">
        <div className='ctn-tt'>
        <p className='act-set'>Account Settings</p>
        <div className="acc-top">
        
           <main>
            <form>
            <label htmlFor="firstname">First Name</label>
            <br/>
            <input type="text" id="firstname" placeholder={profile.firstname} readOnly/>
            <br/>
            <label htmlFor="">Last Name</label>
            <br/>
            <input type="text" id="lastname" placeholder={profile.lastname} readOnly/>
            <br/>
            <label htmlFor="email">Email Address</label>
            <br/>
            <input type="text" id="email" placeholder={profile.email} readOnly />
            <br/>
            <label htmlFor="pnumber">Phone Number</label>
            <br/>
            <input type="text" id="pnumber" placeholder={address.addressLine} />
            <br/>
            <button className="sv-chng">Save Changes</button>
            </form>
           </main>

           <aside>
            <div className="edit-prof-ctn">
                <div className="prof-photo-ctn"><img src={profile.profile_img} alt='' /></div>
                
            </div>
           </aside>
        </div>
        </div>

        <div className="acc-mid">
        <main>
                <p className="bill-add">Address</p>
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
                    <input type="text" placeholder={addy} name="address" readOnly/>
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

                </div> */}
                <div className="fourth-inputs">
                    <div>
                    <label htmlFor="">Email Address</label>
                    <br/>
                    <input type="text" placeholder={profile.email} readOnly/>
                    </div>

                    <div>
                    <label htmlFor="">Phone</label>
                    <br/>
                    <input type="text" placeholder={address.addressLine} readOnly/>
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