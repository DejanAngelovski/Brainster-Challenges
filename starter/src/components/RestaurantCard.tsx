import React, { useContext, useEffect, useState } from "react";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { AllRestaurantsContrext } from "../context/AllRestaurantsContrext";
import { AllRestaurantsType } from "../interfaces/AllInterfaces";

export default function RestaurantCard({
  businessname,
  reviews,
  image,
  restauranttype,
  rating,
  reviewsList,
favs,
id
}: AllRestaurantsType) {
 

 const {handleFavoritesToggle, median } = useContext(AllRestaurantsContrext)

  const [rate, setrate] = useState<number[]>(reviewsList?.map(r=> r.stars))



  return (
    <div className="rounded position-relative card corners bg-light mb-3">
      <div className="position-absolute" onClick={(e)=> {e.preventDefault()
      handleFavoritesToggle(id)
    }}>{
        favs?
        <BsSuitHeartFill className="favs-card"/>:
        <BsSuitHeart className="favs-card"/>

      }</div>
      <img className=" card-img-top corners obj-fit" src={image} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title fw-bold h5">{businessname}</h5>
        <p className="card-text fw-bold text-danger h5">{restauranttype}</p>
        <p className="card-text mb-0"></p>
        <p className="mb-0">
           {median(rate) ?`rating - ${median(rate)}` : ""}
          </p>
       
      </div>
    </div>
  );
}