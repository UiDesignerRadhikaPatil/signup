import React, { useState, useRef } from 'react';
import './otpinput.css';

const OtpInput = () => {
    const [otp, setOtp] = useState(new Array(6).fill(''));
    const inputRefs = useRef([]);

    // Create refs for each input field
    const createRefs = (length) => {
        inputRefs.current = Array(length).fill().map((_, i) => inputRefs.current[i] || React.createRef());
    };

    // Update refs when otp length changes
    if (inputRefs.current.length !== otp.length) {
        createRefs(otp.length);
    }

    // When number is added, go to the next field
    const handleChange = (e, index) => {
        if (isNaN(e.target.value)) return false;
        const newOtp = [...otp.map((data, indx) => (indx === index ? e.target.value : data))];
        setOtp(newOtp);

        if (e.target.value && inputRefs.current[index + 1]) {
            inputRefs.current[index + 1].current.focus();
        } else if (!e.target.value && inputRefs.current[index - 1]) {
            inputRefs.current[index - 1].current.focus(); // Move to the previous input field if backspace is pressed
        }
    };

    // Paste the OTP from clipboard and fix length
    const handlePaste = (e) => {
        const value = e.clipboardData.getData('text').trim();
        if (isNaN(value)) return false;

        const updatedValue = value.toString().split('').slice(0, otp.length);
        setOtp(updatedValue);

        // Move focus to the next input field
        const nextIndex = Math.min(inputRefs.current.length - 1, value.length);
        if (inputRefs.current[nextIndex]) {
            inputRefs.current[nextIndex].current.focus();
        }
    };

    return (
        <>
            <div className='otp-area' style={{ display: 'flex', flexWrap: 'wrap' }}>
                {otp.map((data, i) => (
                    <input
                        key={i}
                        type='text'
                        value={data}
                        maxLength={1}
                        ref={inputRefs.current[i]}
                        onChange={(e) => handleChange(e, i)}
                        onPaste={(e) => handlePaste(e)}
                    />
                ))}
            </div>
        </>
    );
};

export default OtpInput;
// 12456