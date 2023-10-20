import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AllRestaurantsContrext } from "../context/AllRestaurantsContrext";
import RestaurantCard from "./RestaurantCard";

export default function PopularRestaurants() {

  const { alldata } = useContext(AllRestaurantsContrext);

  const [sort, setsort] = useState(alldata);

  useEffect(() => {
    setsort(
      alldata
        .sort((a: any, b: any) => b.reviews - a.reviews)
        .slice(0, 10)
    );
  }, [alldata]);

  return (
    <div className="row  mx-auto border-1 border-bottom border-1 border-top py-5 justify-content-center">
      <div className="col-12">
        <div className="row ">
          <h2 className="text-center text-uppercase mb-5">
            Popular Restaurants
          </h2>
          {sort.map((card) => (
            <div key={card.id} className="col-lg-2 col-12">
              <Link
                className="card-width mx-auto w-100"
                to={`/${card.restauranttype}/${card.id}`}
              >
                <RestaurantCard
                favs={card.favs}
                id={card.id}
                  image={card.image}
                  businessname={card.businessname}
                  restauranttype={card.restauranttype}
                  reviews={card.reviews} reviewsList={card.reviewsList}                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
