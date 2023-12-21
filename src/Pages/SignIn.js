import Footer from "../Components/Footer";
import '../Styles/signin.css'

export default function SignIn() {
    return(
    <div className="signin-wrp">
      <div className="signin-bd">
            <p className="signinhd">Sign In</p>
            <form>
                <input type="text" className="s-inp1" placeholder="Email" />
                <input type="text" className="s-inp2" placeholder="Password" />
                
                <div className="rmb-fgp-ctn">
                    <div className="rmb-ctn">
                    <input type="checkbox" name="checkbox" />
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
                <p className="dha">Don't have account?<bold className="rg"> Register</bold></p>
                </div>
                
                

            </form>
      </div>
      <Footer />
    </div>
    );
}