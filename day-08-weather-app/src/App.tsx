import { useState } from "react";
import type { WeatherData } from "./types/weather";
import { fetchWeather } from "./services/weatherService";
import WeatherForm from "./components/WeatherForm";
import WeatherDisplay from "./components/WeatherDisplay";
import Header from "./components/Header";
import './styles/weather.css';

function App() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");

  const searchCity = async (city: string) => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchWeather(city, unit);
      setWeather(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <Header />
      <WeatherForm onSearch={searchCity} unit={unit} setUnit={setUnit} />

      {loading && <div className="loading">
        <div className="spinner">
        </div>
      </div>}
      {error && <div className="loading">
        <div className="error">
          <p>{error}</p>
        </div>
      </div>}
      {weather && <WeatherDisplay weather={weather} unit={unit} />}
    </div>
  );
}

export default App;
