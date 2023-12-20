import '../Styles/blog.css'
import Footer from "../Components/Footer";
import illustrattion from '../Assets/Illustration404.svg'
import { Link } from 'react-router-dom';

export default function Blog() {
    return(
    <div className="blog-wrapper">
       
        <div className="blog-bd">
            <div className='blg-img'>
            <img src={illustrattion} alt="" />
            </div>

            <div className='blg-txt-ctn'>
                <p className='blg-txt1'>Oops! page not found</p>
                <p className='blg-txt2'>Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros. Maecenas sagittis tortor at metus mollis</p>
                <button><Link className='blg-btn' to='/' >Back to Home</Link></button>
            </div>
            
            
        </div>
       <Footer />
    </div>
    );
}