import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../static/css/casenoone.css';
import Verificationsteps from './Verificationsteps';

function CaseNoone() {
    const [inpval, setInpval] = useState({
        email: "",
        termsCheckbox: false, // Initialize termsCheckbox as a boolean
    });

    const setVal = (e) => {
        const { name, value, type, checked } = e.target;

        setInpval(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const addUserdata = async (e) => {
        e.preventDefault();

        const { email, termsCheckbox } = inpval;

        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            toast.error("Email is required!", { position: "top-right" });
        } else if (!emailRegex.test(email)) {
            toast.error("Invalid email format!", { position: "top-right" });
        } else if (!termsCheckbox) { 
            toast.error("Please agree to the terms!", { position: "top-right" });
        } else {

            console.log("Email:", email);
            toast.success("Successfully Done", { position: "top-right" });
           
        }
    };

    return (
        <>
           
            <div className='step-container' style={{ margin: '2%' }}>
                <Verificationsteps />
            </div>
            
            <div className="signupform-container col-12" style={{ display: 'flex', justifyContent: 'center', marginTop: '7%' }}>
                <div className="signupformsub-container col-6" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', maxWidth: '1000px', width: '100%' }}>
                    <div className='col-12' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', maxWidth: '600px', }}>
                        <div className='page-title col-12' style={{ fontSize: '35px', textAlign: 'center' }}>
                         <b> Sign Up</b>
                        </div>

                        <div className='col-12' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', width: '70%', marginTop: '3%' }}>
                                <label style={{ fontSize: '16px', flexDirection: 'column', color:'GrayText' }}>Email</label>
                                <input
                                    type='email' onChange={setVal} value={inpval.email} name="email" id="email" 
                                    style={{ height: '5vh', width: '100%', border: "1px solid rgb(100, 149, 237)", borderRadius: '10px', textAlign: 'left', fontSize: '12px',   }}
                                />
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', width: '70%', marginLeft: '0.5%', marginTop: '1%' }}>
                                <div style={{ display: 'flex', alignItems: 'center', marginRight: '5px' }}>
                                    <input type="checkbox" onChange={setVal} checked={inpval.termsCheckbox} name="termsCheckbox" style={{ marginRight: '5px', width: '15px', height: '15px' }} />
                                </div>
                                <label htmlFor="terms" style={{ color: '#696969', fontSize: '14px', marginTop: "2%" }}>
                                    I agree to PMS's <NavLink href='#' style={{ color: 'rgb(58, 145, 245)' }}>Terms of Services</NavLink> and <NavLink href='#' style={{ color: 'rgb(58, 145, 245)' }}>Privacy Policy</NavLink>.
                                </label>
                            </div>

                            <div className='account-btn col-11' style={{ display: 'flex', justifyContent: 'center', }}>
                                <div className='button-btn col-12' style={{ display: 'flex', justifyContent: 'center' }}>
                                    <button style={{ marginLeft: '0' }} onClick={addUserdata}>Create Account </button>
                                </div>
                            </div>

                            <div className="col-6" style={{ alignItems: 'center', display: 'flex', textAlign: 'center', marginTop: "2%" }}>
                                <p className="sign-in-link" style={{ color: '#696969' }}>
                                    Already have an account? <NavLink to="/adminlogin">Sign in</NavLink>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
}

export default CaseNoone;
