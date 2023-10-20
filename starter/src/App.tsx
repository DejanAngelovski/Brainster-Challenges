import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import './index.scss'
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Link, Route, Routes } from "react-router-dom";
import Filtered from "./components/CuisineDetail";
import RestaurantDetails from "./components/RestaurantDetails";
import Favourites from "./components/Favourites";
import Home from "./components/Home";
import AllRestaurantsContrext from "./context/AllRestaurantsContrext";
import AllRestaurantsContrextProvider from "./context/AllRestaurantsContrext";
import Cuisines from "./components/Cuisines";
import CuisineDetail from "./components/CuisineDetail";


const App = () => {


  
  return(
    <div className="App container-fluid "> 
    <div className="mx-lg-5">
    <Navbar/>
    <AllRestaurantsContrextProvider>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/:type" element={<CuisineDetail/>}/>
      <Route path="/:type/:id" element={<RestaurantDetails/>}/>
      <Route path="/favorites" element={<Favourites/>}/>
    </Routes>
    </AllRestaurantsContrextProvider>
    <Footer/>
    </div>
    </div>
  )

};

export default App;