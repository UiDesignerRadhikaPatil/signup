import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verificationsteps from './Verificationsteps';
import '../static/css/firm.css';
import Buttoncomponent from './Buttoncomponent';

function Firmroll() {
    const [roleOption, setRoleOption] = useState('');

    const handleRoleClick = (option) => {
        setRoleOption(option);
    };

    const submitRole = () => {
        if (!roleOption) {
            toast.error("Please fill in all fields.", { position: "top-right" });
        } else {
            console.log(roleOption);
            // Proceed with your logic for the next step
        }
    };

    return (
        <>

            <ToastContainer />
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
                            <button type="button" className="button1" style={{ border: '1px solid rgb(58, 145, 245)', borderRadius: '5px', outline: 'none', height: '5vh', width: '100%', backgroundColor: 'transparent' }} onClick={() => handleRoleClick("Owner or Patner")}><label>Owner or Partner</label></button>
                        </div>


                        <div className='Bookkeeper col-3' >
                            <button type="button" className="button2" style={{ border: '1px solid rgb(58, 145, 245)', borderRadius: '5px', outline: 'none', height: '5vh', width: '100%', backgroundColor: 'transparent' }} onClick={() => handleRoleClick(" BookKeeper or Accountant")}><label>Bookkeeper or Accountant</label></button>
                        </div>

                        <div className='Operations col-3' >
                            <button type="button" className="button3" style={{ border: '1px solid rgb(58, 145, 245)', borderRadius: '5px', outline: 'none', height: '5vh', width: '100%', backgroundColor: 'transparent' }} onClick={() => handleRoleClick("Operations/Office Manager")} ><label>Operations/Office Manager</label></button>
                        </div>

                        <div className='Admin col-3' >
                            <button type="button" className="button4" style={{ border: '1px solid rgb(58, 145, 245)', borderRadius: '5px', outline: 'none', height: '5vh', width: '100%', backgroundColor: 'transparent' }} onClick={() => handleRoleClick("Admin")} ><label>Admin</label></button>
                        </div>

                        <div className='Assistant col-3' >
                            <button type="button" className="button5" style={{ border: '1px solid rgb(58, 145, 245)', borderRadius: '5px', outline: 'none', height: '5vh', width: '100%', backgroundColor: 'transparent' }} onClick={() => handleRoleClick("Assistant")} ><label>Assistant</label></button>
                        </div>


                        <div className='Other col-3' >
                            <button type="button" className="button6" style={{ border: '1px solid rgb(58, 145, 245)', borderRadius: '5px', outline: 'none', height: '5vh', width: '100%', backgroundColor: 'transparent' }} onClick={() => handleRoleClick("Other")} ><label>Other</label></button>
                        </div>

                    </div>

                    <div style={{ marginLeft: '4px' }}>
                        <div className='col-2 rol-button' >
                            <div className='button-btn col-12' style={{ display: 'flex', justifyContent: 'center' }}>
                                <button style={{ marginLeft: '0' }} onClick={submitRole} >Next</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );

}

export default Firmroll;
