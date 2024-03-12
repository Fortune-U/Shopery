import '../Styles/adminorderitem.css';
import vec from '../Assets/Vector.png';

export default function AdminOrderItem () {
    return (
        <div  className="ad-ot-wrp">
            <p className="ad-ot1">11:20am</p>
            <p className="ad-ot2">David Brown</p>
            <p className="ad-ot3">david@gmail.com</p>
            <p className="ad-ot4">ikeja,lagos</p>
            <p className="ad-ot5">lettuce,orange</p>
            <p className="ad-ot6">N3000.00</p>
            <button className='ad-ot-bt'><img src={vec} /></button>

        </div>
    );
}