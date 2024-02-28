import React, { useState } from 'react';
import Verificationsteps from './Verificationsteps';
import Inputbox from './Inputbox';
import Buttoncomponent from './Buttoncomponent';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Nextbutton from './Continuebutton';
import Continuebutton from './Continuebutton';
import '../static/css/setpassword.css';

function SetPassword() {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <>
           <div className='step-container' style={{margin:'2%'}}>
           <Verificationsteps />
           </div>
            <div className="setpasswordform-container col-12" style={{ display: 'flex', justifyContent: 'center', marginTop: '5%', }}>

                <div className='password-sub-container col-12 ' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', maxWidth: '600px', }}>
                    <div className='page-title' style={{ fontSize: '30px', textAlign: 'center' }}>
                        <h1 style={{ marginBottom: '10px', fontSize: '38px', textAlign: 'center' }}>Set Password</h1>
                    </div>

                    <div className='col-12' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div className="form-password col-12" style={{ marginBottom: '10%', width: '70%' }}>
                            <div className="password-input" style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
                                <label htmlFor="password">Password</label>
                                <Inputbox />
                                <div style={{ position: 'absolute', top: '70%', transform: 'translateY(-50%)', right: '20px', cursor: 'pointer' }}>
                                    {!showPassword ? <FaEye /> : <FaEyeSlash />}
                                </div>
                            </div>
                        </div>

                        <div className="form-password col-12" style={{ width: '70%' }}>
                            <div className="password-input" style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
                                <label htmlFor="password">Confirm Password</label>
                                <Inputbox />
                                <div style={{ position: 'absolute', top: '70%', transform: 'translateY(-50%)', right: '20px', cursor: 'pointer' }}>
                                    {!showPassword ? <FaEye /> : <FaEyeSlash />}
                                </div>
                            </div>
                        </div>

                        <div className='col-12' style={{ display: 'flex', justifyContent: 'center', }}>
                            <Continuebutton />
                        </div>

                        <div className="toast">

                        </div>
                    </div>
                </div>

            </div>

        </>



    );
}

export default SetPassword
