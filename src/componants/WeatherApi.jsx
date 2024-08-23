
import React, { useState } from 'react';
import useWeatherStore from '../Store';

const Search = () => {
    const [city, setCity] = useState('');
    const fetchWeather = useWeatherStore((state) => state.fetchWeather);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchWeather(city);
    };

    return (
        <form onSubmit={handleSubmit} >
            <input
                className='p-1 text-center capitalize text-indigo-800 font-bold'
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city name"
                required
            />
            <button type="submit" className='bg-orange-700 text-white rounded-xl p-1 mx-1 hover:bg-orange-500'>Search</button>
        </form>
    );
};

export default Search;
