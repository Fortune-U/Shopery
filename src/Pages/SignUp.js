import Footer from "../Components/Footer";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import '../Styles/signup.css'


export default function SignUp() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [isAccepted, setIsAccepted] = useState(false);
  const [errors, setErrors] = useState({}); // State for error messages
  const [success, setSuccess] = useState("")

 

  const validateForm = () => {
    const newErrors = {};

    if (!firstName.trim()) {
      newErrors.firstname = 'First Name is required';
    } else if (firstName.length < 3 || firstName.length > 15) {
      newErrors.firstname = 'First Name must be between 3 and 15 characters';
    }

    if (!lastName.trim()) {
      newErrors.lastname = 'Last Name is required';
    } else if (lastName.length < 3 || lastName.length > 15) {
      newErrors.lastname = 'Last Name must be between 3 and 15 characters';
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required';
    }

    if (!cpassword.trim()) {
      newErrors.cpassword = 'Confirm Password is required';
    } else if (password !== cpassword) {
      newErrors.cpassword = 'Passwords do not match';
    }

    if (!isAccepted) {
      newErrors.isAccepted = 'Please accept terms and conditions';
    }
    

    setErrors(newErrors);
    // Return true if no errors, false otherwise
    return Object.keys(newErrors).length === 0;
  };

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
        body: JSON.stringify(
          {firstname:firstName,
            lastname:lastName,
            email:email,
            password:password,
            cpassword:cpassword}
        )
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
            setSuccess('Registered Successfully');
          setTimeout(()=>{
            navigate("/signin")
          },3000);
            
           
        } 
      })
      .catch(error => {
        // Handle errors
        console.error('Error:', error);
  
      })
    
   
    
    
    
  }

  function handleChange(event){
    if (validateForm()) {
      // Form is valid, display success message
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setCpassword('');
      setIsAccepted(false);
      // Handle successful registration (navigate or API call)
    } else {
      console.error('Form validation failed');
    };
    const {name , value, type, checked} = event.target
    switch (name) {
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'cpassword':
        setCpassword(value);
        break;
      case 'isAccepted':
        setIsAccepted(value);
        break;

    
      
      default:
        break;
    }
    
  }

  //Form validation ]]

  
  

  

  // const handleSubmit = (event) => {
  //   event.preventDefault();

    
  // };

    return(
    <div className="signup-wrp">
      <div className="signup-bd">
            <p className="signuphd">Create Account</p>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                className="su-inp1" 
                placeholder="First Name"  
                name="firstName"
                value={firstName}
                onChange={handleChange}
                />
                <div className="err-txt">
                 {errors.firstname && <span className="error">{errors.firstname}</span>}
                 </div>
                <input type="text" 
                className="su-inp2" 
                placeholder="Last Name"  
                name="lastName"
                value={lastName}
                onChange={handleChange}
                />
                <div className="err-txt">
                 {errors.lastname && <span className="error">{errors.lastname}</span>}
                 </div>
                <input type="text" 
                className="su-inp3" 
                placeholder="Email"  
                name="email"
                value={email}
                onChange={handleChange}
                required
                />
                <div className="err-txt">
                 {errors.email && <span className="error">{errors.email}</span>}
                 </div>
                <input type="password" 
                className="su-inp4" 
                placeholder="Password" 
                name="password" 
                value={password}
                onChange={handleChange}  />

                <input type="password" 
                className="su-inp5" 
                placeholder="Confirm Password" 
                name="cpassword" 
                value={cpassword}
                onChange={handleChange}  
                
                />
               <div className="err-txt">
              {password !== cpassword && (
                <span className="error">Passwords do not match</span>
              )}
              </div>
                
                <div className="rmb-fgp-ctn">
                    <div className="rmb-ctn">
                    {/* <input type="checkbox" 
                    name="isAccepted" 
                    id="acc-trms"
                    checked={isAccepted}
                    />
                    <label for ="checkbox" className="rmb-me">Accept all terms & Conditions</label> */}
                    </div>
                    
                   
                </div>
                 
                 <div className="reg-success">
                  {success}
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