import '../Styles/footer.css';
import { Outlet, Link } from "react-router-dom";

export default function Footer() {
    return(
        <div className="footer-wrapper">
            <section className='section-one'>
                <div className='foot-logo'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                    <path d="M31.2749 4.8428C27.4022 4.8428 21.9311 5.16683 19.1352 7.96126C17.9247 9.17176 17.3202 11.1451 17.4771 13.3787C17.4975 13.6737 17.6937 13.925 17.9756 14.0181C18.256 14.1096 18.5641 14.0239 18.7559 13.7987C20.3108 11.9691 22.2435 10.5029 24.5046 9.44062C24.6964 9.34907 24.9231 9.34178 25.1295 9.41446C25.3111 9.47985 25.4535 9.60335 25.5276 9.76179C25.6816 10.0873 25.6322 10.516 25.1207 10.7572C25.0917 10.7717 25.0655 10.7906 25.0365 10.8037C25.0263 10.8081 25.0147 10.8066 25.006 10.811C19.4346 13.4296 16.6954 17.9983 15.4514 22.6964C14.5446 16.814 12.6294 13.3511 10.8202 11.2251C9.51095 9.52787 8.22341 8.62832 7.47943 8.11976C7.34136 8.02528 6.92435 7.74049 6.7514 7.56754C6.46803 7.28417 6.46803 6.8235 6.7514 6.54013C7.03477 6.2582 7.49687 6.2582 7.81218 6.57208C7.88923 6.6404 8.01272 6.72759 8.16966 6.83222L8.29902 6.91941C9.35108 7.64015 11.31 8.97851 13.0479 11.8601C13.2034 12.1173 13.5042 12.2554 13.7963 12.2002C14.0928 12.1479 14.3252 11.9197 14.3834 11.6247C14.7627 9.68768 14.5927 6.81328 12.8649 5.0855C10.069 2.2925 4.59789 1.96847 0.726671 1.96847C0.32553 1.9684 0 2.29393 0 2.695C0 6.56765 0.324032 12.0388 3.11846 14.8347C4.28387 16.0001 6.08147 16.5233 7.86736 16.5233C9.32486 16.5233 10.7533 16.1585 11.8476 15.5264C13.3399 18.6187 14.5316 23.2383 14.5316 30.305C14.5316 30.7061 14.8571 31.0316 15.2582 31.0316C15.6592 31.0316 15.9848 30.7061 15.9848 30.305C15.9848 26.3626 16.6605 21.6311 19.173 17.7366C20.18 18.7205 21.9137 19.3439 23.8347 19.402C23.9306 19.4049 24.0251 19.4063 24.1195 19.4063C26.0711 19.4063 27.796 18.7946 28.8815 17.7076C31.6773 14.9117 31.9999 9.44055 31.9999 5.56783C32.0015 5.16683 31.6774 4.8428 31.2749 4.8428Z" fill="#00B307"/>
                    </svg>
                    <p>Eko-bazaar</p>
                </div>
                <div className='section-one-blk2'>
                    <p className='blk1'>Suscribe to our Newsletter </p>
                    
                    <p className='blk2-light'>Subscribe to get latest news and updates.</p>
                    
                </div>
                <div>
                <input className='news-input' type="text" name="sub" placeholder="Your email address"/>
                <button className='subscribe'>Subscribe</button>
                </div>
                
            </section>
            
            <section className='section-two'>
                <div className='left'>
                    <h3 className='left-head'>About Shopery</h3>
                    <p className='left-desc'> we are your trusted partner in providing fresh, organic, and wholesome groceries right at your doorstep.</p>
                    <span>
                    <p className='bold'>+2349066021425</p>
                    <p className='lighter'>or</p>
                    <p className='bold'>fortuneeziefula3@gmail.com</p>
                    </span>
                    
                </div>
                <div>
                    
                    <ul>
                    <h3>My Account</h3>
                        <li><Link to="/account">My Account</Link></li>
                        <li><Link to ="/account">Order History</Link></li>
                        <li><Link to="/cart">Shopping Cart</Link></li>
                        <li>Wishlist</li>
                        <li>Settings</li>
                    </ul>
                </div>
                <div>
                
                    <ul>
                    <h3>Helps</h3>
                        <li><Link to="/contactus">Contact</Link></li>
                        <li><Link to="/faq" > Faqs </Link></li>
                        <li>Terms & Conditions</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div>
                
                    <ul>
                    <h3>Proxy</h3>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/shop">Shop</Link></li>
                        <li>Product</li>
                        <li>Product Details</li>
                        <li>Track Order</li>
                    </ul>
                </div>
                <div >
                    <h3>Download our Mobile App</h3>
                    <div className='downloads'>
                        <div>

                        
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
                    <g clipPath="url(#clip0_2056_14942)">
                        <path d="M25.4242 22.0659C25.0158 23.0169 24.5115 23.9238 23.9192 24.7725C23.127 25.9013 22.4789 26.6824 21.9796 27.1164C21.2055 27.828 20.3754 28.1932 19.487 28.2136C18.8494 28.2136 18.0806 28.0322 17.1852 27.6641C16.2868 27.2978 15.4614 27.1158 14.7066 27.1158C13.915 27.1158 13.0662 27.2978 12.158 27.6641C11.2486 28.0322 10.5159 28.2241 9.95591 28.2428C9.10425 28.2795 8.25491 27.9044 7.40675 27.1164C6.866 26.6439 6.18991 25.8354 5.37908 24.6897C4.50933 23.4659 3.79416 22.0472 3.23416 20.429C2.6345 18.682 2.3335 16.9897 2.3335 15.3517C2.3335 13.4751 2.73891 11.8569 3.55091 10.5007C4.18966 9.41103 5.03841 8.55237 6.10125 7.9212C7.14394 7.29723 8.33368 6.96145 9.54875 6.9482C10.2254 6.9482 11.1127 7.15762 12.2157 7.56887C13.3153 7.98128 14.0212 8.1907 14.3309 8.1907C14.5619 8.1907 15.3465 7.9457 16.6759 7.45803C17.9336 7.00537 18.9947 6.81812 19.8638 6.8922C22.2199 7.08237 23.9897 8.01103 25.1663 9.68403C23.0599 10.9604 22.0175 12.7483 22.0385 15.0419C22.0572 16.8287 22.7052 18.3156 23.9792 19.4957C24.5567 20.044 25.2013 20.4675 25.9182 20.768C25.7679 21.2059 25.6032 21.6388 25.4242 22.0659ZM20.0213 0.805701C20.0213 2.2057 19.5097 3.51353 18.4901 4.72337C17.2592 6.16245 15.7712 6.9937 14.1571 6.86245C14.1354 6.68634 14.1245 6.50906 14.1244 6.33162C14.1244 4.98762 14.7095 3.54912 15.749 2.37253C16.2682 1.77695 16.9273 1.2817 17.7277 0.886784C18.5268 0.497701 19.2817 0.282451 19.9922 0.245117C20.0126 0.432367 20.0213 0.619617 20.0213 0.805117V0.805701Z" fill="white"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_2056_14942">
                        <rect width="28" height="28" fill="white" transform="translate(0 0.245117)"/>
                        </clipPath>
                    </defs>
                    </svg>
                    <span>
                        <p className='lighter'>Download on the</p>
                        <p className='bold'>App store</p>
                    </span>
                    </div>
                   
                    
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <g clipPath="url(#clip0_2056_14950)">
                        <path d="M15.0652 11.7299L4.7188 1.35472L17.8828 8.91232L15.0652 11.7299ZM2.0176 0.745117C1.408 1.06432 1 1.64512 1 2.40112V23.0891C1 23.8451 1.408 24.4259 2.0176 24.7451L14.05 12.7427L2.0176 0.745117ZM21.9532 11.3219L19.192 9.72352L16.1116 12.7475L19.192 15.7715L22.0096 14.1731C22.8532 13.5023 22.8532 11.9927 21.9532 11.3219ZM4.7188 24.1403L17.8828 16.5827L15.0652 13.7651L4.7188 24.1403Z" fill="white"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_2056_14950">
                        <rect width="24" height="24" fill="white" transform="translate(0 0.245117)"/>
                        </clipPath>
                    </defs>
                    </svg>
                    <span className='dwnd-span'>
                        <p className='lighter'>Download on the</p>
                        <p className='bold'>Google Play</p>
                    </span>
                    </div>
                    </div>
                </div>
            </section>
            <div className='section-three-box'>

            
            <section className='section-three'>
                <div>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <g clipPath="url(#clip0_2056_14960)">
                        <path d="M11.9976 2.98875H13.6409V0.12675C13.3574 0.08775 12.3824 0 11.2469 0C8.87764 0 7.25464 1.49025 7.25464 4.22925V6.75H4.64014V9.9495H7.25464V18H10.4601V9.95025H12.9689L13.3671 6.75075H10.4594V4.5465C10.4601 3.62175 10.7091 2.98875 11.9976 2.98875Z" fill="white"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_2056_14960">
                        <rect width="18" height="18" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                    </p>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <g clipPath="url(#clip0_2056_14964)">
                        <path d="M18 3.41888C17.3306 3.7125 16.6174 3.90713 15.8737 4.00163C16.6388 3.54488 17.2226 2.82713 17.4971 1.962C16.7839 2.38725 15.9964 2.68763 15.1571 2.85525C14.4799 2.13413 13.5146 1.6875 12.4616 1.6875C10.4186 1.6875 8.77387 3.34575 8.77387 5.37863C8.77387 5.67113 8.79862 5.95238 8.85938 6.22013C5.7915 6.0705 3.07687 4.60013 1.25325 2.36025C0.934875 2.91263 0.748125 3.54488 0.748125 4.2255C0.748125 5.5035 1.40625 6.63638 2.38725 7.29225C1.79437 7.281 1.21275 7.10888 0.72 6.83775C0.72 6.849 0.72 6.86363 0.72 6.87825C0.72 8.6715 1.99912 10.161 3.6765 10.5041C3.37612 10.5863 3.04875 10.6256 2.709 10.6256C2.47275 10.6256 2.23425 10.6121 2.01038 10.5626C2.4885 12.024 3.84525 13.0984 5.4585 13.1333C4.203 14.1154 2.60888 14.7071 0.883125 14.7071C0.5805 14.7071 0.29025 14.6936 0 14.6565C1.63462 15.7106 3.57188 16.3125 5.661 16.3125C12.4515 16.3125 16.164 10.6875 16.164 5.81175C16.164 5.64863 16.1584 5.49113 16.1505 5.33475C16.8829 4.815 17.4982 4.16588 18 3.41888Z" fill="#B3B3B3"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_2056_14964">
                        <rect width="18" height="18" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                    </p>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M9.24446 0C4.31112 0 1.6875 3.16139 1.6875 6.60855C1.6875 8.20724 2.58079 10.2008 4.01073 10.8331C4.22786 10.931 4.34599 10.8894 4.39437 10.688C4.43712 10.535 4.62501 9.79807 4.71614 9.45042C4.74426 9.33904 4.72964 9.24229 4.63963 9.13766C4.16486 8.58864 3.78797 7.58847 3.78797 6.65017C3.78797 4.24594 5.69943 1.91146 8.95195 1.91146C11.7646 1.91146 13.7323 3.73854 13.7323 6.35204C13.7323 9.30529 12.1696 11.3484 10.1389 11.3484C9.01495 11.3484 8.17792 10.4663 8.44343 9.37505C8.76407 8.07561 9.39297 6.6783 9.39297 5.74113C9.39297 4.90072 8.9182 4.20544 7.94841 4.20544C6.80423 4.20544 5.87606 5.33837 5.87606 6.85943C5.87606 7.82585 6.21808 8.47838 6.21808 8.47838C6.21808 8.47838 5.08628 13.0506 4.87589 13.9045C4.52038 15.3502 4.92427 17.6914 4.95915 17.8928C4.98052 18.0042 5.1054 18.0391 5.17516 17.9479C5.28654 17.8017 6.6546 15.8497 7.03824 14.4389C7.17775 13.9248 7.7504 11.84 7.7504 11.84C8.12729 12.5207 9.21521 13.0911 10.374 13.0911C13.8212 13.0911 16.312 10.0613 16.312 6.30141C16.2997 2.69675 13.2148 0 9.24446 0Z" fill="#B3B3B3"/>
                    </svg>
                    </p>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <g clipPath="url(#clip0_2056_14972)">
                        <path d="M17.9825 5.29205C17.9403 4.33564 17.7857 3.67812 17.5641 3.10836C17.3355 2.50359 16.9839 1.96213 16.5232 1.51201C16.0731 1.05489 15.5281 0.699691 14.9303 0.474702C14.3573 0.253147 13.7032 0.0984842 12.7468 0.0563159C11.7832 0.0105764 11.4773 0 9.03348 0C6.58965 0 6.28376 0.0105764 5.32378 0.0527447C4.36737 0.0949129 3.70985 0.249713 3.14024 0.471131C2.53532 0.699691 1.99386 1.05132 1.54375 1.51201C1.08663 1.96213 0.731566 2.50716 0.50644 3.10493C0.284885 3.67812 0.130222 4.33207 0.0880541 5.28848C0.0423147 6.25203 0.0317383 6.55792 0.0317383 9.00176C0.0317383 11.4456 0.0423147 11.7515 0.0844829 12.7115C0.126651 13.6679 0.281451 14.3254 0.503006 14.8952C0.731566 15.4999 1.08663 16.0414 1.54375 16.4915C1.99386 16.9486 2.53889 17.3038 3.13666 17.5288C3.70985 17.7504 4.3638 17.905 5.32035 17.9472C6.28019 17.9895 6.58622 17.9999 9.03005 17.9999C11.4739 17.9999 11.7798 17.9895 12.7398 17.9472C13.6962 17.905 14.3537 17.7504 14.9233 17.5288C16.133 17.0611 17.0894 16.1047 17.5571 14.8952C17.7785 14.322 17.9333 13.6679 17.9755 12.7115C18.0176 11.7515 18.0282 11.4456 18.0282 9.00176C18.0282 6.55792 18.0247 6.25203 17.9825 5.29205ZM16.3615 12.6411C16.3228 13.5202 16.1752 13.9949 16.0521 14.3114C15.7496 15.0956 15.1273 15.7179 14.3431 16.0204C14.0266 16.1434 13.5485 16.2911 12.6729 16.3297C11.7235 16.372 11.4387 16.3824 9.03705 16.3824C6.63539 16.3824 6.34708 16.372 5.40111 16.3297C4.52203 16.2911 4.04733 16.1434 3.73087 16.0204C3.34064 15.8761 2.98544 15.6476 2.69713 15.3487C2.39824 15.0568 2.16968 14.7052 2.02546 14.315C1.90239 13.9985 1.75473 13.5202 1.71613 12.6447C1.67383 11.6953 1.66339 11.4104 1.66339 9.00876C1.66339 6.60709 1.67383 6.31878 1.71613 5.37295C1.75473 4.49387 1.90239 4.01917 2.02546 3.7027C2.16968 3.31234 2.39824 2.95727 2.7007 2.66883C2.99244 2.36994 3.34407 2.14138 3.73444 1.99729C4.0509 1.87422 4.52918 1.72656 5.40468 1.68783C6.35408 1.64566 6.63896 1.63508 9.04049 1.63508C11.4457 1.63508 11.7305 1.64566 12.6764 1.68783C13.5555 1.72656 14.0302 1.87422 14.3467 1.99729C14.7369 2.14138 15.0921 2.36994 15.3804 2.66883C15.6793 2.96071 15.9079 3.31234 16.0521 3.7027C16.1752 4.01917 16.3228 4.49731 16.3615 5.37295C16.4037 6.32236 16.4143 6.60709 16.4143 9.00876C16.4143 11.4104 16.4037 11.6917 16.3615 12.6411Z" fill="#B3B3B3"/>
                        <path d="M9.03313 4.37793C6.48037 4.37793 4.40918 6.44898 4.40918 9.00188C4.40918 11.5548 6.48037 13.6258 9.03313 13.6258C11.586 13.6258 13.6571 11.5548 13.6571 9.00188C13.6571 6.44898 11.586 4.37793 9.03313 4.37793ZM9.03313 12.0013C7.37703 12.0013 6.03369 10.6581 6.03369 9.00188C6.03369 7.34564 7.37703 6.00244 9.03313 6.00244C10.6894 6.00244 12.0326 7.34564 12.0326 9.00188C12.0326 10.6581 10.6894 12.0013 9.03313 12.0013Z" fill="#B3B3B3"/>
                        <path d="M14.9199 4.19521C14.9199 4.79133 14.4365 5.27469 13.8402 5.27469C13.2441 5.27469 12.7607 4.79133 12.7607 4.19521C12.7607 3.59894 13.2441 3.11572 13.8402 3.11572C14.4365 3.11572 14.9199 3.59894 14.9199 4.19521Z" fill="#B3B3B3"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_2056_14972">
                        <rect width="18" height="18" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                    </p>
                </div>
                <div>
                    <p>Eko-baazar eCommerce &copy; 2023 all rights reserved</p>
                </div>
                <div>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="15" viewBox="0 0 33 15" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.50628 2.04236C6.12856 2.5081 5.52423 2.87545 4.91989 2.82298C4.84435 2.19323 5.14022 1.52413 5.48645 1.11086C5.86417 0.631998 6.52516 0.290888 7.06025 0.264648C7.12321 0.92063 6.87769 1.56349 6.50628 2.04236ZM7.05445 2.94743C6.52204 2.9155 6.03624 3.11428 5.64384 3.27483C5.39133 3.37816 5.17749 3.46565 5.01481 3.46565C4.83225 3.46565 4.60959 3.37348 4.35958 3.26999C4.032 3.13438 3.65749 2.97935 3.26475 2.98679C2.36453 2.99991 1.52727 3.53125 1.06773 4.37747C0.123447 6.0699 0.822213 8.57574 1.73502 9.9533C2.18197 10.6355 2.71707 11.3833 3.42213 11.3571C3.73231 11.3449 3.95544 11.2462 4.18636 11.1441C4.45221 11.0266 4.72838 10.9045 5.1596 10.9045C5.57587 10.9045 5.83997 11.0234 6.09348 11.1376C6.33453 11.2461 6.56602 11.3504 6.90966 11.344C7.6399 11.3309 8.09945 10.6618 8.54641 9.97954C9.02875 9.24734 9.24072 8.53274 9.27288 8.42429L9.27665 8.41175C9.27588 8.41094 9.26992 8.4081 9.25941 8.40309C9.09817 8.32617 7.86576 7.73825 7.85394 6.16173C7.84207 4.83847 8.83146 4.16803 8.9872 4.06249C8.99668 4.05607 9.00307 4.05173 9.00596 4.04948C8.37644 3.07863 7.39439 2.97367 7.05445 2.94743ZM12.1099 11.2721V1.04532H15.7926C17.6937 1.04532 19.022 2.40976 19.022 4.40394C19.022 6.39813 17.6685 7.77569 15.7422 7.77569H13.6333V11.2721H12.1099ZM13.6324 2.38372H15.3888C16.7108 2.38372 17.4662 3.11842 17.4662 4.4107C17.4662 5.70298 16.7108 6.44424 15.3825 6.44424H13.6324V2.38372ZM24.0518 10.0453C23.6489 10.8456 22.7612 11.3507 21.8044 11.3507C20.388 11.3507 19.3996 10.4717 19.3996 9.14658C19.3996 7.83462 20.3565 7.08024 22.1254 6.96873L24.0266 6.85065V6.28651C24.0266 5.45341 23.5041 5.00079 22.5724 5.00079C21.8044 5.00079 21.2441 5.41405 21.1308 6.04379H19.7584C19.8025 4.71871 20.9986 3.75442 22.6165 3.75442C24.3602 3.75442 25.4934 4.70559 25.4934 6.18155V11.272H24.0832V10.0453H24.0518ZM22.213 10.1374C21.4009 10.1374 20.8847 9.73069 20.8847 9.1075C20.8847 8.46464 21.382 8.09073 22.3326 8.0317L24.026 7.92018V8.49744C24.026 9.45517 23.2454 10.1374 22.213 10.1374ZM30.1701 11.6719C29.5594 13.4628 28.8607 14.0532 27.375 14.0532C27.2617 14.0532 26.884 14.04 26.7958 14.0138V12.7871C26.8903 12.8002 27.1232 12.8133 27.2428 12.8133C27.9164 12.8133 28.2941 12.5182 28.527 11.7507L28.6655 11.298L26.0845 3.85265H27.6772L29.4713 9.89424H29.5028L31.2969 3.85265H32.8455L30.1701 11.6719Z" fill="white"/>
                    </svg>
                    </p>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="12" viewBox="0 0 32 12" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M8.22836 10.9889H5.50223L3.45797 2.96049C3.36094 2.59119 3.15492 2.2647 2.85187 2.11082C2.09557 1.72412 1.26218 1.41637 0.353027 1.26115V0.952062H4.74461C5.35071 0.952062 5.80528 1.41637 5.88104 1.95561L6.94172 7.74673L9.66652 0.952062H12.3169L8.22836 10.9889ZM13.8325 10.9889H11.2579L13.378 0.952062H15.9526L13.8325 10.9889ZM19.2828 3.73268C19.3586 3.1921 19.8132 2.88301 20.3435 2.88301C21.1769 2.8054 22.0847 2.96062 22.8424 3.34598L23.2969 1.18501C22.5393 0.875918 21.7059 0.720703 20.9496 0.720703C18.4508 0.720703 16.6325 2.11095 16.6325 4.04043C16.6325 5.50828 17.9204 6.27901 18.8296 6.74331C19.8132 7.20628 20.192 7.51537 20.1162 7.97834C20.1162 8.6728 19.3586 8.98189 18.6023 8.98189C17.6931 8.98189 16.784 8.7504 15.9519 8.3637L15.4974 10.526C16.4065 10.9114 17.3901 11.0666 18.2992 11.0666C21.1011 11.1429 22.8424 9.75395 22.8424 7.66925C22.8424 5.04398 19.2828 4.8901 19.2828 3.73268ZM31.8526 10.9889L29.8084 0.952062H27.6126C27.158 0.952062 26.7034 1.26115 26.5519 1.72412L22.7664 10.9889H25.4168L25.9458 9.52234H29.2023L29.5053 10.9889H31.8526ZM27.9922 3.65534L28.7485 7.43804H26.6284L27.9922 3.65534Z" fill="white"/>
                    </svg>
                    </p>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="20" viewBox="0 0 41 20" fill="none">
                        <path d="M15.5293 19.6767L40.6764 12.0664V15.7061C40.6764 17.899 38.8987 19.6767 36.7058 19.6767H15.5293Z" fill="#FD6020"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M35.9033 1.05881C37.2868 1.05881 38.0477 1.69879 38.0477 2.90765C38.1169 3.83207 37.4943 4.61427 36.6642 4.75649L38.5319 7.38753H37.0793L35.4883 4.8276H35.3499V7.38753H34.174V1.05881H35.9033ZM35.3502 3.97451H35.696C36.457 3.97451 36.8028 3.61896 36.8028 2.97898C36.8028 2.4101 36.457 2.05456 35.696 2.05456H35.3502V3.97451ZM30.0935 7.38753H33.4139V6.32089H31.2695V4.61427H33.3447V3.54763H31.2695V2.12545H33.4139V1.05881H30.0935V7.38753ZM26.6338 5.32536L25.0428 1.05881H23.7977L26.3571 7.52975H26.9797L29.5391 1.05881H28.294L26.6338 5.32536ZM12.5917 4.25841C12.5917 6.03614 13.9751 7.52943 15.7045 7.52943C16.2579 7.52943 16.7421 7.38722 17.2263 7.17389V5.7517C16.8804 6.17836 16.3962 6.4628 15.8428 6.4628C14.736 6.4628 13.8368 5.60949 13.8368 4.47174V4.32952C13.7676 3.19177 14.6669 2.19625 15.7737 2.12514C16.327 2.12514 16.8804 2.40957 17.2263 2.83623V1.41404C16.8113 1.12961 16.2579 1.0585 15.7737 1.0585C13.9751 0.91628 12.5917 2.40957 12.5917 4.25841ZM10.4469 3.47653C9.75519 3.1921 9.54767 3.04988 9.54767 2.69433C9.61684 2.26768 9.96271 1.91213 10.3778 1.98324C10.7236 1.98324 11.0695 2.19657 11.3462 2.481L11.9688 1.62769C11.4845 1.20104 10.862 0.916601 10.2394 0.916601C9.27097 0.845492 8.44088 1.62769 8.37171 2.62322V2.69433C8.37171 3.54764 8.71758 4.04541 9.82436 4.40095C10.1011 4.47206 10.3778 4.61428 10.6544 4.7565C10.862 4.89872 11.0003 5.11204 11.0003 5.39648C11.0003 5.89425 10.5853 6.3209 10.1702 6.3209H10.1011C9.54767 6.3209 9.06345 5.96535 8.85593 5.46759L8.09501 6.24979C8.51006 7.03199 9.34014 7.45865 10.1702 7.45865C11.277 7.52976 12.1763 6.67645 12.2454 5.5387V5.32537C12.1763 4.47206 11.8304 4.04541 10.4469 3.47653ZM6.43543 7.38753H7.61139V1.05881H6.43543V7.38753ZM0.970703 1.05881H2.70005H3.04592C4.70609 1.12992 6.0204 2.5521 5.95122 4.25872C5.95122 5.18314 5.53618 6.03645 4.84444 6.67644C4.22188 7.1742 3.46096 7.45864 2.70005 7.38753H0.970703V1.05881ZM2.49264 6.3205C3.04603 6.39161 3.6686 6.17828 4.08364 5.82273C4.49868 5.39608 4.70621 4.8272 4.70621 4.18722C4.70621 3.61835 4.49868 3.04947 4.08364 2.62282C3.6686 2.26727 3.04603 2.05394 2.49264 2.12505H2.14677V6.3205H2.49264Z" fill="white"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M20.7548 0.912109C19.0254 0.912109 17.5728 2.33429 17.5728 4.18313C17.5728 5.96086 18.9562 7.45416 20.7548 7.52527C22.5533 7.59637 23.9368 6.10308 24.0059 4.25424C23.9368 2.4054 22.5533 0.912109 20.7548 0.912109V0.912109Z" fill="#FD6020"/>
                        </svg>
                    </p>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="31" height="19" viewBox="0 0 31 19" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M21.5585 18.392C26.515 18.392 30.533 14.4219 30.533 9.52438C30.533 4.62692 26.515 0.656738 21.5585 0.656738C19.3371 0.656738 17.3042 1.45422 15.7371 2.77525C14.17 1.45432 12.1372 0.656897 9.91585 0.656897C4.9594 0.656897 0.941406 4.62708 0.941406 9.52454C0.941406 14.422 4.9594 18.3922 9.91585 18.3922C12.1372 18.3922 14.1701 17.5947 15.7373 16.2737C17.3044 17.5946 19.3372 18.392 21.5585 18.392Z" fill="#ED0006"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M15.7368 16.274C17.6667 14.6476 18.8904 12.2272 18.8904 9.52438C18.8904 6.82159 17.6667 4.40122 15.7368 2.77473C17.3039 1.45401 19.3365 0.656738 21.5576 0.656738C26.5141 0.656738 30.5321 4.62692 30.5321 9.52438C30.5321 14.4219 26.5141 18.392 21.5576 18.392C19.3365 18.392 17.3039 17.5948 15.7368 16.274Z" fill="#F9A000"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M15.737 16.2736C17.6665 14.6471 18.8899 12.227 18.8899 9.5245C18.8899 6.82201 17.6665 4.40188 15.737 2.77539C13.8075 4.40188 12.584 6.82201 12.584 9.5245C12.584 12.227 13.8075 14.6471 15.737 16.2736Z" fill="#FF5E00"/>
                        </svg>
                    </p>
                    <p></p>
                </div>
            </section>
            </div>
            </div>
        
    );
}