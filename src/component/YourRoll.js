import React from 'react';
import Verificationsteps from './Verificationsteps';
import '../static/css/firm.css'
import Buttoncomponent from './Buttoncomponent';

function Firmroll() {
    return (
        <>
            <div className='step-container' style={{ margin: '2%' }}>
                <Verificationsteps />
            </div>

            <div className='firmroll-container col-12' style={{ display: 'flex', width: '100%', flexWrap: 'wrap' }}>
                <div className="firmrollsub-container col-12" style={{ color: 'black', padding: '20px' }}>
                    <div className="col-12" style={{ textAlign: 'left', marginBottom: '20px', margin: '2%' }}>
                        <h1 style={{ fontSize: '35px' }}> Your role in the firm </h1>

                    </div>
                    <div className='section-btn col-6' style={{ display: 'flex', flexDirection: 'row', gap: '20px', margin: '2%', width: '80%', fontSize: '12px' }}>
                        <div className='owner col-3' >
                            <button type="button" className="button1" style={{ border: '1px solid rgb(58, 145, 245)', borderRadius: '5px', outline: 'none', height: '5vh', width: '100%', backgroundcolor: 'transparent' }}>Owner or Partner</button>
                        </div>


                        <div className='Bookkeeper col-3' >
                            <button type="button" className="button2" style={{ border: '1px solid rgb(58, 145, 245)', borderRadius: '5px', outline: 'none', height: '5vh', width: '100%', backgroundcolor: 'transparent' }} >Bookkeeper or Accountant</button>
                        </div>

                        <div className='Operations col-3' >
                            <button type="button" className="button3" style={{ border: '1px solid rgb(58, 145, 245)', borderRadius: '5px', outline: 'none', height: '5vh', width: '100%', backgroundcolor: 'transparent' }} >Operations/Office Manager</button>
                        </div>

                        <div className='Admin col-3' >
                            <button type="button" className="button4" style={{ border: '1px solid rgb(58, 145, 245)', borderRadius: '5px', outline: 'none', height: '5vh', width: '100%', backgroundcolor: 'transparent' }} >Admin</button>
                        </div>

                        <div className='Assistant col-3' >
                            <button type="button" className="button5" style={{ border: '1px solid rgb(58, 145, 245)', borderRadius: '5px', outline: 'none', height: '5vh', width: '100%', backgroundcolor: 'transparent' }} >Assistant</button>
                        </div>


                        <div className='Other col-3' >
                            <button type="button" className="button6" style={{ border: '1px solid rgb(58, 145, 245)', borderRadius: '5px', outline: 'none', height: '5vh', width: '100%' }} >Other</button>
                        </div>

                    </div>

                    <div style={{marginLeft:'-2.5%'}}>
                        <div className='col-2 sec-button' >
                            <Buttoncomponent />
                        </div>
                    </div>

                </div>
            </div>
        </>
    );

}

export default Firmroll;
