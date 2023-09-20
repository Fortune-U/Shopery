//import AliceCarousel from 'react-alice-carousel';
import { useEffect, useState } from 'react';
import '../Styles/hero.css'
import FruitCard from './FruitCard';
import ProductCard from './ProductCard';
import Banner from './Banner';
import Category from './Category';
import Banner2 from './Banner2';
import TestimonialCard from './TestimonialCard';
import a from '../Assets/Instagram Post toma.png';
import b from '../Assets/Instagram Post.png';
import c from '../Assets/instagram 1.png';
import d from '../Assets/Instagram Post4.png';
import e from '../Assets/Instagram Post6.png';
import f from '../Assets/3.png';

export default function Hero() {

    

 const  [categoryData,setcategoryData] = useState([]);
 const  [featuredProdData,setfeaturedProdData] = useState([]);
 const  [bestDealProdData,setBestDealProdData] = useState([]);
 const  [hotDealsProdData,setHotDealsProdData] = useState([]);
 const  [topRatedProdData,setTopRatedProdData] = useState([]);
   
 useEffect(() => {
    
    fetch('https://shopery.onrender.com/api/v1/category')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setcategoryData(data);
      })

      //fetch featured products
      fetch('https://shopery.onrender.com/api/v1/product/featured')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setfeaturedProdData(data);
      })

      //fetch hot deals 
      fetch('https://shopery.onrender.com/api/v1/product/hotdeal')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setHotDealsProdData(data);
      })

      //fetch best deals
      fetch('https://shopery.onrender.com/api/v1/product/bestseller')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setBestDealProdData(data);
      })

      //fetch top rated
      fetch('https://shopery.onrender.com/api/v1/product/toprated')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setTopRatedProdData(data);
      })
      .catch((error) => {
        console.error('API Error:', error);
        // Handle the error, e.g., display an error message to the user
      });
  }, []);  


//   const productCard = data.map(card=>{
//     return(<ProductCard
//    key={card.id}
//    card={card}
//    />);
// })

console.log(categoryData);



  const categoryComponents = categoryData.map(card=>{
    return(<Category 
    key={card.uuid}
    card={card}
    />);
  })

  const featuredComponents = featuredProdData.map(card=>{
    return(<FruitCard 
    key={card.uuid}
    card={card}
    />);
  })

  const bestSellerComponents = bestDealProdData.map(card=>{
    return(<ProductCard 
    key={card.uuid}
    card={card}
    />);
  })

  const hotDealsComponents = hotDealsProdData.map(card=>{
    return(<ProductCard 
    key={card.uuid}
    card={card}
    />);
  })

  const topRatedComponents = topRatedProdData.map(card=>{
    return(<ProductCard 
    key={card.uuid}
    card={card}
    />);
  })

        
      
    return(
        <div className='pagewrapper'>
            <div className='title-text'>Featured products</div>
                <div className='card-container'>
                    {featuredComponents}                   
                </div>
            <div className='mid-wrapper'>
                
            <div className='product-card-container'>
            
                <section className='hot-deals'>   
                <h4>Hot Deals</h4>   
                {hotDealsComponents}      
                </section>
                <section className='best-sellers'>
                <h4>Best Sellers</h4> 
                {bestSellerComponents}
                </section>
                <section className='top-rated'>
                <h4>Top Rated</h4> 
                {topRatedComponents}
                </section>
                
                
            </div>
                <Banner />     
            </div>

            <div>
                <p className='title-text'>Top Category</p>

                <div className='category-container'>
                    {categoryComponents}

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
                    <path d="M16 7.00049H1" stroke="#00B307" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.9502 0.975586L16.0002 6.99959L9.9502 13.0246" stroke="#00B307" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </p>
                </div>  
                </span>
                
            <div className='newest-products'>
            {featuredComponents}
            </div>
            </div>

            <div className='testimonial-wrapper'>
                <div className='testimonial-top'> 
              <p className='title-text'>Client Testimonial</p>
              <p className='test-btn'>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" viewBox="0 0 17 15" fill="none">
                    <path d="M1.25 7.72583H16.25" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.2998 1.70093L1.2498 7.72493L7.2998 13.7499" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" viewBox="0 0 17 15" fill="none">
                    <path d="M15.75 7.72583H0.75" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.7002 1.70093L15.7502 7.72493L9.7002 13.7499" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
              </p>
              </div>
              <div className='testimony'>
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
              </div>
            </div>

            <div>
              <div className='title-text'>Follow us on Instagram</div>
              <div className='ig-img-wrapper'>
                <div><img src={a} alt='' /></div>
                <div><img src={b} alt='' /></div>
                <div><img src={c} alt='' /></div>
                <div><img src={d} alt='' /></div>
                <div><img src={e} alt='' /></div>
                <div><img src={f} alt='' /></div>
              </div>
            </div>
            
        </div>
    );
    
}