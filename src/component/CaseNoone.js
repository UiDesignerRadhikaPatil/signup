import React from 'react';
import Inputbox from './Inputbox';
import Buttoncomponent from './Buttoncomponent';
import Verificationsteps from './Verificationsteps';
import { NavLink } from "react-router-dom";
import '../static/css/casenoone.css';


function CaseNoone() {
    return (
        <>
            <div className='step-container' style={{ margin: '2%' }}>
                <Verificationsteps />
            </div>
            <div className="signupform-container col-12" style={{ display: 'flex', justifyContent: 'center', marginTop: '7%' }}>
                <div className="signupformsub-container col-6" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', maxWidth: '1000px', width: '100%' }}>
                    <div className='col-12' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', maxWidth: '600px', }}>
                        <div className='page-title col-12' style={{ fontSize: '30px', textAlign: 'center' }}>
                            <h1 style={{ marginBottom: '10px', fontSize: '38px', textAlign: 'center' }}>Sign up</h1>
                            <p style={{ color: '#696969', fontSize: '14px', textAlign: 'center' }}>Sign up your firm and start upgrading your workflow</p>
                        </div>

                        <div className='col-12' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', width: '70%', marginTop: '3%' }}>
                                <label style={{ fontSize: '16px', flexDirection: 'column' }}>Email</label>
                                <Inputbox type="email" name="email" id="email" />
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', width: '70%', marginLeft: '0.5%', marginTop: '1%' }}>
                                <div style={{ display: 'flex', alignItems: 'center', marginRight: '5px' }}>
                                    <input type="checkbox" style={{ marginRight: '5px', width: '15px', height: '15px' }} />
                                </div>
                                <label htmlFor="terms" style={{ color: '#696969', fontSize: '14px', marginTop: "2%" }}>
                                    I agree to PMS's <NavLink href='#' style={{ color: 'rgb(58, 145, 245)' }}>Terms of Services</NavLink> and <NavLink href='#' style={{ color: 'rgb(58, 145, 245)' }}>Privacy Policy</NavLink>.
                                </label>
                            </div>


                            <div className='account-btn col-11' style={{ display: 'flex', justifyContent: 'center', }}>
                                <Buttoncomponent />
                            </div>

                            <div className="col-6" style={{ alignItems: 'center', display: 'flex', textAlign: 'center', marginTop: "2%" }}>
                                <p className="sign-in-link" style={{ color: '#696969' }}>
                                    Already have an account? <NavLink to="/adminlogin">Sign in</NavLink>
                                </p>
                            </div>

                            {/* <div className="toast">
                    <ToastContainer />
                  </div> */}
                        </div>
                    </div>
                </div>
            </div>

        </>



    );

}

export default CaseNoone
