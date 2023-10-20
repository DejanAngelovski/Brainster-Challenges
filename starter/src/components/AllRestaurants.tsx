import React, { useContext, useEffect, useState } from "react";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { AllRestaurantsContrext } from "../context/AllRestaurantsContrext";
import { AllRestaurantsType } from "../interfaces/AllInterfaces";
import RestaurantCard from "./RestaurantCard";
import RestaurantDetails from "./RestaurantDetails";

export default function AllRestaurants() {
  const { alldata } = useContext(AllRestaurantsContrext);
  

  return (
    <div className="row flex-wrap mx-auto border-1 border-bottom border-1 border-top py-5 justify-content-center">
      <div className="col-12">
        <div className="row ">
          <h2 className="text-center text-uppercase mb-5">all restaurants</h2>
          {alldata.map((card) => (
            <div key={card.id} className="col-lg-2 col-12">
              <Link
                className="card-width mx-auto w-100"
                to={`/${card.restauranttype}/${card.id}`}
              >
                <RestaurantCard
                id={card.id}
                  image={card.image}
                  businessname={card.businessname}
                  restauranttype={card.restauranttype}
                  reviews={card.reviews}
                  reviewsList={card.reviewsList}
                  favs={card.favs}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
function fav() {
  throw new Error("Function not implemented.");
}