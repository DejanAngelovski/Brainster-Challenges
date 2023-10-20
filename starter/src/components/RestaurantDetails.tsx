import React, { useContext, useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";
import { AllRestaurantsContrext } from "../context/AllRestaurantsContrext";
import RestaurantCard from "./RestaurantCard";
import {
  AllRestaurantsTypeFull,
  ReviewsType,
} from "../interfaces/AllInterfaces";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import axios from "axios";

export default function RestaurantDetails() {
  const {
    alldata,
    name,
    comment,
    star,
    median,
    handleFavoritesToggle,
    setname,
    setcomment,
    setstar,
  } = useContext(AllRestaurantsContrext);

  const { id } = useParams();

  const restaurant = alldata.find((res) => res.id === id);
  const reviews = restaurant?.reviewsList;
  const review = reviews?.filter((e) => e.stars);
  const stars = review?.map((e) => e.stars);
  const rating = median(stars === undefined ? [] : stars);

  const [ignored, forceupdate] = useReducer((x) => x + 1, 0);
  const [reviewcount, setreviewcount] = useState(
    restaurant?.reviewsList.length
  );

  const rev = {
    id: restaurant?.reviewsList.length,
    author: name,
    comment: comment,
    stars: star,
  };

  
  const put = () => {
    restaurant?.reviewsList?.push(rev);


    
    const newreview = {
      reviews: reviewcount,
      parkinglot: restaurant?.parkinglot,
      phone: restaurant?.phone,
      image: restaurant?.image,
      restauranttype: restaurant?.restauranttype,
      businessname: restaurant?.businessname,
      address: restaurant?.address,
      slug: restaurant?.businessname,
      email: restaurant?.email,
      id: restaurant?.id,
      reviewsList: restaurant?.reviewsList,
    };
    
    setreviewcount(restaurant?.reviewsList.length);
    axios
    .put(`http://localhost:5001/restaurants/${id}`, newreview)
    
    forceupdate();
    
    
  };
  
  return (
    <div>
      <div className="row flex-wrap mx-auto border-1 border-bottom border-1 border-top py-5 justify-content-center ">
        <h2 className="text-center text-uppercase mb-5">
          {restaurant?.businessname}
        </h2>

        <div className="col-12">
          <div className="rounded px-0 position-relative card corners bg-light mb-3">
            <div
              className="position-absolute"
              onClick={(e) => {
                e.preventDefault();
                handleFavoritesToggle(id);
              }}
            >
              {restaurant?.favs ? (
                <BsSuitHeartFill className="favs-card" />
              ) : (
                <BsSuitHeart className="favs-card" />
              )}
            </div>
            <img
              className=" card-img-top corners obj-fit h-100"
              src={restaurant?.image}
              alt="Card image cap"
            />
            <div className="card-body h-100">
              <p className="mb-0 h5">{rating ? `rating - ${rating},` : ""}</p>
              <p className="mb-3">
                {reviewcount
                  ? `based on ${reviewcount} reviews`
                  : null}
              </p>
              <h5 className="mb-3">{restaurant?.phone}</h5>
              <p className="mb-2">{restaurant?.email}</p>
              <p className="mb-2">{restaurant?.address}</p>
              <p>
                {restaurant?.parkinglot
                  ? `We have a parking lot waiting for you`
                  : ""}
              </p>
              <p></p>
            </div>
          </div>
        </div>

        <h2 className="text-center text-uppercase my-5">Reviews</h2>

        <div className="row">
          {reviews?.map((rev) => (
            <div
              key={rev.id}
              className="col-12 px-3 bg-light my-2 py-3 rounded"
            >
              <p>
                <span className="fw-bold">Author: </span>
                {rev.author}
              </p>
              <p>
                <span className="fw-bold">Message: </span>
                {rev.comment}
              </p>
              <p className="mb-0">
                <span className="fw-bold">Stars: </span>
                {rev.stars}
              </p>
            </div>
          ))}
        </div>

        <h2 className="text-center text-uppercase my-5">Reviews form</h2>

        <div className="row">
          <div className="col-12">
            <form
              action=""
              onSubmit={(e) => {
                e.preventDefault();
                put();


              }}
            >
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control mb-3"
                id="name"
                onChange={(e) => setname(e.target.value)}
                onSubmit={(e) => {
                  console.log(e.target);
                }}
              />
              <label htmlFor="comment">Comment</label>
              <input
                type="text"
                className="form-control mb-3"
                id="comment"
                onChange={(e) => setcomment(e.target.value)}
              />
              <label htmlFor="stars">Stars</label>
              <input
                type="range"
                min={1}
                max={5}
                className="form-range"
                id="stars"
                value={star}
                onChange={(e) => setstar(parseInt(e.target.value))}
              />
              <button
                type="submit"
                className="btn btn-success form-control mt-2"
              >
                Leave a review
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}