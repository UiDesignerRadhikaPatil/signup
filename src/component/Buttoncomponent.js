import React from 'react';
import '../static/css/button.css'

function Buttoncomponent() {
    return (
        <>
            <div className="button-container col-12">
                <div className='button-section col-12' >
                    <div className='button-btn col-12' style={{ display: 'flex', justifyContent: 'center' }}>
                        <button style={{marginLeft:'0'}}>Next</button>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Buttoncomponent
