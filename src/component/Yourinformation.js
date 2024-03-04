import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../static/css/common.css';
import Verificationsteps from './Verificationsteps';
import '../static/css/yourinformation.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import CheckoutStepper from './CheckoutStepper';

const CHECKOUT_STEPS = [
    {
        name: "Email",
        Component: () => <></>,
    },
    {
        name: "Information",
        Component: () => <></>,
    },
    {
        name: "Settings",
        Component: () => <></>,
    },
    {
        name: "Book a session",
        Component: () => <></>,
    },
];

function Yourinformation() {

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastName] = useState('');
    const [phonenumber, setPhonenumber] = useState('');

    const handlePhoneChange = (value) => {
        setPhonenumber(value);
    };

    const validatePhoneNumber = (number) => {
        const cleanedNumber = number.replace(/\D/g, '');
        return /^(\+?\d{10,})$/.test(cleanedNumber);
    };

    const handlesubmit = (e) => {
        e.preventDefault();


        if (!firstname || !lastname || !phonenumber) {
            toast.error('Please fill in all fields.');
            return;
        }


        if (!validatePhoneNumber(phonenumber)) {
            toast.error('Please enter a valid phone number.');
            return;
        }


        console.log(firstname);
        console.log(lastname);
        console.log(phonenumber);


        toast.success('Form submitted successfully!');
    };

    return (
        <>
            <ToastContainer />
            <div className='code-confirmation col-12' style={{ height: '80px', padding: '40px 50px 20px 20px' }}>
                <div className='confirmation-header'>
                    <Verificationsteps />
                </div>

                {/* <div className='form-stepper col-5' style={{display:'flex', alignItems:'center'}} >
                    <CheckoutStepper stepsConfig={CHECKOUT_STEPS} />
                </div> */}
            </div>

            <div className='yourinfo-container col-6' style={{ display: 'flex', marginTop: '10%', flexDirection: 'column' }}>

                <div className='title-info' style={{ display: 'flex', fontSize: '20px', }}>
                    <h1 style={{ fontWeight: 'bold', marginLeft: '5%' }}>Your information</h1>
                </div>

                <div className='info-class' style={{ display: 'flex', paddingLeft: '5%', marginTop: '2%', flexWrap: 'wrap', fontSize: '14px', }}>
                    <div className='flex-class col-7' style={{ display: 'flex', }}>
                        <div className='name-1' style={{ flexDirection: 'column', flex: '1', marginRight: '2%' }}>
                            <label>First Name</label>
                            <input
                                type='text' value={firstname} onChange={(e) => setFirstname(e.target.value)}
                                style={{ height: '5vh', width: '100%', border: "1px solid rgb(100, 149, 237)", borderRadius: '10px', textAlign: 'left', fontSize: '12px' }}
                            />
                        </div>

                        <div className='info-lastname' style={{ flex: '1', }}>
                            <label>Last Name</label>
                            <input
                                type='text' value={lastname} onChange={(e) => setLastName(e.target.value)}
                                style={{ height: '5vh', width: '100%', border: "1px solid rgb(100, 149, 237)", borderRadius: '10px', textAlign: 'left', fontSize: '12px' }}
                            />
                        </div>
                    </div>
                </div>

                <div className='phone col-7' style={{ display: 'flex', flexDirection: 'column', paddingLeft: '5%', marginTop: '3%', fontSize: '14px' }}>
                    <label>Phone number</label>
                    <PhoneInput
                        inputStyle={{ height: '5vh', width: '102%', border: "1px solid rgb(100, 149, 237)", borderRadius: '10px', textAlign: 'left', fontSize: '12px' }}
                        value={phonenumber}
                        onChange={handlePhoneChange}
                    />
                </div>

                <div className='inormation-button col-4' style={{ marginLeft: '1%' }}>
                    <div className='button-btn col-12' style={{ display: 'flex', justifyContent: 'center' }}>
                        <button style={{ marginLeft: '0' }} onClick={handlesubmit}>Next</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Yourinformation;
