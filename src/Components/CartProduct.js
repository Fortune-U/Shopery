import '../Styles/cartproduct.css';
import close from '../Assets/Close.svg';
import ingm from '../Assets/apple.png'

export default function CartProduct() {
    return(
        <div className="ct-wrp">
            <div className="img-txt">
                <div className='small-img'>
                    <img  src={ingm} alt=''/>
                </div>
                
                <p>Green apple</p>
            </div>
            <p className='prc'>Price</p>
            <div className='add-cart-btns'>
                <div>
                            <button>-</button>
                            <p>5</p>
                            <button>+</button>
                            </div>
            </div>
            <p className='sb-ttl'>$70</p>
            <button className='rmv-prd-btn'><img src={close} alt='' /></button>


        </div>
    );
}