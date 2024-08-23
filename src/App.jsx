
import './App.css'
import Weather from './componants/Search';
import Search from './componants/WeatherApi';

function App() {


  return (
    <div className='App bg-orange-300  p-4 '>
      <h1 className='text-center text-red-700 font-bold mb-6 text-lg'>Weather Forecast</h1>
      <Search />
      <Weather />

    </div>
  )
}

export default App;
