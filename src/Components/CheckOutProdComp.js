import compImg from '../Assets/Vegetable.png';
import '../Styles/checkoutprodcomp.css';

export default function CheckOutProdComp () {
    return(
        <div className="copm-wrp">
            <div className='comp-blk'>
            <div className="comp-img"><img src={compImg} alt=''/></div>
            <div className="comp-desc">Red capiscum x5</div>
            </div>
           
            <div className="comp-price">$85</div>

        </div>
    );
}