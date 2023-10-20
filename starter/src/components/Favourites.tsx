import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AllRestaurantsContrext } from '../context/AllRestaurantsContrext'
import RestaurantCard from './RestaurantCard'

type Props = {}


export default function Favourites({}: Props) {
  const {favorite} = useContext(AllRestaurantsContrext)
  return (
    <div>
       <div className="row flex-wrap mx-auto border-1 border-bottom border-1 border-top py-5 justify-content-center">
      <div className="col-12">
        <div className="row ">
          <h2 className="text-center text-uppercase mb-5">Your favorite restaurants</h2>
          {favorite?.map((card) => (
            <div key={card.id} className="col-12 mb-3">
              <Link
                className=""
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
    </div>
  )
}
