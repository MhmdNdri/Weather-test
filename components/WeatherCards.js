import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Request } from "../pages/api";
import Link from "next/link";

export default function WeatherCards() {
  const [weathersData, setWeathersData] = useState([]);

  const query = useQuery("getWeather", () => Request("getWeather"));

  useEffect(() => {
    setWeathersData(query.data?.data?.list);
  }, [query]);

  return (
    <>
      {weathersData ? (
        weathersData.map((item) => {
          return (
            <li
              key={item.id}
              className="text-white list-none rounded-lg bg-[#242331] m-5 cursor-pointer"
            >
              <Link href={`/city/${item.name}`} passHref>
                <div className="max-w-sm overflow-hidden shadow-lg hover:shadow-inner  shadow-[#242331]">
                  <h1 className="w-full font-bold text-center text-xl p-8">
                    {item.name}
                  </h1>
                  <div className="px-4 py-4 text-center">
                    <div className="font-bold text-sm mb-2">
                      Temp: {item.main.feels_like}°C
                    </div>
                    <p className="text-gray-400 text-base">
                      {item.weather[0].description}few Clouds
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          );
        })
      ) : (
        <h1 className="w-full text-white font-bold text-center text-xl p-8">
          Loading ...
        </h1>
      )}
    </>
  );
}
