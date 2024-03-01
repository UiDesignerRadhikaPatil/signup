import React from 'react';
import '../static/css/common.css';
import Inputbox from './Inputbox';
import Selectdropinput from './Selectdropinput';
import Buttoncomponent from './Buttoncomponent';
import Verificationsteps from './Verificationsteps';
import '../static/css/firminfo4case.css';



function FirmInformation() {
    return (
        <>
           <div className='step-container' style={{ margin: '3%' }}>
                <Verificationsteps />
            </div>

            <div className='yourinfo-container col-12' style={{ display: 'flex', marginTop: '10%', flexDirection: 'column' }}>

                <div className="col-12 info-title" style={{ marginBottom: '20px', marginLeft: '5%' }}>
                    <h1 style={{ fontSize: '35px' }}> Firm Information</h1>

                </div>


                <div className='your-input col-12' style={{ display: 'flex', paddingLeft: '5%', marginTop: '2%', flexWrap: 'wrap',  fontSize: '14px', }}>
                    <div className='col-6 firm-input' style={{ flexDirection: 'column', marginRight: '2%' }}>
                        <lable>Firm Name</lable>
                        <Inputbox />
                    </div>

                    <div className='col-6 country' style={{ flexDirection: 'column', marginRight: '2%', marginTop: '20px' }}>
                        <lable>Country</lable>
                        <Selectdropinput />
                    </div>

                    <div className='col-6 states' style={{ flexDirection: 'column', fontSize: '14px', marginTop: '20px' }}>
                        <lable>State </lable>
                        <Selectdropinput />
                    </div>

                </div>

                <div className='firm-info-button col-2 ' style={{ marginLeft: '3%' }}>
                        <Buttoncomponent />

                </div>

            </div>
        </>
    )
}

export default FirmInformation
