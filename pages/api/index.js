import axios from "axios";

const APIConfig = {
  baseURL: "https://api.openweathermap.org",
  maxRedirects: 0,
};

export const Endpoints = {
  getWeather: {
    url: "/data/2.5/box/city?bbox=12,32,15,37,10&appid=a80bec999ed8c77b8e990b8a42ce51cc",
    method: "GET",
  },

  // getCityWeather: {
  //   url: `/data/2.5/weather?q=${id}&appid=a80bec999ed8c77b8e990b8a42ce51cc`,
  //   method: "GET",
  // },
};

const instance = axios.create(APIConfig);

export const Request = (name, options) =>
  instance({
    ...Endpoints[name],
    ...options,
  });
