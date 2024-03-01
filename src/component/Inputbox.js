import React from 'react';
import '../static/css/inputbox.css'

function Inputbox() {
    return (

        <div className="inputbox-container col-12" >
            <div className='inputfield-container'>
                <input type='text' style={{ height: '5vh', width: '100%', border: "1px solid rgb(100, 149, 237)", borderRadius: '10px', textAlign:'left', fontSize:'12px' }} />
            </div>



        </div>
    )
}

export default Inputbox
