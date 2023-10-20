import React from 'react'
import AllRestaurants from './AllRestaurants'
import FilterBtn from './Cuisines'
import PopularRestaurants from './PopularRestaurants'
import SurpriseRestaurant from './SurpriseRestaurant'

type Props = {}

export default function Home({}: Props) {
  return (
    <div>
        <SurpriseRestaurant/>
        <PopularRestaurants/>
        <FilterBtn/>
        <AllRestaurants/>
    </div>
  )
}