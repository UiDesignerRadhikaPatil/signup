import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Verificationsteps from './Verificationsteps';
import Inputbox from './Inputbox';
import Selectdropinput from './Selectdropinput';
import { ToastContainer, toast } from 'react-toastify'; // Import toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles
import '../static/css/firmsetting.css';
import Setting from '../img/setting.png'
import { NavLink } from 'react-router-dom';

function Firmsetting() {
    const [currencies, setCurrencies] = useState([]);
    const [selectedCurrency, setSelectedCurrency] = useState('');
    const [languages, setLanguages] = useState([]);
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [url, setUrl] = useState('');
    const label = ".pms.com";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://query.wikidata.org/sparql?query=SELECT%20%3Flanguage%20%3FlanguageLabel%20WHERE%20%7B%0A%20%20%3Flanguage%20wdt%3AP31%20wd%3AQ34770.%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%0A%20%20%20%20bd%3AserviceParam%20wikibase%3Alanguage%20%22%5BAUTO_LANGUAGE%5D%2Cen%22.%0A%20%20%7D%0A%7D&format=json');
                if (!response.ok) {
                    throw new Error('Failed to fetch languages');
                }
                const data = await response.json();
                const languages = data.results.bindings.map(binding => ({
                    code: binding.language.value.split('/').pop(),
                    name: binding.languageLabel.value
                }));
                setLanguages(languages);
            } catch (error) {
                console.error('Error fetching languages:', error);
            }
        };

        fetchData();
    }, [])

    const handleChange = event => {
        setSelectedLanguage(event.target.value);
        console.log('Selected language:', event.target.value);
    };


    const handleSubmitUrl = () => {
        const combinedValue = url + label;
        console.log("Combined value:", combinedValue);
        return combinedValue;
    };

    const handleSendData = () => {
        if (!url) {
            toast.error('Please enter a URL.');
            return;
        }
        if (!selectedCurrency) {
            toast.error('Please select a currency.');
            return;
        }
        if (!selectedLanguage) {
            toast.error("please select a language.");
            return;
        }

        const combinedData = {
            url: handleSubmitUrl(),
            currency: selectedCurrency, 
            languages: selectedLanguage,
        };

        
        console.log("Combined data:", combinedData);
        toast.success('Data sent successfully!');
    }

    useEffect(() => {
        const fetchCurrencies = async () => {
            try {
                const response = await axios.get('https://api.coingecko.com/api/v3/simple/supported_vs_currencies');
                setCurrencies(response.data);
            } catch (error) {
                console.error('Error fetching currencies:', error);
            }
        };

        fetchCurrencies();
    }, []);

    const handleCurrencyChange = (event) => {
        setSelectedCurrency(event.target.value);
    };

    return (
        <>
            <ToastContainer /> {/* ToastContainer component for displaying notifications */}
            <div className='step-container' style={{ padding: '2%' }}>
                <Verificationsteps />
            </div>
            <div className='firmsetting-container col-12' style={{ display: 'flex' }}>
                <div className="firmleft-container col-12" style={{ color: 'black', padding: '20px' }}>
                    <div className="col-12" style={{ textAlign: 'left', marginBottom: '20px', margin: '2%' }}>
                        <h1 style={{ fontSize: '35px' }}>Firm Setting</h1>
                    </div>
                    <div className="font-class col-12" style={{ textAlign: 'left', marginBottom: '10px', margin: '2%' }}>
                        <h2 style={{ fontSize: '25px' }}>PMS <NavLink style={{ color: 'rgb(58, 145, 245)' }}> Pro's</NavLink> </h2>
                    </div>
                    <div className="powerful-text col-12" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', margin: '2%' }}>
                        <div className='font col-4' style={{ flex: '1', textAlign: 'left' }}>
                            <p style={{ fontSize: '16px' }}>A powerful, integrated platform to manage teams, clients, projects</p>
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
                                <input
                                    type='text'
                                    style={{ height: '5vh', width: '100%', border: "1px solid rgb(100, 149, 237)", borderRadius: '10px', textAlign: 'left', fontSize: '12px' }}
                                    onChange={(e) => setUrl(e.target.value)}
                                />
                            </div>
                            <div style={{ marginTop: '2%' }}>
                                <lable>{label}</lable>
                            </div>
                            <div className='currency-section col-12' style={{ display: 'flex' }}>
                                <div className='input-col col-12' style={{ marginTop: '2%', flexWrap: 'wrap', fontSize: '14px' }}>
                                    <div className='currency col-3' style={{ marginRight: '2%' }}>
                                        <label style={{ fontSize: '14px' }}>Default currency you cannot change it later</label>
                                        <select className='select-inputbox col-12' style={{ height: '5vh', width: '100%', border: "1px solid rgb(100, 149, 237)", borderRadius: '10px' }} onChange={handleCurrencyChange}>
                                            <option value="">Select Currency</option>
                                            {currencies.map(currency => (
                                                <option key={currency} value={currency}>
                                                    {currency.toUpperCase()}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className='language-class col-5' style={{ flex: '1', marginTop: '2.5%' }}>
                                        <label style={{ fontSize: '14px' }}>Default Language</label>
                                        <select className='select-inputbox col-12' style={{ height: '5vh', width: '100%', border: "1px solid rgb(100, 149, 237)", borderRadius: '10px' }} onChange={(e) => setSelectedLanguage(e.target.value)}>
                                            <option value="">Select a language</option>
                                            {languages.map(language => (
                                                <option key={language.code} value={language.name}>
                                                    {language.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                </div>
                            </div>
                            <div className='continue-btn col-6' style={{ width: '30%', display: 'flex', justifyContent: 'left', marginTop: '5%' }}>
                                <button className='btn-continue' onClick={handleSendData}>Continue</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="imageright-container col-12" style={{ color: 'black', flexDirection: 'column' }}>
                    <div className="image-section col-6" style={{ textAlign: 'center', minHeight: '20vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <div className='col-6'>
                            <img src={Setting} alt='' style={{ height: '400px', width: '600px', margin: '20%' }} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Firmsetting;
