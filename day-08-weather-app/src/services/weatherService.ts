import type { WeatherData } from "../types/weather";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export async function fetchWeather(
    city: string,
    unit: "metric" | "imperial"
): Promise<WeatherData> {

    const geoRes = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
    );

    if (!geoRes.ok) {
        throw new Error("Failed to fetch city location");
    }

    const geo = await geoRes.json();

    // ✅ DEFENSIVE CHECK (IMPORTANT)
    if (!geo.length) {
        throw new Error("City not found");
    }

    const { lat, lon, name } = geo[0];

    const weatherRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unit}&appid=${API_KEY}`
    );

    if (!weatherRes.ok) {
        throw new Error("Weather fetch failed");
    }

    const data = await weatherRes.json();

    const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${unit}&appid=${API_KEY}`
    );

    const forecastData = await forecastRes.json();

    return {
        city: name,
        temperature: data.main.temp,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        daily: forecastData.list
            .filter((_: any, i: number) => i % 8 === 0)
            .slice(0, 7)
            .map((d: any) => ({
                date: new Date(d.dt * 1000).toDateString(),
                min: d.main.temp_min,
                max: d.main.temp_max,
                icon: d.weather[0].icon,
            })),
    };
}
