import React, { useEffect, useState } from 'react';
import { CloudRain, CloudSnow, Sun, Cloud, Thermometer } from 'lucide-react';
import { WeatherData } from '../types';

interface WeatherWidgetProps {
  lat: number;
  lng: number;
  city: string;
}

const WeatherWidget: React.FC<WeatherWidgetProps> = ({ lat, lng, city }) => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      try {
        // Fetch current weather from Open-Meteo (Free, No key required)
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true`
        );
        const data = await response.json();
        if (data.current_weather) {
          setWeather({
            temperature: data.current_weather.temperature,
            weatherCode: data.current_weather.weathercode,
            windSpeed: data.current_weather.windspeed
          });
        }
      } catch (error) {
        console.error("Failed to fetch weather", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [lat, lng]);

  const getWeatherIcon = (code: number) => {
    // WMO Weather interpretation codes
    if (code <= 1) return <Sun className="w-8 h-8 text-orange-400" />;
    if (code <= 3) return <Cloud className="w-8 h-8 text-gray-400" />;
    if (code <= 69) return <CloudRain className="w-8 h-8 text-blue-400" />;
    return <CloudSnow className="w-8 h-8 text-sky-300" />;
  };

  const getWeatherDesc = (code: number) => {
    if (code <= 1) return '晴朗';
    if (code <= 3) return '多雲';
    if (code <= 69) return '有雨';
    return '有雪';
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-4 shadow-sm border border-blue-100 flex items-center justify-between mb-4">
      <div>
        <h3 className="text-sm text-gray-500 font-display mb-1">{city} 即時天氣</h3>
        {loading ? (
          <div className="text-xl font-bold text-gray-400">Loading...</div>
        ) : (
          <div className="flex items-end gap-2">
            <span className="text-3xl font-bold text-gray-800 font-display">
              {weather?.temperature}°C
            </span>
            <span className="text-sm text-gray-600 mb-1">
               {weather ? getWeatherDesc(weather.weatherCode) : '--'}
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-col items-center">
        {loading ? <Cloud className="w-8 h-8 text-gray-300 animate-pulse" /> : (weather && getWeatherIcon(weather.weatherCode))}
        <div className="flex items-center gap-1 mt-1 text-xs text-gray-400">
           <Thermometer size={12} />
           <span>風速 {weather?.windSpeed} km/h</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;