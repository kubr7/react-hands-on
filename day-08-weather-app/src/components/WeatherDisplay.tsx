import type { WeatherData } from "../types/weather";

interface Props {
    weather: WeatherData;
    unit: "metric" | "imperial";
}

export default function WeatherDisplay({ weather, unit }: Props) {
    return (
        <div className="weather-card">
            <img className="weather-img"
                src={`https://openweathermap.org/img/wn/10d@2x.png`}
                alt="weather"
            />
            <h2 className="city">{weather.city}</h2>
            <p className="description">{weather.description}</p>

            <h3 className="temperature">
                {weather.temperature}°{unit === "metric" ? "C" : "F"}
            </h3>

            <h4 className="forecast-title">7 Day Forecast</h4>

            <ul className="forecast-list">
                {weather.daily.map((d) => (
                    <li className="forecast-item" key={d.date}>
                        <span>{d.date}</span>
                        <span>{d.min}° / {d.max}°</span>
                    </li>
                ))}
            </ul>
        </div>

    );
}
