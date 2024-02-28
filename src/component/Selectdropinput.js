import React from 'react';
import "../static/css/select.css"

function Selectdropinput() {
    return (
        <>
            <div className="selectinput-container col-12" >
                <div className='selectfield-container col-12'>
                    <select className='select-inputbox col-12' type='text' style={{ height: '5vh', width: '100%', border: "1px solid rgb(100, 149, 237)", borderRadius: '10px', }}>
                        <option></option>
                        <option></option>
                        <option></option>
                    </select>
                </div>

            </div>

        </>

    )
}

export default Selectdropinput
