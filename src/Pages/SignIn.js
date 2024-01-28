import Footer from "../Components/Footer";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import '../Styles/signin.css'

export default function SignIn() {
  const [auth, setAuth] = useState({
    email:"",
    password:"",
    //isRemembered:false,
  })
   
  const navigate = useNavigate();

  function handleSubmit(event){
    event.preventDefault()

    fetch('https://shopery.onrender.com/api/v1/auth/login', {
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
        if (response.message === "Success") {
            navigate("/")
           
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
    <div className="signin-wrp">
      <div className="signin-bd">
            <p className="signinhd">Sign In</p>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                className="s-inp1" 
                placeholder="Email"  
                name="email"
                value={auth.email}
                onChange={handleChange}
                />

                <input type="password" 
                className="s-inp2" 
                placeholder="Password" 
                name="password" 
                value={auth.password}
                onChange={handleChange}  />
                
                <div className="rmb-fgp-ctn">
                    <div className="rmb-ctn">
                    <input type="checkbox" 
                    name="isRemembered" 
                    id="rememberme"
                    checked={auth.isRemembered}
                    />
                    <label for ="checkbox" className="rmb-me">Remeber me</label>
                    </div>
                    
                    <div className="fgp-ctn">
                        Forgot Password
                    </div>
                </div>


                <div className="s-btn-ctn">
                <button className="sign-lgn">Login</button>
                </div>
                
                <div className="dha-rg-ctn">
                <p className="dha" >Don't have account? <Link to="/signup" className="rg">Register</Link></p>
                </div>
                
                

            </form>
      </div>
      <Footer />
    </div>
    );
}