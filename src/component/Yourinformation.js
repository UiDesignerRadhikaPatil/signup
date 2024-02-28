import React from 'react';
import '../static/css/common.css';
import Inputbox from './Inputbox';
import Selectdropinput from './Selectdropinput';
import Buttoncomponent from './Buttoncomponent';
import CheckoutStepper from './CheckoutStepper';
import Verificationsteps from './Verificationsteps';
import '../static/css/yourinformation.css';
import Loginbutton from './Loginbutton';

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
    return (
        <>
            <div className='code-confirmation col-12' style={{ height: '80px', padding: '40px 50px 20px 50px' }}>
                <div className='confirmation-header col-12' style={{ display: 'flex' }}>
                    <div className='header-logo col-4'>
                        <Verificationsteps />
                    </div>
                </div>
            </div>

            <div className='yourinfo-container col-12' style={{ display: 'flex', marginTop: '10%', flexDirection: 'column' }}>
                <div className="col-6" style={{ display: 'flex', justifyContent: 'left', paddingLeft: '5%' }}>
                    <div className='title-info' style={{ display: 'flex', flexWrap: 'wrap', fontSize: '20px', flexDirection: 'column' }}>
                        <h1 style={{ fontWeight: 'bold' }}>Your information</h1>
                    </div>
                </div>

                <div className='input col-12' style={{ display: 'flex', paddingLeft: '5%', marginTop: '2%', flexWrap: 'wrap', width: '30%', fontSize: '14px' }}>
                    <div className='col-3' style={{ flexDirection: 'column', flex: '1', marginRight: '2%' }}>
                        <label>First Name</label>
                        <div className='firstname'>
                            <Inputbox />
                        </div>
                    </div>

                    <div className='lastname col-3' style={{ flexDirection: 'column', flex: '1', width: '10%' }}>
                        <label>Last Name</label>
                        <Inputbox />
                    </div>
                </div>

                <div className='col-6' style={{ display: 'flex', flexDirection: 'column', width: '30%', paddingLeft: '5%', marginTop: '1%', fontSize: '14px' }}>
                    <label>Phone number</label>
                    <Inputbox />
                </div>

                <div className='col-4' style={{ width: '20%' }}>
                    <Buttoncomponent />
                </div>
            </div>
        </>
    )
}

export default Yourinformation;
