export interface DailyForecast {
    date: string;
    min: number;
    max: number;
    icon: string;
}

export interface WeatherData {
    city: string;
    temperature: number;
    description: string;
    icon: string;
    daily: DailyForecast[];
}
