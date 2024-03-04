import React, { useState, useEffect } from 'react';
import '../static/css/common.css';
import Verificationsteps from './Verificationsteps';
import '../static/css/firminfo4case.css';
import { RiArrowDropDownLine } from "react-icons/ri";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CheckoutStepper from './CheckoutStepper';

const CHECKOUT_STEPS = [
    {
        name: "Email",
        Component: () => <></>,
    },
    {
        name: "Information",
        Component: () => <></>,
    },
    {
        name: "Settings",
        Component: () => <></>,
    },
    {
        name: "Book a session",
        Component: () => <></>,
    },
];
function FirmInformation() {

    const [firmname, setFirmname] = useState("");
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("");
    const [states, setStates] = useState([]);
    const [selectedState, setSelectedState] = useState("");

    useEffect(() => {
        const getCountryData = async () => {
            try {
                const response = await axios.get("https://countriesnow.space/api/v0.1/countries/positions");
                setCountries(response.data.data);
                console.log("Country Data Fetched Successfully");
            } catch (error) {
                console.error("Error fetching country data:", error);
            }
        };

        getCountryData();
    }, []);

    useEffect(() => {
        const getStatesData = async () => {
            try {
                const response = await axios.get("https://countriesnow.space/api/v0.1/countries/states");
                setStates(response.data.data);
                console.log("State Data Fetched Successfully");
            } catch (error) {
                console.error("Error fetching state data:", error);
            }
        };

        getStatesData();
    }, []);

    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value);
    };

    const handleStateChange = (e) => {
        setSelectedState(e.target.value);
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!firmname || !selectedCountry|| !selectedState) {
            toast.error("Please fill in all fields.", { position: "top-right" });
            return;
        }

        console.log('data', firmname);
        console.log('data', selectedCountry);
        console.log('data', selectedState);

        toast.success("Firm Information submitted successfully.", { position: "top-right" });
    };


    return (
        <>
            <div className='step-container' style={{ margin: '3%' }}>
                <Verificationsteps />
            </div>

            <div className='yourinfo-container col-12' style={{ display: 'flex', marginTop: '10%', flexDirection: 'column' }}>

                <div className="col-12 info-title" style={{ marginBottom: '20px', marginLeft: '5%' }}>
                    <h1 style={{ fontSize: '35px' }}> Firm Information</h1>
                </div>

                <div className='your-input col-12' style={{ display: 'flex', paddingLeft: '5%', marginTop: '2%', flexWrap: 'wrap', fontSize: '14px', }}>
                    <div className='col-6 firm-input' style={{ flexDirection: 'column', marginRight: '2%' }}>
                        <label>Firm Name</label>
                        <input
                            type='text'
                            value={firmname}
                            onChange={(e) => setFirmname(e.target.value)}
                            style={{ height: '5vh', width: '100%', border: "1px solid rgb(100, 149, 237)", borderRadius: '10px', textAlign: 'left', fontSize: '12px' }}
                        />
                    </div>

                    <div className='col-6 country' style={{ flexDirection: 'column', marginRight: '2%', marginTop: '20px' }}>
                        <label>Country</label>
                        <select className='select-inputbox col-12' onChange={handleCountryChange} value={selectedCountry} style={{ height: '5vh', width: '100%', border: "1px solid rgb(100, 149, 237)", borderRadius: '10px' }}>
                            {countries.map((country, index) => (
                                <option key={index} value={country.name}>
                                    {country.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className='col-6 states' style={{ flexDirection: 'column', fontSize: '14px', marginTop: '20px' }}>
                        <label>State</label>
                        <select className='select-inputbox col-12' onChange={handleStateChange} value={selectedState} style={{ height: '5vh', width: '100%', border: "1px solid rgb(100, 149, 237)", borderRadius: '10px' }}>
                            {states
                                .filter((country) => country.name === selectedCountry)
                                .map((country) =>
                                    country.states.map((state, index) => (
                                        <option key={index} value={state.name}>
                                            {state.name}
                                        </option>
                                    ))
                                )}
                        </select>
                    </div>
                </div>

                <div className='firm-info-button col-2 ' style={{ marginLeft: '3%' }}>
                    <div className='button-btn col-12' style={{ display: 'flex', justifyContent: 'center' }}>
                        <button onClick={handleSubmit} style={{ marginLeft: '0' }}>Next</button>
                    </div>
                </div>

            </div>
             <ToastContainer />

        </>
    )
}

export default FirmInformation;
