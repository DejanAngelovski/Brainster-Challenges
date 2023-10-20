import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AllRestaurantsContrext } from "../context/AllRestaurantsContrext";
import RestaurantCard from "./RestaurantCard";

type Props = {};

export default function Filtered({}: Props) {
  const { type } = useParams();

  const { filtereddata, alldata, setfiltereddata } = useContext(
    AllRestaurantsContrext
  );

  useEffect(() => {
    setfiltereddata(alldata.filter((res) => res.restauranttype === type));
  }, [alldata, type]);

  return (
    <div className="row  border-1 border-bottom border-1 border-top py-5">
      <h1 className="text-center text-uppercase mb-5">{type} Restaurants</h1>
      {filtereddata.map((card) => (
        <div key={card.id} className="col-lg-2 col-12">
          <Link
            className="card-width w-100 mx-auto"
            to={`/${card.restauranttype}/${card.id}`}
          >
            <RestaurantCard
            favs={card.favs}
              id={card.id}
              image={card.image}
              businessname={card.businessname}
              restauranttype={card.restauranttype}
              reviews={card.reviews} reviewsList={card.reviewsList}            />
          </Link>
        </div>
      ))}
    </div>
  );
}