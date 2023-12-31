import { useState, useEffect } from "react";

import { WEATHER_API_KEY } from "@env";

import * as Location from "expo-location";

export const useGetWeather = () => {
  const [loading, setLoading] = useState(true);
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [weatherData, setWeatherData] = useState([]);

  const fetchWeatherData = async () => {
    try {
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
      );

      data = await res.json();
      setWeatherData(data);
    } catch (error) {
      setErrorMsg("Could not load weather");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        setErrorMsg("Permission denied");
        return;
      }

      try {
        let location = await Location.getCurrentPositionAsync({});

        // setLocation(location);

        // console.log(location, "location");
        setLat(location.coords.latitude);
        setLon(location.coords.longitude);

        await fetchWeatherData();
      } catch (error) {
        console.log(error, "our status");
        setErrorMsg("error");
      }
    })();
  }, [lat, lon]);

  return [loading, errorMsg, weatherData];
};
