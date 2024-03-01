import React, { useState } from 'react';
import Verificationsteps from './Verificationsteps';
import Inputbox from './Inputbox';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Continuebutton from './Continuebutton';
import '../static/css/setpassword.css';


function SetPassword() {

    const [showPassword, ] = useState(false);

 
    return (
        <>
            <div className='step-container' style={{ margin: '2%' }}>
                <Verificationsteps />
            </div>
            <div className="setpassword-container col-12" style={{ display: 'flex', justifyContent: 'center', marginTop: '5%', }}>

                <div className='password-sub-container col-12 ' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', maxWidth: '600px', }}>
                    <div className='pagetitle' style={{ fontSize: '30px', textAlign: 'center' }}>
                        <h1 style={{ marginBottom: '5%', fontSize: '38px', textAlign: 'center' }}>Set Password</h1>
                    </div>


                    <div className="form-password col-9" style={{ marginBottom: '6%', marginTop: '5%' }}>
                        <div className="password-input" style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
                            <label htmlFor="password">Password</label>
                            <Inputbox />
                            <div style={{ position: 'absolute', top: '70%', transform: 'translateY(-50%)', right: '20px', cursor: 'pointer' }}>
                                {!showPassword ? <FaEye /> : <FaEyeSlash />}
                            </div>
                           
                        </div>
                    </div>

                    <div className="formpassword col-9">
                        <div className="password-input" style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
                            <label htmlFor="password">Confirm Password</label>
                            <Inputbox />
                            <div style={{ position: 'absolute', top: '70%', transform: 'translateY(-50%)', right: '20px', cursor: 'pointer' }}>
                                {!showPassword ? <FaEye /> : <FaEyeSlash />}
                            </div>
                        </div>
                    </div>

                    <div className='password-btn col-9'>
                        <Continuebutton />
                    </div>

                    <div className="toast">

                    </div>

                </div>

            </div>

        </>



    );
}

export default SetPassword
