import '../Styles/navbar.css';
import { useState } from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import SideCart from './SideCart';
import { Outlet, Link } from "react-router-dom"

export default function NavBar() {
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false)
    return(
        <div className="navbar">
           <div className="first-layer">
                <div className="first-layer-left">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20" fill="none">
                    <path d="M16 8.36364C16 14.0909 8.5 19 8.5 19C8.5 19 1 14.0909 1 8.36364C1 6.41068 1.79018 4.53771 3.1967 3.15676C4.60322 1.77581 6.51088 1 8.5 1C10.4891 1 12.3968 1.77581 13.8033 3.15676C15.2098 4.53771 16 6.41068 16 8.36364Z" stroke="#666666" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.5 10.8182C9.88071 10.8182 11 9.71925 11 8.36364C11 7.00803 9.88071 5.90909 8.5 5.90909C7.11929 5.90909 6 7.00803 6 8.36364C6 9.71925 7.11929 10.8182 8.5 10.8182Z" stroke="#666666" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                    <p>Store location- 6 durusonmi-etti, phase 1</p>
                </div>
                <div className="first-layer-right">   
                    <div className="selections"> 
                        <select className="lang" >
                            <option >ENG</option>
                            <option >ESP</option>
                            <option >FRA</option>
                        </select>
                        <select className="currency" >
                            <option >USD</option>
                            <option >NGN</option>
                            <option >GHC</option>
                        </select>
                    </div>
                    <p>
                        Sign In / Sign Up
                    </p>
                </div>
           </div>

            <div className="second-layer">
                <div className="second-layer-one">

                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                    <path d="M31.2749 4.8428C27.4022 4.8428 21.9311 5.16683 19.1352 7.96126C17.9247 9.17176 17.3202 11.1451 17.4771 13.3787C17.4975 13.6737 17.6937 13.925 17.9756 14.0181C18.256 14.1096 18.5641 14.0239 18.7559 13.7987C20.3108 11.9691 22.2435 10.5029 24.5046 9.44062C24.6964 9.34907 24.9231 9.34178 25.1295 9.41446C25.3111 9.47985 25.4535 9.60335 25.5276 9.76179C25.6816 10.0873 25.6322 10.516 25.1207 10.7572C25.0917 10.7717 25.0655 10.7906 25.0365 10.8037C25.0263 10.8081 25.0147 10.8066 25.006 10.811C19.4346 13.4296 16.6954 17.9983 15.4514 22.6964C14.5446 16.814 12.6294 13.3511 10.8202 11.2251C9.51095 9.52787 8.22341 8.62832 7.47943 8.11976C7.34136 8.02528 6.92435 7.74049 6.7514 7.56754C6.46803 7.28417 6.46803 6.8235 6.7514 6.54013C7.03477 6.2582 7.49687 6.2582 7.81218 6.57208C7.88923 6.6404 8.01272 6.72759 8.16966 6.83222L8.29902 6.91941C9.35108 7.64015 11.31 8.97851 13.0479 11.8601C13.2034 12.1173 13.5042 12.2554 13.7963 12.2002C14.0928 12.1479 14.3252 11.9197 14.3834 11.6247C14.7627 9.68768 14.5927 6.81328 12.8649 5.0855C10.069 2.2925 4.59789 1.96847 0.726671 1.96847C0.32553 1.9684 0 2.29393 0 2.695C0 6.56765 0.324032 12.0388 3.11846 14.8347C4.28387 16.0001 6.08147 16.5233 7.86736 16.5233C9.32486 16.5233 10.7533 16.1585 11.8476 15.5264C13.3399 18.6187 14.5316 23.2383 14.5316 30.305C14.5316 30.7061 14.8571 31.0316 15.2582 31.0316C15.6592 31.0316 15.9848 30.7061 15.9848 30.305C15.9848 26.3626 16.6605 21.6311 19.173 17.7366C20.18 18.7205 21.9137 19.3439 23.8347 19.402C23.9306 19.4049 24.0251 19.4063 24.1195 19.4063C26.0711 19.4063 27.796 18.7946 28.8815 17.7076C31.6773 14.9117 31.9999 9.44055 31.9999 5.56783C32.0015 5.16683 31.6774 4.8428 31.2749 4.8428Z" fill="#00B307"/>
                    </svg>

                    <p className="secondlayer-logo-txt">Ecobazar</p>
                </div>
                <div className='search-canvas'>

                
                <div className="second-layer-two">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                <path d="M9.16667 16.3333C12.8486 16.3333 15.8333 13.3486 15.8333 9.66667C15.8333 5.98477 12.8486 3 9.16667 3C5.48477 3 2.5 5.98477 2.5 9.66667C2.5 13.3486 5.48477 16.3333 9.16667 16.3333Z" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.4999 18L13.8749 14.375" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                    <input type="text" name="search" placeholder="search"/>
                    
                </div>
                <button className='srch-btn'>Search</button>
                </div>
                <div className="second-layer-three">
                    <p className="secondlayer-liked">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                        <path d="M15.9995 28.5722C-10.6667 13.8333 7.99999 -2.16666 15.9995 7.95075C24 -2.16666 42.6666 13.8333 15.9995 28.5722Z" stroke="#1A1A1A" strokeWidth="1.5"/>
                        </svg>
                    </p>
                    <p className='bag' onClick={() => setOpen(o => !o)}> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="35" viewBox="0 0 34 35" fill="none">
                        <path d="M11.3333 14.6667H7.08333L4.25 30.25H29.75L26.9167 14.6667H22.6667M11.3333 14.6667V10.4167C11.3333 7.28705 13.8704 4.75 17 4.75V4.75C20.1296 4.75 22.6667 7.28705 22.6667 10.4167V14.6667M11.3333 14.6667H22.6667M11.3333 14.6667V18.9167M22.6667 14.6667V18.9167" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </p>
                    <div className="cart-side">
                        <p className='shp-crt' >Shopping cart:</p>
                        <Popup  open={open} closeOnDocumentClick onClose={closeModal} >
                        
                        <SideCart />
                        </Popup>
                        <p className='amnt'>$57.00</p>
                    </div>
                </div>
            </div>
            <div className="third-layer">
                <div className="third-layer-one">
                    <ul className='nav-link'>
                        <li>
                            <Link to='/'>Home</Link>
                            </li>
                        <li>
                           <Link to="/shop">Shop</Link> 
                            </li>
                        <li><Link to="/">Blog</Link> </li>
                        <li>Pages</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                    </ul>

                </div>
                <div className="third-layer-two">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M17.4359 4.375C18.9193 4.77396 20.2718 5.55567 21.358 6.64184C22.4441 7.72801 23.2258 9.08051 23.6248 10.5639" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16.5306 7.75687C17.4205 7.99625 18.2318 8.46521 18.8833 9.11678C19.5349 9.76835 20.0039 10.5797 20.2433 11.4695" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10.115 13.6517C11.0224 15.5074 12.5263 17.0049 14.3859 17.9042C14.522 17.9688 14.6727 17.9966 14.8229 17.9851C14.9731 17.9736 15.1178 17.9231 15.2425 17.8386L17.9812 16.0134C18.1022 15.9326 18.2414 15.8833 18.3862 15.8698C18.5311 15.8564 18.677 15.8793 18.8107 15.9364L23.9339 18.1326C24.1079 18.2065 24.2532 18.335 24.3479 18.4987C24.4426 18.6623 24.4815 18.8523 24.4589 19.04C24.2967 20.307 23.6784 21.4714 22.7196 22.3154C21.7608 23.1593 20.5273 23.6249 19.25 23.625C15.3049 23.625 11.5214 22.0578 8.73179 19.2682C5.94218 16.4786 4.375 12.6951 4.375 8.75C4.37512 7.47279 4.84074 6.23941 5.68471 5.28077C6.52867 4.32213 7.6931 3.70396 8.96 3.542C9.14771 3.51936 9.33769 3.55832 9.50134 3.653C9.66499 3.74769 9.79345 3.89298 9.86738 4.067L12.0654 9.1945C12.1219 9.32698 12.1449 9.47137 12.1322 9.61485C12.1195 9.75833 12.0716 9.89647 11.9928 10.017L10.1728 12.7977C10.0901 12.923 10.0414 13.0675 10.0313 13.2171C10.0212 13.3668 10.05 13.5165 10.115 13.6517V13.6517Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p>(219) 555-0114</p>
                </div>
            </div>

            <Outlet />
        </div>
        
    );
}