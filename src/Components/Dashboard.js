import '../Styles/dashboard.css';
import dummy from '../Assets/dummy.jpg';
import OrderHistory from '../Pages/OrderHistory';
import { useState, useEffect } from 'react';

export default function Dashboard() {
    const [profile, setProfile] = useState({});
    const [address, setAddress] = useState({});
    const [recentOrder, setRecentOrder] = useState([]);

    

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


      fetch(`https://shopery.onrender.com/api/v1/user/my-address`, {
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
        if (data.address && Array.isArray(data.address) && data.address.length > 0) {
          setAddress(data.address[data.address.length - 1]);
        } else {
          // Handle the case where data.address is not defined or empty
          console.error("No addresses found");
        }
      })
      .catch((error) => {
        console.error('API Error:', error);
      });

     
     },[]);
      

     console.log(address)

    return (
        <div className="dsh-wrp">

            <div className="tp-sect">
                <div className="ctc-crd">
                    <div className="prf-photo"><img src={profile.profile_img} alt='' /></div>
                    <p className="disp-name">{profile.firstname}  {profile.lastname} </p>
                    <p className="disp-sts">Customer</p>
                    <p className="disp-act">Edit Profile</p>
                </div>
                <div className="bill-addr">
                    <p className="bil1">Billing address</p>
                    <p className="bil2">{profile.firstname}  {profile.lastname}</p>
                    <p className="bil3">{address.houseNumber}, {address.streetName} {address.city} {address.state}</p>
                    <p className="bil4">{profile.email}</p>
                    <p className="bil5">{address.addressLine}</p>
                    <p className="bil6">Edit Address</p>
                </div>
            </div>

            <div className="btm-bdy">
                <OrderHistory />
            </div>
        
        </div>
    );
}