import React, { useEffect, useState } from "react";

import axios from "axios";

export const CityInfo = ({ id }) => {
  const [weathersData, setWeathersData] = useState([]);

  const getCityWeather = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${id}&appid=a80bec999ed8c77b8e990b8a42ce51cc`
      )
      .then((res) => {
        setWeathersData(res.data);
      });
  };

  useEffect(() => {
    getCityWeather();
  }, []);

  console.log(weathersData);

  return (
    <>
      {weathersData && weathersData.main && weathersData.weather ? (
        <div className="flex justify-center flex-row my-10 overflow-hidden flex-wrap ">
          <div className="text-white list-none rounded-lg bg-[#242331] m-5">
            <div className="max-w-2xl overflow-hidden shadow-lg hover:shadow-inner  shadow-[#242331] p-5">
              <h1 className="w-full font-bold text-center text-xl p-8">
                {weathersData.name}
              </h1>
              <div className="flex flex-row">
                <div className="px-4 py-4 text-center">
                  <div className="font-bold text-sm mb-2">
                    Temp: {weathersData.main.temp}°F
                  </div>
                  <div className="font-bold text-sm mb-2">
                    Feels like: {weathersData.main.feels_like}°F
                  </div>

                  <div className="font-bold text-sm mb-2">
                    Wind Speed: {weathersData.wind.speed}
                  </div>
                </div>
                <div className="px-4 py-4 text-center mx-5">
                  <div className="font-bold text-sm mb-2">
                    Humidity: {weathersData.main.humidity}%
                  </div>
                  <div className="font-bold text-sm mb-2">
                    Sea level: {weathersData.main.sea_level} MSL
                  </div>

                  <div className="font-bold text-sm mb-2">
                    Pressure: {weathersData.main.feels_like} P
                  </div>
                </div>
              </div>
              <p className="text-gray-400 text-sm text-center mb-5">
                {weathersData.weather[0].description}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
