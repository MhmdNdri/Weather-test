import React from "react";
import Head from "next/head";
import WeatherCards from "../components/WeatherCards";

export default function Home() {
  return (
    <div className="flex justify-around flex-col">
      <Head>
        <title>Weather Tenzu App</title>

        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/assets/tenzu-logo.svg" />
      </Head>
      <div className="text-white flex justify-center">
        <h1 className="text-base text-center tracking-widest flex flex-col justify-center">
          Welcome to this simple
          <a
            className="underline font-bold tracking-wide"
            href="https://api.openweathermap.org"
          >
            <br></br>
            Showing Weather App!
          </a>
        </h1>
      </div>

      <div className="flex justify-center flex-row my-10 overflow-hidden flex-wrap">
        <WeatherCards />
      </div>
    </div>
  );
}
