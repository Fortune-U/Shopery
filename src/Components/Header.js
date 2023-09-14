import '../Styles/header.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import headImg from '../Assets/fruit-bskt.png';
import headImg2 from '../Assets/Image.png';
import headImg3 from '../Assets/Image1.png';

function CustomDot({ index, isActive }) {
    // Define your custom dot rendering logic here
    const dotStyle = {
      backgroundColor: isActive ? '#00B207' : '#B4CCB4', // Example: Change color based on active state
      width: isActive ? '16px' : '10px',
      height: isActive ? '8px' : '10px',
      borderRadius: isActive ? '50px' : '50%',
    };
  
    return <div style={dotStyle}></div>;
  }

export default function Header() {
  

    return(
        <div className='header-wrapper'>
            <div className='header'>
                <main>
                    <p className='welcm-txt'>Welcome to Shopery</p>
                    <h1 className='disp-txt'>Fresh & Healthy <br/> Organic Food</h1>
                    <span className='sales-txt'>Sale up to <p className='disc-txt'>30% OFF</p></span>
                    <p className='shipping-txt'>Free shipping on your order. we deliver, you enjoy</p>
                    <button className='shp-nw-btn'>
                    <p>shop now</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                        <path d="M16 7.50055H1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9.9502 1.47552L16.0002 7.49953L9.9502 13.5245" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        
                    </button>
                </main>
                
                <aside> 
                    <AliceCarousel autoPlay activeIndex={0} 
                    autoPlayInterval={1000} infinite 
                    disableButtonsControls 
                    dotsDisabled={false} // Enable dots
                    items={3}
                    autoPlayStrategy='none'
                    renderDotsItem={CustomDot}
                    
                    >
                   <p><img src={headImg} alt='fruit basket' /></p> 
                   <p><img src={headImg2} alt='fruit basket' /></p>
                   <p><img src={headImg3} alt='fruit basket' /></p>
                    
                    
                    </AliceCarousel>
                     {/* <img src={headImg} alt='fruit basket' />  */}
                </aside>
            </div>
            
            <div className='info-block'>
                
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M32.7021 26.3042C31.7247 26.3042 30.7962 26.687 30.0957 27.3793C29.3952 28.0798 29.0043 28.992 29.0043 29.9694C29.0043 30.9468 29.3871 31.8591 30.0957 32.5595C30.8043 33.2519 31.7247 33.6347 32.7021 33.6347C34.7058 33.6347 36.3348 31.9894 36.3348 29.9694C36.3348 27.9495 34.7058 26.3042 32.7021 26.3042ZM32.7021 32.0057C31.5781 32.0057 30.6333 31.0772 30.6333 29.9694C30.6333 28.8617 31.5781 27.9332 32.7021 27.9332C33.8098 27.9332 34.7058 28.8454 34.7058 29.9694C34.7058 31.0935 33.8098 32.0057 32.7021 32.0057ZM33.6469 14.0949C33.5003 13.9564 33.3048 13.8831 33.1012 13.8831H28.9228C28.4749 13.8831 28.1083 14.2496 28.1083 14.6976V21.3765C28.1083 21.8245 28.4749 22.191 28.9228 22.191H35.5528C36.0008 22.191 36.3673 21.8245 36.3673 21.3765V16.9049C36.3673 16.6768 36.2696 16.4569 36.0986 16.3022L33.6469 14.0949ZM34.7383 20.562H29.7373V15.504H32.7835L34.7383 17.2633V20.562ZM12.8121 26.3042C11.8347 26.3042 10.9061 26.687 10.2057 27.3793C9.50519 28.0798 9.11423 28.992 9.11423 29.9694C9.11423 30.9468 9.49705 31.8591 10.2057 32.5595C10.9143 33.2519 11.8347 33.6347 12.8121 33.6347C14.8157 33.6347 16.4447 31.9894 16.4447 29.9694C16.4447 27.9495 14.8157 26.3042 12.8121 26.3042ZM12.8121 32.0057C11.688 32.0057 10.7432 31.0772 10.7432 29.9694C10.7432 28.8617 11.688 27.9332 12.8121 27.9332C13.9198 27.9332 14.8157 28.8454 14.8157 29.9694C14.8157 31.0935 13.9198 32.0057 12.8121 32.0057ZM7.37935 27.306H5.74221V25.1395C5.74221 24.6915 5.37569 24.325 4.92771 24.325C4.47974 24.325 4.11322 24.6915 4.11322 25.1395V28.1205C4.11322 28.5685 4.47974 28.935 4.92771 28.935H7.37935C7.82733 28.935 8.19385 28.5685 8.19385 28.1205C8.19385 27.6726 7.82733 27.306 7.37935 27.306ZM11.5089 22.867C11.5089 22.419 11.1423 22.0525 10.6944 22.0525H0.814498C0.366524 22.0525 0 22.419 0 22.867C0 23.315 0.366524 23.6815 0.814498 23.6815H10.6944C11.1423 23.6815 11.5089 23.3231 11.5089 22.867ZM2.46793 19.9267L12.3478 19.9837C12.7958 19.9837 13.1623 19.6253 13.1704 19.1773C13.1786 18.7212 12.8121 18.3547 12.3641 18.3547L2.48422 18.2977C2.47607 18.2977 2.47607 18.2977 2.47607 18.2977C2.0281 18.2977 1.66158 18.6561 1.66158 19.104C1.65343 19.5602 2.01996 19.9267 2.46793 19.9267ZM4.12951 16.2289H14.0094C14.4573 16.2289 14.8239 15.8623 14.8239 15.4144C14.8239 14.9664 14.4573 14.5999 14.0094 14.5999H4.12951C3.68153 14.5999 3.31501 14.9664 3.31501 15.4144C3.31501 15.8623 3.68153 16.2289 4.12951 16.2289ZM39.6986 15.1293L33.8668 10.2993C33.7202 10.1771 33.541 10.112 33.3456 10.112H26.4875V7.17979C26.4875 6.73182 26.121 6.3653 25.673 6.3653H4.92771C4.47974 6.3653 4.11322 6.73182 4.11322 7.17979V13.1419C4.11322 13.5899 4.47974 13.9564 4.92771 13.9564C5.37569 13.9564 5.74221 13.5899 5.74221 13.1419V7.99429H24.8666V27.306H18.1877C17.7398 27.306 17.3732 27.6726 17.3732 28.1205C17.3732 28.5685 17.7398 28.935 18.1877 28.935H28.1328C28.5807 28.935 28.9473 28.5685 28.9473 28.1205C28.9473 27.6726 28.5807 27.306 28.1328 27.306H26.4956V11.741H33.0605L38.371 16.1393L38.314 27.2897H37.4669C37.0189 27.2897 36.6524 27.6563 36.6524 28.1042C36.6524 28.5522 37.0189 28.9187 37.4669 28.9187H39.1203C39.5683 28.9187 39.9348 28.5604 39.9348 28.1124L40 15.7646C39.9919 15.5203 39.886 15.284 39.6986 15.1293Z" fill="#00B307"/>
                </svg>
                <div className='block1'>
                    <p>Free Shipping</p>
                    <p className='light'>Free shipping on your order</p>
                </div>

                
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <g clipPath="url(#clip0_570_125897)">
                        <path d="M33.6848 15.2101V13.6723C33.6848 9.9916 32.3822 6.57143 30.0209 4.03361C27.6007 1.42857 24.273 0 20.6427 0H19.3738C15.7436 0 12.4159 1.42857 9.99569 4.03361C7.63434 6.57143 6.33182 9.9916 6.33182 13.6723V15.2101C3.46628 15.4034 1.18896 17.7899 1.18896 20.7059V23.1092C1.18896 26.1429 3.65955 28.6134 6.69317 28.6134H9.79401C10.3486 28.6134 10.8024 28.1597 10.8024 27.605V16.2017C10.8024 15.6471 10.3486 15.1933 9.79401 15.1933H8.34863V13.6723C8.34863 7.02521 13.0881 2.01681 19.3654 2.01681H20.6343C26.9201 2.01681 31.6512 7.02521 31.6512 13.6723V15.1933H30.2058C29.6512 15.1933 29.1974 15.6471 29.1974 16.2017V27.5966C29.1974 28.1513 29.6512 28.605 30.2058 28.605H31.6175C31.2058 33.8655 27.5839 35.084 25.9033 35.3613C25.4411 33.9412 24.1049 32.916 22.5335 32.916H20.0125C18.0629 32.916 16.4747 34.5042 16.4747 36.4538C16.4747 38.4034 18.0629 40 20.0125 40H22.5419C24.1722 40 25.5419 38.8908 25.9537 37.395C26.7772 37.2773 28.0797 36.9832 29.3738 36.2269C31.1974 35.1597 33.357 32.9832 33.6427 28.5966C36.5251 28.4202 38.8108 26.0252 38.8108 23.1008V20.6975C38.8192 17.7899 36.5503 15.395 33.6848 15.2101ZM8.80241 26.5882H6.70997C4.7856 26.5882 3.22258 25.0252 3.22258 23.1008V20.6975C3.22258 18.7731 4.7856 17.2101 6.70997 17.2101H8.80241V26.5882ZM22.5419 37.9832H20.0125C19.1722 37.9832 18.4915 37.3025 18.4915 36.4622C18.4915 35.6218 19.1722 34.9412 20.0125 34.9412H22.5419C23.3822 34.9412 24.0629 35.6218 24.0629 36.4622C24.0629 37.3025 23.3822 37.9832 22.5419 37.9832ZM36.8024 23.1008C36.8024 25.0252 35.2394 26.5882 33.315 26.5882H31.2226V17.2101H33.315C35.2394 17.2101 36.8024 18.7731 36.8024 20.6975V23.1008Z" fill="#00B307"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_570_125897">
                        <rect width="40" height="40" fill="white"/>
                        </clipPath>
                    </defs>
                    </svg>
                <div className='block2'>
                    <p>Customer Support 24/7</p>
                    <p className='light'>Instant access to support</p>
                </div>

                
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <g clipPath="url(#clip0_570_125864)">
                        <path d="M35.9803 34.6678L33.6785 8.72697C33.6371 8.21362 33.2065 7.82447 32.6849 7.82447H27.8329C27.8246 3.51066 24.314 0 20.0001 0C15.6863 0 12.1757 3.51066 12.1674 7.82447H7.3154C6.80205 7.82447 6.3715 8.21362 6.32182 8.72697L4.02002 34.6678C4.02002 34.7009 4.02002 34.7257 4.02002 34.7589C4.02002 37.6485 6.67785 40 9.94012 40H30.0602C33.3224 40 35.9803 37.6485 35.9803 34.7589C35.9803 34.7257 35.9803 34.7009 35.9803 34.6678ZM20.0001 1.98717C23.221 1.98717 25.8375 4.6036 25.8457 7.82447H14.1546C14.1628 4.6036 16.7793 1.98717 20.0001 1.98717ZM30.0602 38.0046H9.94012C7.78736 38.0046 6.03203 36.5721 6.00719 34.792L8.22619 9.81163H12.1674V13.2975C12.1674 13.8439 12.6145 14.291 13.161 14.291C13.7075 14.291 14.1546 13.8439 14.1546 13.2975V9.81163H25.8457V13.2975C25.8457 13.8439 26.2928 14.291 26.8393 14.291C27.3858 14.291 27.8329 13.8439 27.8329 13.2975V9.81163H31.7741L33.9931 34.8002C33.9683 36.5721 32.2129 38.0046 30.0602 38.0046Z" fill="#00B307"/>
                        <path d="M24.1317 20.6831L18.2696 26.5453L15.8767 24.1524C15.4875 23.7632 14.8583 23.7632 14.4691 24.1524C14.08 24.5415 14.08 25.1708 14.4691 25.56L17.5658 28.6566C17.7562 28.8471 18.0129 28.9464 18.2696 28.9464C18.5262 28.9464 18.7746 28.8471 18.9733 28.6566L25.5393 22.0907C25.9284 21.7015 25.9284 21.0723 25.5393 20.6831C25.1501 20.3022 24.5208 20.3022 24.1317 20.6831Z" fill="#00B307"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_570_125864">
                        <rect width="40" height="40" fill="white"/>
                        </clipPath>
                    </defs>
                    </svg>
                <div className='block3'>    
                    <p>100% Secure Payment</p>
                    <p className='light'>We ensure your money is safe</p>
                </div>

                
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <g clipPath="url(#clip0_570_125861)">
                            <path d="M38.3957 9.43014C38.3957 9.27818 38.3619 9.12621 38.2944 8.98269C38.1593 8.69565 37.8976 8.50148 37.6105 8.44238L20.4134 0.101309C20.1348 -0.0337695 19.8056 -0.0337695 19.527 0.101309L2.161 8.51836C1.8233 8.67877 1.6038 9.01646 1.58691 9.39637V9.40481C1.58691 9.41325 1.58691 9.4217 1.58691 9.43858V30.5614C1.58691 30.9498 1.80642 31.3043 2.161 31.4732L19.527 39.8903C19.5354 39.8903 19.5354 39.8903 19.5439 39.8987C19.5692 39.9071 19.5945 39.9156 19.6198 39.9325C19.6283 39.9325 19.6367 39.9409 19.6536 39.9409C19.6789 39.9493 19.7043 39.9578 19.7296 39.9662C19.738 39.9662 19.7465 39.9747 19.7549 39.9747C19.7802 39.9831 19.814 39.9831 19.8393 39.9916C19.8478 39.9916 19.8562 39.9916 19.8647 39.9916C19.8984 39.9916 19.9406 40 19.9744 40C20.0082 40 20.0504 40 20.0842 39.9916C20.0926 39.9916 20.1011 39.9916 20.1095 39.9916C20.1348 39.9916 20.1686 39.9831 20.1939 39.9747C20.2024 39.9747 20.2108 39.9662 20.2192 39.9662C20.2446 39.9578 20.2699 39.9493 20.2952 39.9409C20.3037 39.9409 20.3121 39.9325 20.329 39.9325C20.3543 39.924 20.3797 39.9156 20.405 39.8987C20.4134 39.8987 20.4134 39.8987 20.4219 39.8903L37.8385 31.4479C38.1846 31.279 38.4126 30.9244 38.4126 30.5361V9.45547C38.3957 9.44702 38.3957 9.43858 38.3957 9.43014ZM19.966 2.13592L35.0272 9.43858L29.4805 12.1317L14.4193 4.82904L19.966 2.13592ZM19.966 16.7412L4.90477 9.43858L12.0977 5.95188L27.1589 13.2545L19.966 16.7412ZM3.61309 11.068L18.9529 18.5057V37.3575L3.61309 29.9198V11.068ZM20.9791 37.3575V18.5057L28.1804 15.0106V19.9409C28.1804 20.4981 28.6363 20.954 29.1935 20.954C29.7507 20.954 30.2066 20.4981 30.2066 19.9409V14.0228L36.3695 11.0342V29.886L20.9791 37.3575Z" fill="#00B307"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_570_125861">
                            <rect width="40" height="40" fill="white"/>
                            </clipPath>
                        </defs>
                        </svg>
                    </span>
                <div className='block4'>   
                    <p>Money Back Guarantee</p>
                    <p className='light'>30 Days Money-Back Guarantee</p>
                </div>

            </div>
        </div>
    );
}