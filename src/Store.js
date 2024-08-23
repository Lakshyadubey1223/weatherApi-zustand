import {create} from "zustand";

const useWeatherStore = create ((set) => ({
    weather: null,
    loading: false,
    error: null,

    fetchWeather: async (city) => {

        set ({loading: true});
        try {
            const apiKey = 'c19c6531e900b5a286e3f08856a73b39';
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
        
            const data = await response.json();

            if (response.ok) {
                set ({weather: data, loading: false, error: null});
            }
            else {
                set ({weather: null, loading: false, error: error.message});
            }

         } catch (error) {
                set ({weather: null, loading: false, error: "Failed"});
            }
        }
    
  }));


    export default useWeatherStore;
   