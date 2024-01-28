import Footer from "../Components/Footer";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import '../Styles/signup.css'


export default function SignUp() {
  const [auth, setAuth] = useState({
    firstName:"",
    lastName:"",
    email:"",
    profile_img:"test",
    password:"",
    cpassword:"",
    //isRemembered:false,
  })
   
  const navigate = useNavigate();

  function handleSubmit(event){
    event.preventDefault()

    fetch('https://shopery.onrender.com/api/v1/user', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(auth)
      })
      
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Assuming the response is in JSON format
      })
      .then(response => {
        console.log(response)
        if (response.message === "successfully registered") {
            navigate("/signin")
           
        } 
      })
      .catch(error => {
        // Handle errors
        console.error('Error:', error);
  
      })
    
   
    
    
    
  }

  function handleChange(event){
    const {name , value, type, checked} = event.target
    setAuth(prevAuth=>{
      return{
      ...auth,
      [name] : type === 'checkbox' ? checked : value,
      
      }
    })
    
  }

    return(
    <div className="signup-wrp">
      <div className="signup-bd">
            <p className="signuphd">Create Account</p>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                className="su-inp1" 
                placeholder="First Name"  
                name="firstName"
                value={auth.firstName}
                onChange={handleChange}
                />

                <input type="text" 
                className="su-inp2" 
                placeholder="Last Name"  
                name="lastName"
                value={auth.lastName}
                onChange={handleChange}
                />

                <input type="text" 
                className="su-inp3" 
                placeholder="Email"  
                name="email"
                value={auth.email}
                onChange={handleChange}
                required
                />

                <input type="password" 
                className="su-inp4" 
                placeholder="Password" 
                name="password" 
                value={auth.password}
                onChange={handleChange}  />

                <input type="password" 
                className="su-inp5" 
                placeholder="Confirm Password" 
                name="cpassword" 
                value={auth.cpassword}
                onChange={handleChange}  
                
                />
                
                <div className="rmb-fgp-ctn">
                    <div className="rmb-ctn">
                    <input type="checkbox" 
                    name="isAccepted" 
                    id="acc-trms"
                    checked={auth.isAccepted}
                    />
                    <label for ="checkbox" className="rmb-me">Accept all terms & Conditions</label>
                    </div>
                    
                   
                </div>


                <div className="s-btn-ctn">
                <button className="sign-lgn">Create Account</button>
                </div>
                
                <div className="dha-rg-ctn">
                <p className="dha" >Already have an account?<Link to="/signin" className="rg" > Login</Link></p>
                </div>
                
                

            </form>
      </div>
      <Footer />
    </div>
    );
}