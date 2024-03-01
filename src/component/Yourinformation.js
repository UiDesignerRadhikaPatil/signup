import React from 'react';
import '../static/css/common.css';
import Inputbox from './Inputbox';
import Buttoncomponent from './Buttoncomponent';
import Verificationsteps from './Verificationsteps';
import '../static/css/yourinformation.css';
function Yourinformation() {
    return (
        <>
            <div className='code-confirmation col-12' style={{ height: '80px', padding: '40px 50px 20px 20px' }}>
                <div className='confirmation-header'>
                    <Verificationsteps />
                </div>
            </div>

            <div className='yourinfo-container col-6' style={{ display: 'flex', marginTop: '10%', flexDirection: 'column' }}>

                <div className='title-info' style={{ display: 'flex', fontSize: '20px', }}>
                    <h1 style={{ fontWeight: 'bold', marginLeft: '5%' }}>Your information</h1>
                </div>


                <div className='info-class' style={{ display: 'flex', paddingLeft: '5%', marginTop: '2%', flexWrap: 'wrap', fontSize: '14px', }}>
                    <div className='name-1' style={{ flexDirection: 'column', flex: '1', marginRight: '2%' }}>
                        <label>First Name</label>
                        <Inputbox />

                    </div>

                    <div className='info-lastname' style={{  flex: '1',  }}>
                        <label>Last Name</label>
                        <Inputbox />
                    </div>
                </div>

                <div className='phone col-12' style={{ display: 'flex', flexDirection: 'column', paddingLeft: '5%', marginTop: '3%', fontSize: '14px',  }}>
                    <label>Phone number</label>
                    <Inputbox />
                </div>

                <div  className='inormation-button col-4' style={{  marginLeft: '1%' }}>
                    <Buttoncomponent />
                </div>
            </div>
        </>
    )
}

export default Yourinformation;
