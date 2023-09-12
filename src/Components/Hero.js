//import AliceCarousel from 'react-alice-carousel';
import '../Styles/hero.css'
import FruitCard from './FruitCard';
import ProductCard from './ProductCard';
import Banner from './Banner';
import Category from './Category';
import Banner2 from './Banner2';

export default function Hero() {
    return(
        <div className='pagewrapper'>
            <div className='title-text'>Featured products</div>
            
                <div className='card-container'>
                
                    <FruitCard />
                    <FruitCard />
                    <FruitCard />
                    <FruitCard />
                    <FruitCard />
                   
                </div>
            <div className='mid-wrapper'>
                
            <div className='product-card-container'>
            
                <section className='hot-deals'>   
                <h4>Hot Deals</h4>         
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </section>
                <section className='best-sellers'>
                <h4>Best Sellers</h4> 
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </section>
                <section className='top-rated'>
                <h4>Top Rated</h4> 
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </section>
                
                
            </div>
               
                    <Banner />
                
            </div>

            <div>
                <p className='title-text'>Top Category</p>

                <div className='category-container'>
                    <Category />
                    <Category />
                    <Category />
                    <Category />
                    <Category />
                    <Category />
                </div>
            </div>

            <div className='banner-section2'>
                    <Banner2 />
                    <Banner2 />
                    <Banner2 />
            </div>
            <div className='newest-wrapper'>
                <span>
                <p className='title-text'>New Products</p>
                <div className='view-ctn'>
                <p className='view-all'>View All</p>
                <p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="14" viewBox="0 0 17 14" fill="none">
                    <path d="M16 7.00049H1" stroke="#00B307" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.9502 0.975586L16.0002 6.99959L9.9502 13.0246" stroke="#00B307" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </p>
                </div>
                
                </span>
                
            <div className='newest-products'>
                
                <FruitCard />
                <FruitCard />
                <FruitCard />
                <FruitCard />
                <FruitCard />
            </div>
            </div>

            <div className='testimonial-wrapper'>
                <div className='testimonial-top'>

               
              <p className='title-text'>Client Testimonial</p>
              <p className='test-btn'>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" viewBox="0 0 17 15" fill="none">
                    <path d="M1.25 7.72583H16.25" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7.2998 1.70093L1.2498 7.72493L7.2998 13.7499" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" viewBox="0 0 17 15" fill="none">
                    <path d="M15.75 7.72583H0.75" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.7002 1.70093L15.7502 7.72493L9.7002 13.7499" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
              </p>
              </div>
            </div>
            
        </div>
    );
}