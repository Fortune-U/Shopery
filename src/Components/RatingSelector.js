import {useDispatch, useSelector } from "react-redux";
import React, { useState,useEffect } from "react";
import { stars } from "../features/rating";

export default function RatingSelector() {
    const dispatch = useDispatch();
    const rating = useSelector((state) => state.rating.value);
    const [ratings, setRatings] = useState('');
    const [ratedObj,setRatedObj] = useState([]);
    console.log(ratedObj)
    const [isChecked, setIsChecked] = useState({
        5: false,
        4: false,
        3: false,
        2: false,
        1: false,
    });

    const toggleElement = (element) => {
        setIsChecked((prev) => ({
            ...prev,
            [element]: !prev[element],
        }));
    };

    useEffect(() => {
        const fetchProducts = async () => {
            const checkedRatings = Object.keys(isChecked).filter((key) => isChecked[key]);
            const selectedRating = checkedRatings[0];
            const ratedApi = selectedRating ? `https://shopery.onrender.com/api/v1/product/rating/${selectedRating}` : '';

            if (selectedRating) {
                try {
                    const res = await fetch(ratedApi);
                    if (!res.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const data = await res.json();
                    setRatedObj(data);
                } catch (error) {
                    console.error('API Error:', error);
                }
            } else {
                setRatedObj(null);
            }
        };

        fetchProducts();
    }, [isChecked]);

    let onStar = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                <path d="M8.31008 11.9111L11.8566 14.1577C12.31 14.4446 12.8725 14.0177 12.7381 13.4884L11.7138 9.45805C11.6848 9.34579 11.6882 9.22764 11.7234 9.11718C11.7586 9.00673 11.8243 8.90846 11.9129 8.83368L15.0933 6.18712C15.5106 5.83949 15.2958 5.14593 14.7586 5.11105L10.6056 4.84105C10.4938 4.83312 10.3866 4.79359 10.2964 4.72707C10.2061 4.66055 10.1367 4.56977 10.096 4.4653L8.5469 0.564927C8.50472 0.454081 8.42984 0.358673 8.33219 0.291355C8.23455 0.224037 8.11875 0.187988 8.00015 0.187988C7.88155 0.187988 7.76575 0.224037 7.6681 0.291355C7.57046 0.358673 7.49558 0.454081 7.4534 0.564927L5.90427 4.4653C5.86372 4.56988 5.79429 4.66077 5.70406 4.7274C5.61383 4.79402 5.50652 4.83364 5.39465 4.84162L1.24171 5.11161C0.705084 5.14593 0.489084 5.83949 0.907022 6.18712L4.0874 8.83424C4.17588 8.90898 4.2415 9.00715 4.27673 9.11749C4.31195 9.22783 4.31534 9.34587 4.28652 9.45805L3.33702 13.1959C3.17558 13.8309 3.85115 14.3434 4.39452 13.9986L7.69077 11.9111C7.78342 11.8522 7.89093 11.8209 8.00071 11.8209C8.11049 11.8209 8.218 11.8522 8.31065 11.9111H8.31008Z" fill="#FF8A00"/>
                </svg> 

    let offStar =  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                    <path d="M9.31008 13.9111L12.8566 16.1577C13.31 16.4446 13.8725 16.0177 13.7381 15.4884L12.7138 11.4581C12.6848 11.3458 12.6882 11.2276 12.7234 11.1172C12.7586 11.0067 12.8243 10.9085 12.9129 10.8337L16.0933 8.18711C16.5106 7.83949 16.2958 7.14593 15.7586 7.11105L11.6056 6.84105C11.4938 6.83312 11.3866 6.79359 11.2964 6.72707C11.2061 6.66055 11.1367 6.56977 11.096 6.4653L9.5469 2.56493C9.50471 2.45408 9.42984 2.35867 9.33219 2.29136C9.23455 2.22404 9.11875 2.18799 9.00015 2.18799C8.88155 2.18799 8.76574 2.22404 8.6681 2.29136C8.57046 2.35867 8.49558 2.45408 8.4534 2.56493L6.90427 6.4653C6.86372 6.56988 6.79429 6.66077 6.70406 6.7274C6.61383 6.79402 6.50652 6.83364 6.39465 6.84161L2.24171 7.11161C1.70508 7.14593 1.48908 7.83949 1.90702 8.18711L5.0874 10.8342C5.17588 10.909 5.2415 11.0072 5.27673 11.1175C5.31195 11.2278 5.31534 11.3459 5.28652 11.4581L4.33702 15.1959C4.17558 15.8309 4.85115 16.3434 5.39452 15.9986L8.69077 13.9111C8.78342 13.8522 8.89093 13.8209 9.00071 13.8209C9.11049 13.8209 9.218 13.8522 9.31065 13.9111H9.31008Z" fill="#CCCCCC"/>
                    </svg>      
   
    // const toggleRating = (element) => {
    //     setRating((prevState) => ({
    //         ...prevState,
    //         [element]: !prevState[element],
    //     }))
    // }
      
    return(
        <div>
            
                    <form>
                    <p>
                    <input name="" value={5} checked={isChecked[5]} type="checkbox"  
                     onChange={() => {
                            toggleElement(5);
                            setRatings('5');
                            dispatch(stars(rating));
                        }}/>
                    {onStar}{onStar}{onStar}{onStar}{onStar}</p>
                    <p>
                    <input name="" value={4} checked={isChecked[4]} type="checkbox"   
                    onChange={() => {
                            toggleElement(4);
                            setRatings('4');
                            dispatch(stars(rating));
                        }}/>
                    {onStar}{onStar}{onStar}{onStar}{offStar}</p>
                    <p>
                    <input name="" value={3} checked={isChecked[3]} type="checkbox"  id="rate" onChange={() => {
                            toggleElement(3);
                            setRatings('3');
                            dispatch(stars(rating));
                        }}/>
                    {onStar}{onStar}{onStar}{offStar}{offStar}</p>
                    <p>
                    <input name="" value={2} checked={isChecked[2]} type="checkbox"  id="rate" onChange={() => {
                            toggleElement(2);
                            setRatings('2');
                            dispatch(stars(rating));
                        }}/>
                    {onStar}{onStar}{offStar}{offStar}{offStar}</p>
                    <p>
                    <input name="" value={1} checked={isChecked[1]} type="checkbox" id="rate" onChange={() => {
                            toggleElement(1);
                            setRatings('1');
                            dispatch(stars(rating));
                        }} />
                    {onStar}{offStar}{offStar}{offStar}{offStar}</p>
                    </form>
        </div>
    );
}