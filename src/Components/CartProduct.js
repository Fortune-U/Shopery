import '../Styles/cartproduct.css';
import close from '../Assets/Close.svg';
import ingm from '../Assets/apple.png'

export default function CartProduct(props) {
    return(
        <div className="ct-wrp">
            <div className="img-txt">
                <div className='small-img'>
                    <img  src={props.card.Image} alt=''/>
                </div>
                
                <p>{props.card.name}</p>
            </div>
            <p className='prc'>{props.card.price}</p>
            <div className='add-cart-btns'>
                <div>
                            <button>-</button>
                            <p>{props.qty}</p>
                            <button>+</button>
                            </div>
            </div>
            <p className='sb-ttl'>${props.card.subtotal}</p>
            <button className='rmv-prd-btn'><img src={close} alt='' /></button>


        </div>
    );
}