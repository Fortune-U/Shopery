//import bannerImg from '../Assets/banner-img.png';
import '../Styles/banner2.css';
import { Outlet, Link } from "react-router-dom"

export default function Banner(props) {
  
    return(
        <div className='banner-wrapper-2'>
            <div className='banner-img-wrapper-2'>
            <img src={props.card.image} alt='' />
            </div>
            
            <p className='text1-2'>{props.card.title}</p>
            <p className='text2-2'>{props.card.description}</p>
            {/* <p>{props.card.validFrom}</p>
            <p>{props.card.offer}</p> */}
            <button className='banner-btn-2'>
                <p><Link className='shopb-link-now' to="/shop" >Shop Now</Link> </p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="14" viewBox="0 0 17 14" fill="none">
                    <path d="M16 7.18274H1" stroke="#00B307" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.9502 1.15771L16.0002 7.18172L9.9502 13.2067" stroke="#00B307" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
            </button>
        </div>
    );
}