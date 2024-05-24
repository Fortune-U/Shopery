//import compImg from '../Assets/Vegetable.png';
import '../Styles/checkoutprodcomp.css';

export default function CheckOutProdComp (props) {
    return(
        <div className="copm-wrp">
            <div className='comp-blk'>
            <div className="comp-img"><img src={props.card.Image} alt=''/></div>
            <div className="comp-desc">{props.card.name} x {props.card.qty}</div>
            </div>
           
            <div className="comp-price">N{props.card.price}</div>

        </div>
    );
}