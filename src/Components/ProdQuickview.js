import {useState,useEffect} from 'react';
import '../Styles/productquickview.css';
import imagge from '../Assets/Product Image.png';
import imagge1 from '../Assets/thing1.png';
import imagge2 from '../Assets/thing2.png';
import imagge3 from '../Assets/thing3.png';
import imagge4 from '../Assets/thing4.png';
import facebook from '../Assets/facebook 1.svg';
import twitter from '../Assets/twitter 1.svg';
import pinterest from '../Assets/pinterest 1.svg';
import instagram from '../Assets/instagram 1.svg';
import React from 'react';

export default function (props) {


    let onStar = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
    <path d="M8.31008 11.9111L11.8566 14.1577C12.31 14.4446 12.8725 14.0177 12.7381 13.4884L11.7138 9.45805C11.6848 9.34579 11.6882 9.22764 11.7234 9.11718C11.7586 9.00673 11.8243 8.90846 11.9129 8.83368L15.0933 6.18712C15.5106 5.83949 15.2958 5.14593 14.7586 5.11105L10.6056 4.84105C10.4938 4.83312 10.3866 4.79359 10.2964 4.72707C10.2061 4.66055 10.1367 4.56977 10.096 4.4653L8.5469 0.564927C8.50472 0.454081 8.42984 0.358673 8.33219 0.291355C8.23455 0.224037 8.11875 0.187988 8.00015 0.187988C7.88155 0.187988 7.76575 0.224037 7.6681 0.291355C7.57046 0.358673 7.49558 0.454081 7.4534 0.564927L5.90427 4.4653C5.86372 4.56988 5.79429 4.66077 5.70406 4.7274C5.61383 4.79402 5.50652 4.83364 5.39465 4.84162L1.24171 5.11161C0.705084 5.14593 0.489084 5.83949 0.907022 6.18712L4.0874 8.83424C4.17588 8.90898 4.2415 9.00715 4.27673 9.11749C4.31195 9.22783 4.31534 9.34587 4.28652 9.45805L3.33702 13.1959C3.17558 13.8309 3.85115 14.3434 4.39452 13.9986L7.69077 11.9111C7.78342 11.8522 7.89093 11.8209 8.00071 11.8209C8.11049 11.8209 8.218 11.8522 8.31065 11.9111H8.31008Z" fill="#FF8A00"/>
    </svg> 

    return(
        <div className="modal" >
                        <div className='quickview-Wrapper'>
            <div className='row1'>
                <div className="image-slider">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M19 15.5L12 8.5L5 15.5" stroke="#999999" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                    <img src={imagge1} alt='' />
                    <img src={imagge2} alt='' />
                    <img src={imagge3} alt='' />
                    <img src={imagge4} alt='' />
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M19 8.5L12 15.5L5 8.5" stroke="#999999" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>    
                </div>
            </div> 
            <div className='row2'>
                <div className="prod-image">
                    <img src={props.prod.productThumbnail} alt='' />
                </div>
            </div>
            <div className='row3'>
                <div className="prod-info">
                    <div className='title-blk'>
                        <p className='title-name'>{props.prod.productName}</p>
                        <p className='title-badge'>In stock</p>
                    </div>
                    <div className='attributes'>
                        <p>{onStar}{onStar}{onStar}{onStar}{onStar}</p>
                        <p>4 Review</p>
                        <p>&middot;</p>
                        <p className='sku'>SKU:</p>
                        <p>2,534,45</p>
                    </div>
                    <div className='prod-price'>   
                    <div>
                        <p className='old-price'>${}</p> 
                        <p className='new-price'> ${props.prod.productPrice}</p>
                        </div>
                        <p className='discount-price'>-{props.prod.productDiscount}% Off</p>
                    </div>
                    <div className='socials'>
                        <div>
                        <p className='brand'>Brand:</p>
                        {/* <img src={} alt="" /> */}
                        </div>
                        <div className='social-links'>
                            <p>Share item:</p>
                             <img src={facebook} alt="" />
                            <img src={twitter} alt="" />
                            <img src={pinterest} alt="" />
                            <img src={instagram} alt="" /> 
                        </div>

                    </div>
                    <p className='desc-text'>{props.prod.productDescription}</p>
                    <div className='cart-funcs'>
                        <div className='cart-btns'>
                            <button>-</button>
                            <p>5</p>
                            <button>+</button>
                        </div>
                        <div className='cart-btn-ctn'>
                            <button className='add-to-cart'>Add to Cart
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
  <path d="M5.16667 7.33333H2.66667L1 16.5H16L14.3333 7.33333H11.8333M5.16667 7.33333V4.83333C5.16667 2.99239 6.65905 1.5 8.5 1.5V1.5C10.3409 1.5 11.8333 2.99238 11.8333 4.83333V7.33333M5.16667 7.33333H11.8333M5.16667 7.33333V9.83333M11.8333 7.33333V9.83333" stroke="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                            </button>
                        </div>
                        <div>
                            <button className='fave'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M9.9996 17.5451C-6.66672 8.33336 4.99993 -1.66664 9.9996 4.65674C14.9999 -1.66664 26.6666 8.33336 9.9996 17.5451Z" stroke="#2C742F" stroke-width="1.5"/>
                            </svg>
                            </button>
                        </div>
                    </div>
                    <span>
                        <p className='ctn'>Category:</p>
                        <p className='obj'>vegetables</p>
                    </span>
                    <span>
                        <p className='ctn'>Tag:</p>
                        <p className='obj'>vegtables Healthy Chinese</p>
                    </span>
                </div>

                </div>
                </div>
        </div>
    );
}