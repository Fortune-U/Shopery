import bannerImg from '../Assets/banner-img.png';
import '../Styles/banner.css';

export default function Banner() {
    return(
        <div className='banner-wrapper'>
            <div className='banner-img-wrapper'>
            <img src={bannerImg} alt='' />
            </div>
            
            <p className='text1'>Summer Sale</p>
            <p className='text2'>75% off</p>
            <p></p>
            <button className='banner-btn'>
                <p>Shop Now </p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="14" viewBox="0 0 17 14" fill="none">
                    <path d="M16 7.18274H1" stroke="#00B307" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.9502 1.15771L16.0002 7.18172L9.9502 13.2067" stroke="#00B307" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
            </button>
        </div>
    );
}