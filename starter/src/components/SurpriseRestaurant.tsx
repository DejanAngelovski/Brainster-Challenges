import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AllRestaurantsContrext } from "../context/AllRestaurantsContrext";
import { AllRestaurantsType } from "../interfaces/AllInterfaces";

type Props = {};

export default function SurpriseRestaurant({}: Props) {
  const { alldata } = useContext(AllRestaurantsContrext);

  const [random, setrandom] = useState<AllRestaurantsType>()


 useEffect(()=>{
  const randomobj = alldata[Math.floor(Math.random() * alldata.length)];
  setrandom(randomobj)
 }, [alldata])



  return (
    <div className="border-1 border-bottom border-1 border-top py-5 d-flex justify-content-center flex-column">
      <h2 className="text-center text-uppercase mb-5">
        Don't know what to eat?
      </h2>
      <Link
        to={`/${random?.restauranttype}/${random?.id}`}
        className="btn btn-success mx-2"
      >
        Surprise me!
      </Link>
    </div>
  );
}