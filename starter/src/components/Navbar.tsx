import React from 'react'
import {BsSuitHeartFill} from "react-icons/bs"
import { Link } from 'react-router-dom'



export default function Navbar() {
  return (
    
        <div className='flex justify-content-between py-4'>
        <div className='text-uppercase fw-bold my-auto'>
            <Link to={"/"}>restaurant</Link>
        </div>
        <div>
            <Link to={"/favorites"}><BsSuitHeartFill className='favs'/></Link>
        </div>
        </div>

  )
}