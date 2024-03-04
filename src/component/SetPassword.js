import React, { useState } from 'react';
import Verificationsteps from './Verificationsteps';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import '../static/css/setpassword.css';
import '../static/css/continuebutton.css';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

function SetPassword() {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleConfirmPasswordPaste = (e) => {
        const pastedText = e.clipboardData.getData('text');
        setConfirmPassword(pastedText);
    };

    const handleSubmit = () => {
        if (!password.match(/^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])(?=.{8,})/)) {
            toast.error('Password must contain at least one number, one letter, one special character, and be at least 8 characters long.');
            return;
        }
        if (password !== confirmPassword) {
            toast.error('Passwords do not match!');
            return;
        }
        // Password validation successful
        toast.success('Password set successfully!');
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);
    };

    return (
        <>
            <ToastContainer />
            <div className='step-container' style={{ margin: '2%' }}>
                <Verificationsteps />
            </div>
            <div className="setpassword-container col-12" style={{ display: 'flex', justifyContent: 'center', marginTop: '5%' }}>
                <div className='password-sub-container col-12 ' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', maxWidth: '600px' }}>
                    <div className='pagetitle' style={{ fontSize: '30px', textAlign: 'center' }}>
                        <h1 style={{ marginBottom: '5%', fontSize: '38px', textAlign: 'center' }}>Set Password</h1>
                    </div>
                    <div className="form-password col-9" style={{ marginBottom: '6%', marginTop: '5%' }}>
                        <div className="password-input" style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
                            <label htmlFor="password">Password</label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={handlePasswordChange}
                                style={{ height: '5vh', width: '100%', border: "1px solid rgb(100, 149, 237)", borderRadius: '10px', textAlign: 'left', fontSize: '12px' }}
                            />
                            <div style={{ position: 'absolute', top: '70%', transform: 'translateY(-50%)', right: '20px', cursor: 'pointer' }} onClick={handleTogglePasswordVisibility}>
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </div>
                        </div>
                    </div>
                    <div className="formpassword col-9">
                        <div className="password-input" style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={confirmPassword}
                                onChange={handleConfirmPasswordChange}
                                onPaste={handleConfirmPasswordPaste} // Allow pasting
                                style={{ height: '5vh', width: '100%', border: "1px solid rgb(100, 149, 237)", borderRadius: '10px', textAlign: 'left', fontSize: '12px' }}
                            />
                            <div style={{ position: 'absolute', top: '70%', transform: 'translateY(-50%)', right: '20px', cursor: 'pointer' }} onClick={handleTogglePasswordVisibility}>
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </div>
                        </div>
                    </div>
                    <div className='password-btn col-9'>
                        <div className='contiunebutton-btn' style={{ justifyContent: 'left', }}>
                            <button style={{ marginLeft: '0' }} onClick={handleSubmit}>Continue</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SetPassword;
