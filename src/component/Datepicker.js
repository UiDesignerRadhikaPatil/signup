import React, { useState, useEffect } from 'react';
import Verificationsteps from './Verificationsteps';
import Selectdropinput from './Selectdropinput';
import { NavLink } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { LuCalendarClock } from "react-icons/lu";
import '../static/css/datepicker.css';




function Datepicker() {

    const [date, setDate] = useState(new Date());

    const onChange = (date) => {
        setDate(date);
    }

    const [languages, setLanguages] = useState([]);
    const [selectedLanguage, setSelectedLanguage] = useState('');

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
    }, []);

    const handleChange = event => {
        setSelectedLanguage(event.target.value);
        // Do something with the selected language
        console.log('Selected language:', event.target.value);
    };



    return (

        <>
            <div className='step-container' style={{ margin: '2%' }}>
                <Verificationsteps />
            </div>
            <div className='datepicker-container col-12' style={{ display: 'flex', }}>
                <div className="firmleft-container col-12" style={{ color: 'black', padding: '20px', width: '50%', border: '0.5px solid #AFDBF5' }}>
                    <div className="h1-container col-12" style={{ textAlign: 'left', marginBottom: '20px', margin: '2%' }}>
                        <h1 style={{ fontSize: '35px' }}>Book a free implementation session</h1>
                    </div>
                    <div className="font-class col-12" style={{ textAlign: 'left', marginBottom: '10px', margin: '2%', }}>
                        <p style={{ fontSize: '12px' }}>
                            10 out of 10 TaxDome firm saw faster ROI and implemementation by scheduling an intro session right away. Please choose a time that works best for your team that works best for your team-our experienced staff are ready to set your practice up for success.

                        </p>
                    </div>
                    <div className="col-12" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', marginTop: '70%', background: '#AFDBF5', color: 'GrayText', height: '10vh', fontSize: '16px' }}>
                        <div className='col-4' style={{ flex: '1', textAlign: 'left', }}>
                            <p style={{ fontSize: '14px', }}>Web conferencing deatils provided upon Confirmation</p>
                        </div>

                    </div>

                    <div>
                        <NavLink to="/" style={{ color: 'rgb(58, 145, 245)' }}>Skip booking for now</NavLink>
                    </div>

                </div>

                <div className="dateright-container col-12" style={{ color: 'black', flexDirection: 'column', padding: '2%' }}>
                    <div className='right-content-title'>
                        <h5 style={{ fontSize: '26px', }}>Select a Date & Time </h5>
                    </div>

                    <div className='time-zone-container' style={{ display: 'flex', gap: '10px', }}>

                        <div className='language-choose col-6' style={{ marginTop: '2%' }}>
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

                        <div className='language-choose col-6' style={{ marginTop: '2%' }}>
                            <label style={{ fontSize: '16px' }}> Time Zone</label>
                            <Selectdropinput />
                        </div>

                    </div>

                    <div className="image-section col-12" style={{ minHeight: '20vh', display: 'flex', marginTop: '2%' }}>
                        <div className='col-12'>
                            <div className='col-10'>
                                <Calendar className='calendar-custom-style col-12'
                                    onChange={onChange}
                                    value={date}
                                />
                            </div>
                        </div>

                        <div className='col-12'>
                            <div style={{ border: '1px dotted black', height: '35vh', width: '50%', borderRadius: '20px' }}>
                                <div className='col-6' style={{ padding: '50%', height: '50px', justifyContent: 'center' }} >
                                    <LuCalendarClock className='clock-custom-style' />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </>

    );
}

export default Datepicker
