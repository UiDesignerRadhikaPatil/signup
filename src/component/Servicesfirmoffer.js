import React, { useState, useEffect } from 'react';
import Buttoncomponent from './Buttoncomponent';
import Verificationsteps from './Verificationsteps';
import "../static/css/firmoffers.css";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Servicesfirmoffer() {

    const [selectedButtons, setSelectedButtons] = useState([]);
    const [selectAllChecked, setSelectAllChecked] = useState(false);

    const handleButtonClick = (buttonName) => {
        const index = selectedButtons.indexOf(buttonName);
        if (index === -1) {
            setSelectedButtons([...selectedButtons, buttonName]);
        } else {
            setSelectedButtons(selectedButtons.filter((name) => name !== buttonName));
        }
    };

    useEffect(() => {

    }, [selectedButtons]);

    const handleSelectAllChange = () => {
        setSelectAllChecked(!selectAllChecked);
        if (!selectAllChecked) {
            const allButtonNames = ["TaxPreparation", "planning", "Advisory", "Resolution", "Payroll", "Accounting", "Audit", "Lawfirm", "Bookkeeping", "Other"];
            setSelectedButtons(allButtonNames);
        } else {
            setSelectedButtons([]);
        }
    };

    const submitService = () => {

        if(selectedButtons.length === 0 && !selectAllChecked){
            toast.success("save data successfully", {position:'top-right'});
        }
        if (selectedButtons.length === 0 && !selectAllChecked) {
            
            toast.error("Please fill in all fields.", { position: "top-right" });
        } else {
            console.log("Selected Buttons:", selectedButtons);
            console.log("Select All Checked:", selectAllChecked);
            
        }
    };

    return (
        <>
        <ToastContainer/>
            <div className='step-container' style={{ margin: '3%' }}>
                <Verificationsteps />
            </div>

            <div className='firmservices-container col-12' style={{ display: 'flex', width: '100%', flexWrap: 'wrap' }}>
                <div className="firmservicessub-container col-12" style={{ color: 'black', padding: '20px' }}>
                    <div className="col-12" style={{ textAlign: 'left', marginBottom: '20px', margin: '2%' }}>
                        <h1 style={{ fontSize: '35px' }}> Services your firm offers </h1>

                    </div>
                    <div className='firmservices-btn col-12' style={{ display: 'flex', flexDirection: 'row', gap: '20px', margin: '2%', fontSize: '12px', paddingRight: '2%' }}>


                        <div className='tax-preparation col-6' >
                            <button type="button" className="button2" style={{ border: '1px solid rgb(58, 145, 245)', borderRadius: '5px', outline: 'none', height: '5vh', width: '100%', backgroundcolor: 'transparent' }} onClick={() => handleButtonClick("Tax Preparation")} ><lable> Tax preparation </lable></button>
                        </div>

                        <div className='planning col-6' >
                            <button type="button" className="button2" style={{ border: '1px solid rgb(58, 145, 245)', borderRadius: '5px', outline: 'none', height: '5vh', width: '100%', backgroundcolor: 'transparent' }} onClick={() => handleButtonClick("Tax Planning")}><lable>Tax planning</lable></button>
                        </div>

                        <div className='advisory col-6' >
                            <button type="button" className="button3" style={{ border: '1px solid rgb(58, 145, 245)', borderRadius: '5px', outline: 'none', height: '5vh', width: '100%', backgroundcolor: 'transparent' }} onClick={() => handleButtonClick("Advisory ")} ><lable>Advisory</lable></button>
                        </div>

                        <div className='resolution col-6' >
                            <button type="button" className="button4" style={{ border: '1px solid rgb(58, 145, 245)', borderRadius: '5px', outline: 'none', height: '5vh', width: '100%', backgroundcolor: 'transparent' }} onClick={() => handleButtonClick("Resolution ")} ><lable>Resolution</lable></button>
                        </div>

                        <div className='payroll col-6' >
                            <button type="button" className="button5" style={{ border: '1px solid rgb(58, 145, 245)', borderRadius: '5px', outline: 'none', height: '5vh', width: '100%', backgroundcolor: 'transparent' }} onClick={() => handleButtonClick("Payroll ")} ><lable>Payroll</lable></button>
                        </div>
                    </div>

                    <div className='second-list col-12' style={{ flexDirection: 'row', gap: '20px', marginLeft: '2%', fontSize: '12px', paddingRight: '2%', display: 'flex', }}>
                        <div className='accounting col-4' >
                            <button type="button" className="button6" style={{ border: '1px solid rgb(58, 145, 245)', borderRadius: '5px', outline: 'none', height: '5vh', width: '100%' }} onClick={() => handleButtonClick("Accounting ")} ><lable>Accounting</lable></button>
                        </div>

                        <div className='audit col-4' >
                            <button type="button" className="button7" style={{ border: '1px solid rgb(58, 145, 245)', borderRadius: '5px', outline: 'none', height: '5vh', width: '100%' }} onClick={() => handleButtonClick("Audit ")} ><lable>Audit</lable></button>
                        </div>

                        <div className='law-firm col-4' >
                            <button type="button" className="button8" style={{ border: '1px solid rgb(58, 145, 245)', borderRadius: '5px', outline: 'none', height: '5vh', width: '100%' }} onClick={() => handleButtonClick("Law firm ")}><lable>Law firm</lable></button>
                        </div>

                        <div className='bookkeeping col-4' >
                            <button type="button" className="button9" style={{ border: '1px solid rgb(58, 145, 245)', borderRadius: '5px', outline: 'none', height: '5vh', width: '100%' }} onClick={() => handleButtonClick("Bookeeping ")} ><lable>Bookeeping</lable></button>
                        </div>

                        <div className='other col-4' >
                            <button type="button" className="button10" style={{ border: '1px solid rgb(58, 145, 245)', borderRadius: '5px', outline: 'none', height: '5vh', width: '100%' }} onClick={() => handleButtonClick("Other ")}><lable>Other</lable></button>
                        </div>



                    </div>

                    <div className=" check-box-container col-12" style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <div className="row">
                            <div className="col-2 sec-button" style={{ marginLeft: '0' }}>
                                <div className='button-btn col-12' style={{ display: 'flex', justifyContent: 'center' }}>
                                    <button style={{ marginLeft: '0' }} onClick={submitService}>Next</button>
                                </div>
                            </div>
                            <div className='check-box' style={{ alignItems: 'center', padding: '2.5%' }}>
                                <input type="checkbox" style={{ marginRight: '5px', width: '15px', height: '15px' }} checked={selectAllChecked} onChange={handleSelectAllChange} />
                                <label htmlFor="terms" style={{ color: '#696969', fontSize: '16px', paddingTop: '5px' }}>
                                    Select all
                                </label>
                            </div>
                        </div>

                    </div>




                </div>
            </div>
        </>
    );

}

export default Servicesfirmoffer
