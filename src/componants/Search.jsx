import React from "react";
import useWeatherStore from "../Store";

const Weather = () => {
    const { weather, loading, error } = useWeatherStore();

    if (error) return <p>{error}</p>
    if (!weather) return <p className="text-red-800 font-bold">No data</p>
    if (loading) return <p>Loading...</p>

    return (
        <div className="font-bold text-pink-800 space-y-4">
            <h2> Weather in {weather.name}</h2>
            <p>Temperature: {weather.main.temp}°C</p>
            <p>Humidity: {weather.main.humidity}%</p>
        </div>
    )
};


export default Weather;