import React, { useState } from 'react'
import './otpinput.css'
const OtpInput = () => {
    const [opt, setOtp] = useState(new Array(6).fill(""))


    //  when number is added goto the next field
    function handleChange(e, index) {
        if (isNaN(e.target.value)) return false
        setOtp([...opt.map((data, indx) => (indx === index ? e.target.value : data))]);

        if(e.target.value && e.target.nextSibling){
            e.target.nextSibling.focus()
        }
       
    }
    
// paste the otp from clip board and fiexd length
    function handlePaste(e){
        const value = e.clipboardData.getData('text')

        if(isNaN(value)) return false
     
        const updatedValue = value.toString().split('').slice(0, opt.length)
        setOtp(updatedValue)
       

    }

    return (
        <>
            <div className='otp-area'>
                {
                    opt.map((data, i) => {
                        return <input type='text' 
                        value={data} 
                        maxLength={1}
                        // className='col-1'
                        onChange={(e) => handleChange(e, i)}
                        onPaste={(e)=>handlePaste(e)}
                         />
                    })
                }
            </div>
        </>
    )
}

export default OtpInput


