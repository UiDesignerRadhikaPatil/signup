import React from 'react';
import Verificationsteps from './Verificationsteps';
import Inputbox from './Inputbox';
import Selectdropinput from './Selectdropinput';
import '../static/css/firmsetting.css';
import Setting from '../img/setting.png'
import { NavLink } from 'react-router-dom';


function Firmsetting() {

    return (

        <>
            <div className='step-container' style={{ padding: '2%',}}>
                <Verificationsteps />
            </div>
            <div className='firmsetting-container col-12' style={{ display: 'flex', }}>
                <div className="firmleft-container col-12" style={{ color: 'black', padding: '20px' }}>
                    <div className="col-12" style={{ textAlign: 'left', marginBottom: '20px', margin: '2%' }}>
                        <h1 style={{ fontSize: '35px' }}>Firm Setting</h1>
                    </div>
                    <div className="font-class col-12" style={{ textAlign: 'left', marginBottom: '10px', margin: '2%', }}>
                        <h2 style={{ fontSize: '25px' }}>PMS <NavLink style={{ color: 'rgb(58, 145, 245)' }}> Pro's</NavLink> </h2>
                    </div>
                    <div className="powerful-text col-12" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', margin: '2%', }}>
                        <div className='font col-4' style={{ flex: '1', textAlign: 'left', }}>
                            <p style={{ fontSize: '16px', }}>A powerful, integrated platform to manage teams, clients, projects</p>
                        </div>
                        <div>
                            <h6 style={{ fontSize: '14px', marginLeft: 'auto' }}>From $40/mo per user</h6>
                        </div>
                    </div>
                    <div className='middle-section col-12' style={{ display: 'flex', margin: '1%' }}>
                        <div className="col-2" style={{ textAlign: 'left', marginBottom: '20px', margin: '1%', width: '100%', flexDirection: 'column' }}>
                            <h1 style={{ fontSize: '20px' }}>Firm Setting</h1>
                            <div className="font-class col-12" style={{ textAlign: 'left', marginBottom: '10px', width: '100%' }}>
                                <h5 style={{ fontSize: '14px', marginTop: '10px' }}>choose web URL  </h5>
                                <p style={{ fontSize: '14px', marginTop: '2%' }}>You will be able to set up a fully custom domain later</p>
                            </div>
                            <div className='urlinput col-8' >
                                <Inputbox />
                                
                            </div>


                            <div className='currency-section col-12' style={{ display: 'flex',  }}>
                                <div className='input-col col-12' style={{  marginTop: '2%', flexWrap: 'wrap', fontSize: '14px' }}>
                                    <div className='currency col-3' style={{ marginRight: '2%' }}>
                                        <label style={{ fontSize: '14px' }}>Default currency you cannot change it later</label>
                                        <Selectdropinput />

                                    </div>
                                    <div className='language-class col-5' style={{ flex: '1', marginTop: '2.5%' }}>
                                        <label style={{ fontSize: '14px' }}>Default Language</label>
                                        <Selectdropinput />
                                    </div>
                                </div>

                            </div>
                            <div className='continue-btn col-6' style={{ width: '30%', display: 'flex', justifyContent: 'left', marginTop: '5%' }}>
                                <button className='btn-continue'>Continue</button>
                            </div>

                        </div>
                    </div>



                </div>


                <div className="imageright-container col-12" style={{ color: 'black', flexDirection: 'column' }}>
                    <div className="image-section col-6" style={{ textAlign: 'center', minHeight: '20vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', }}>
                        <div className='col-6' style={{}}>
                            <img src={Setting} alt='' style={{ height: '400px', width: '600px', margin: '20%' }} />
                        </div>

                    </div>
                </div>


            </div>
        </>

    );
}

export default Firmsetting
