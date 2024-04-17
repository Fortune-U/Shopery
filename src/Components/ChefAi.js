//AS YOU MET THIS CODE SO SHALL YOU LEAVE IT IN JESUS NAME (--WORKING)

import { useState,useEffect } from 'react';
import '../Styles/slidein.css';
import React from 'react';
import send from '../Assets/send.png';
import close from '../Assets/Close.svg'
import FruitCard from './FruitCard';



export default function ChefAi () {
    

    // const toggleSlideIn = () => {
    //   setIsOpen(!isOpen);
    // };

    const [inputValue, setInputValue] = useState('');
    const [response, setResponse] = useState('');
    const [prodData, setProdData] = useState([]);
    const [productData, setProductData] = useState([]);
    const [matchTextRes, setMatchTextRes] = useState('');
    const [isTyping, setIsTyping] = useState(false); // Flag for typing state

    const typeWriter = (text) => {
        const chars = text.split('');
        let i = 0;
        const typingSpeed = 10; // Adjust delay between characters for desired speed
      
        return new Promise((resolve) => {
          const typewriterInterval = setInterval(() => {
            if (i === chars.length) {
              clearInterval(typewriterInterval);
              resolve();
              return;
            }
      
            // Simulate typing effect with a short delay
            setTimeout(() => {
              // Update a temporary variable to store typed text progressively
              let typedText = chars.slice(0, i + 1).join('');

              // Replace \n with <br/> for line break in JSX
            typedText = typedText.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index !== typedText.length - 1 && <br />} {/* Add <br/> except for the last line */}
            </React.Fragment>
          ));

              setResponse(typedText); // Update response state with the typed part
              i++;
            }, typingSpeed);
          }, typingSpeed);
        });
      };
//   const updateProductData = () => {
//     // Assuming newData is an array of product data
//     const newData = prodData; // Your new data
//     setProductData(newData); // Update productData state with newData
//   };

  useEffect(() => {
    fetch('https://shopery.onrender.com/api/v1/tag/productstags')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setProdData(data);
      })
      .catch((error) => {
        console.error('API Error:', error);
      });

    // updateProductData();
  }, []); // Run once when the component mount
    
  
 
 

  console.log(prodData)

//   const handleKeyDown = (event) => {
//     if (event.key === 'Enter' && isTyping) {
//       event.preventDefault(); // Prevent form submission on Enter key press while typing
//     }
//   };

  const getInputValue = (event) => {
    setInputValue(event.target.value)
  }

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (isTyping) return; // Prevent submission if typing is in progress

    setIsTyping(true); // Set typing state to true (disable button)

    try {
      const response = await fetch("https://shopery.onrender.com/api/v1/cheftiti", {
        method: "POST",
        credentials: "include",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          language: "english",
          prompt: inputValue
        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setMatchTextRes(data.result);
    //   setResponse(data.result);
      setInputValue('');
      setResponse(''); // Clear response before typing effect (optional, depends on desired behavior)
      await typeWriter(data.result); // Call typewriter function after clearing response (if needed)
    } catch (error) {
      console.error('Error:', error);
    }finally {
        setIsTyping(false); // Enable button after typing (regardless of success/failure)
      }
  };

  console.log(matchTextRes)

// Function to extract objects from the JSON data that contain matched tags
    function extractObjectsFromText(text, data) {
    const matchedObjects = [];
    data.forEach(item => {
        if (item.Tags) {
            item.Tags.forEach(tag => {
                if (text.toLowerCase().includes(tag.toLowerCase())) {
                    matchedObjects.push(item);
                }
            });
        }
    });
    return matchedObjects;
    }

    // Example usage
    const text = matchTextRes;
    const matchedObjects = extractObjectsFromText(text, prodData);
    console.log("Matched Objects:", matchedObjects);
    console.log(text)

  
  
/// map matched products 
    const matchedProd = matchedObjects.map(card=>{
        return(
            <div className='matchcomp'>
        <FruitCard
        key={card.id}
        card={card}
        />
        </div>
        )
    });
    
  

    return(
        <div className='slide-in'>
            {/* <div>
                <img src={logo} alt='' />
            </div> */}
            <div className='res-ctn'>
            {/* <div>
                Hi im nedu your online grocecry shopper and assistant
                <br/>
                I can assist in food recipes and ingridents to prepare your favourite meals
                <br/>
                what can i help you with;
            </div> */}
            <div className='close-btn'>
                <img src={close} alt='' />
            </div>
            <p className='ttl'>Nwa boi</p>
            <div className='response-container'>
            <div className='response-typewriter'>{response}</div>
            </div>
            <div className='matched-prod-ctn'>
            <div className='matched-prod'>
                {matchedProd}
                
            </div>
            </div>
            </div>
            
            <div className='form-ctn'>
        <form onSubmit={handlesubmit}>
            <input 
            typeof='text'
            value={inputValue}
            onChange={getInputValue}
            placeholder='Enter Prompt'
            disabled={isTyping}
            />
            <button typeof='submit' className='send-btn'><img src={send} alt='send button' /></button>
            
        </form>
        </div>
        

      
    </div>
    );
}