import React from 'react'
import { firebase, auth, provider } from '../../firebase';

// styles
import '../../assets/styles/Common.css'
import '../../assets/styles/SignUpForm.css'

// images
import siteLogo from '../../assets/img/companyName.png'
import googleLogo from '../../assets/img/Login Form/Google Icon.png'

function SignUp() {
    // const [mynumber, setnumber] = useState("");
    // const [otp, setotp] = useState('');
    // const [show, setshow] = useState(false);
    // const [final, setfinal] = useState('');

    // // Sent OTP
    // const signin = () => {


    //     if (mynumber === "" || mynumber.length < 10) return;

    //     let verify = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    //     auth.signInWithPhoneNumber(mynumber, verify).then((result) => {
    //         setfinal(result);
    //         alert("code sent")
    //         setshow(true);
    //     })
    //         .catch((err) => {
    //             alert(err);
    //             window.location.reload()
    //         });
    // }

    const gsign = () => {
        console.log("button clicked")
        auth.signInWithPopup(provider).catch(alert);
    }

    // Validate OTP
    // const ValidateOtp = () => {
    //     if (otp === null || final === null)
    //         return;
    //     final.confirm(otp).then((result) => {
    //         // success
    //     }).catch((err) => {
    //         alert("Wrong code");
    //     })
    // }
    const logout = () => {
        auth.signOut();
    }

    return (
        <div className='SignUpOuterContainer'>
            <div className="LoginFormContainer">
                <img src={siteLogo} alt="" className="companyLogo" />
                <div className="SignUpInnerContainer">

                    <div className="SignUpForm">
                        <label htmlFor="">
                            Your Name :  <br /><br />
                            <input type="text" placeholder='Your Name' id="nameInput" />
                        </label>
                        <label htmlFor="phoneNumber">
                            Phone Number : <br /><br />
                            <input type="text" placeholder='10 digit Mobile Number' id="phoneNumber" />
                        </label>
                        <div className="buttonSendSignUp">
                            <button className="sendBtnSignUp">Send OTP</button>
                        </div>
                    </div>
                    <br />
                    <div className="OTPEntry">
                        <p className="otpHeading">Enter OTP</p>
                        <div className="OTPInputs">
                            <input type="text" name="" id="" className='inputOTP' />
                        </div>
                    </div>
                    <button className="SignUpBtn">Sign Up</button>

                    <br />

                    <button className="SignUpGoogleBtn" onClick={gsign} > <img src={googleLogo} alt="" /> Sign in with Google</button>

                    <h5 className="googleaccount">Already have an account? <a href="">Login</a></h5>
                    {/* <button style={{ "marginLeft": "20px" }}
                        onClick={logout}>
                        Logout
                    </button> */}
                </div>
            </div>
        </div>
    )
}

export default SignUp