import React from 'react';
import logo from '../img/logo.png'

function verificationsteps() {
    return (
        <div className="headercontainer col-6" style={{ display: 'flex', flexWrap: 'wrap', }}>
            <div className="logo-container col-6" style={{ margin: '2%', display: 'flex', alignItems: 'center', width:'100%' }}>
                <img src={logo} alt="" style={{ height: '20px', marginRight: '5px' }} />
                <b style={{ fontSize: '14px',  }}>PMS Solutions</b>
            </div>
        </div> 
  )
}

export default verificationsteps
