import '../Styles/dashboard.css';
import dummy from '../Assets/dummy.jpg';
import OrderHistory from '../Pages/OrderHistory';

export default function Dashboard() {
    return (
        <div className="dsh-wrp">

            <div className="tp-sect">
                <div className="ctc-crd">
                    <div className="prf-photo"><img src={dummy} alt='' /></div>
                    <p className="disp-name">Dianne Russel</p>
                    <p className="disp-sts">Customer</p>
                    <p className="disp-act">Edit Profile</p>
                </div>
                <div className="bill-addr">
                    <p className="bil1">Billing address</p>
                    <p className="bil2">Dianne Russell</p>
                    <p className="bil3">4140 Parker Rd. Allentown, New Mexico 31134</p>
                    <p className="bil4">dainne.ressell@gmail.com</p>
                    <p className="bil5">(671) 555-0110</p>
                    <p className="bil6">Edit Address</p>
                </div>
            </div>

            <div className="btm-bdy">
                <OrderHistory />
            </div>
        
        </div>
    );
}