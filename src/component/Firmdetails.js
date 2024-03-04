import React, { useState, useEffect } from 'react';
import '../static/css/firmdetails.css';
import Buttoncomponent from './Buttoncomponent';
import Verificationsteps from './Verificationsteps';

const Firmdetails = () => {


    const [value, setValue] = useState(0);


    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        setValue(inputValue);
    };


    const [svalue, setSValue] = useState(0);
    const [selectedOption, setSelectedOption] = useState("");

    useEffect(() => {
        console.log(svalue);


    }, [svalue]);
    useEffect(() => {

    }, [selectedOption]);

    const handleChange = (event) => {
        setSValue(event.target.value);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };
    

    const submitFirmDetail = () => {
        console.log( svalue,selectedOption)
    }




    return (
        <>
            <div className='step-container' style={{ margin: '3%' }}>
                <Verificationsteps />
            </div>

            <div className='firmservices-container col-12' style={{ display: 'flex', width: '100%', flexWrap: 'wrap' }}>
                <div className="firmservicessub-container col-12" style={{ color: 'black', padding: '20px' }}>
                    <div className="col-12" style={{ textAlign: 'left', margin: '3%' }}>
                        <h1 style={{ fontSize: '35px' }}>Firm details </h1>

                    </div>

                    <div className='slider-container col-12' style={{ display: 'flex', alignContent: 'center' }}>
                        <div className='slider-input' style={{ marginLeft: '3%' }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <input
                                    type='text'
                                    value={value}
                                    onChange={handleInputChange}
                                    style={{ width: '60%', height: '7vh', fontSize: '14px', marginTop: "20%" }}
                                />
                            </div>
                        </div>
                        <div className="range-slider-container col-12">
                            <input
                                type="range"
                                min={0}
                                max={200}
                                value={value}
                                onChange={handleChange}
                                step={1}
                                className="range-slider"
                            />
                        </div>
                    </div>

                    <div className="col-12" style={{ textAlign: 'left', marginBottom: '20px', margin: '3%' }}>
                        <h1 style={{ fontSize: '14px' }}>How did you hear about the PMS ?  </h1>

                    </div>

                    <div className='firmsdetails-btn col-12' style={{ display: 'flex', flexDirection: 'row', gap: '20px', marginLeft: '3%', fontSize: '12px', paddingRight: '2%' }}>


                        <div className='google col-2' >
                            <button type="button" className="button2" style={{ border: '1px solid rgb(58, 145, 245)', borderRadius: '5px', outline: 'none', height: '8vh', width: '100%', backgroundcolor: 'transparent' }} onClick={() => handleOptionClick("Google Search")} ><lable>Google Search</lable></button>
                        </div>

                        <div className='g2 col-2' >
                            <button type="button" className="button2" style={{ border: '1px solid rgb(58, 145, 245)', borderRadius: '5px', outline: 'none', height: '8vh', width: '100%', backgroundcolor: 'transparent' }} onClick={() => handleOptionClick("Capterra/Getapp/G2")}><lable>Capterra/Getapp G2</lable> </button>
                        </div>

                        <div className='friend col-2' >
                            <button type="button" className="button3" style={{ border: '1px solid rgb(58, 145, 245)', borderRadius: '5px', outline: 'none', height: '8vh', width: '100%', backgroundcolor: 'transparent' }} onClick={() => handleOptionClick("From a friend")} ><lable>From a friend</lable></button>
                        </div>

                        <div className='offline col-2' >
                            <button type="button" className="button4" style={{ border: '1px solid rgb(58, 145, 245)', borderRadius: '5px', outline: 'none', height: '8vh', width: '100%', backgroundcolor: 'transparent' }} onClick={() => handleOptionClick("Offline event")}><lable>Offline event</lable></button>
                        </div>

                        <div className='social col-2' >
                            <button type="button" className="button5" style={{ border: '1px solid rgb(58, 145, 245)', borderRadius: '5px', outline: 'none', height: '8vh', width: '100%', backgroundcolor: 'transparent' }} onClick={() => handleOptionClick("Social media")} ><lable>Social media</lable></button>
                        </div>
                    </div>

                    <div className='firmsecond-list col-12' style={{ flexDirection: 'row', gap: '20px', marginLeft: '3%', fontSize: '12px', paddingRight: '2%', display: 'flex', marginTop: '2%' }}>
                        <div className='taxdom col-2' >
                            <button type="button" className="button6" style={{ border: '1px solid rgb(58, 145, 245)', borderRadius: '5px', outline: 'none', height: '8vh', width: '100%' }} onClick={() => handleOptionClick(" Tax dom consultant/partner")} ><lable>Tax dom consultant/partner</lable></button>
                        </div>

                        <div className='otherbutton-btn col-2' >
                            <button type="button" className="button10" style={{ border: '1px solid rgb(58, 145, 245)', borderRadius: '5px', outline: 'none', height: '8vh', width: '100%' }} onClick={() => handleOptionClick("Other")} ><lable>Other</lable></button>
                        </div>

                    </div>

                    <div className="col-2 firm-button" style={{ marginLeft: '1%' }}>
                        <div className='button-btn col-12' style={{ display: 'flex', justifyContent: 'center' }}>
                            <button style={{ marginLeft: '0' }} onClick={submitFirmDetail}>Next</button>
                        </div>

                    </div>



                </div>
            </div>

        </>
    )
}

export default Firmdetails
