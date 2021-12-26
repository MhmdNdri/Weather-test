import React from "react";
import { CityInfo } from "../../components/CityInfo";

const CityWeather = ({ id }) => {
  return (
    <>
      <CityInfo id={id} />
    </>
  );
};

export const getServerSideProps = async ({ params }) => {
  const id = params.id;
  return {
    props: { id },
  };
};

export default CityWeather;
