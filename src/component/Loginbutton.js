import React from 'react';
import '../static/css/loginbutton.css';

function Loginbutton() {
    return (
        <>
            <div className="logincontainer col-6" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                <button className='top-button' >Login</button>
            </div>

        </>
    )
}

export default Loginbutton
