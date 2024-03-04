import React, { useState, useRef, } from 'react'
import '../src/static/css/signup.css'
import { LuPenLine } from "react-icons/lu";
import OtpInput from './component/OtpInput';
import Verificationsteps from './component/Verificationsteps';
import { NavLink } from 'react-router-dom';
import CheckoutStepper from '../src/component/CheckoutStepper';
import axios from 'axios';

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

const Signup = () => {

  return (
    <>
      <div className='code-confirmation col-12' style={{ height: '80px', padding: '20px 50px 20px 50px' }}>
        <div className='confirmation-header col-12' style={{ display: 'flex' }}>
          <div className='header-logo col-4'>
            <Verificationsteps />
          </div>

          <div className='form-stepper col-5' >
            <CheckoutStepper stepsConfig={CHECKOUT_STEPS} />
          </div>

        </div>

      </div>
      <div className='confirmation-container col-12' style={{ height: 'auto' }}>
        <div className='code-container col-12' style={{ display: 'flex', justifyContent: 'center', margin: '5px' }}>
          <h1 className='col-6' style={{ fontSize: '40px', paddingTop: '5%', textAlign: 'center' }}>Confirmation Code</h1>
        </div>
        <div>
          <p className='col-12' style={{ display: 'flex', textAlign: 'center', justifyContent: 'center', margin: '5px' }}>We sent a confirmation code to your email:</p>
        </div>
        <div>
          <h1 className='col-12' style={{ display: 'flex', textAlign: 'center', justifyContent: 'center', fontSize: '18px', margin: '5px' }}>exam@gmail.com <LuPenLine /></h1>
        </div>
        <div style={{ flexDirection: 'column', margin: '5px' }}>
          <p className='col-9' style={{ display: 'flex', justifyContent: 'center' }}>Please, enter it below </p>
        </div>
        <div className='otp-container col-12' style={{ display: 'flex', justifyContent: 'center' }}>
          <OtpInput className="col-12" style={{ display: 'flex', justifyContent: 'center' }} />
        </div>

        <div className='resend-code col-12' style={{ display: 'flex', justifyContent: 'center' }}>
          <p>Didn't Recive it ? <NavLink to="/" style={{ color: '#695cfe' }}>Resend Code</NavLink></p>
        </div>

      </div>
      {/* <CheckoutStepper stepsConfig={CHECKOUT_STEPS} /> */}
    </>
  )
}

export default Signup