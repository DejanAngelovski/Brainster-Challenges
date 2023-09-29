import React, { useState } from "react";
import ArtistItem from "./ArtistItem";
import artists from "../db"
import { Link } from "react-router-dom";



const ArtistsList = () => {


  const [Data, setData] = useState(artists)



  return (
    <div className="container-fluid bga">
      <div className="row justify-content-center">
        <h2 className="pb-2 mt-3">Browse the artsts</h2>
        <div className="col-12">
          <div className="row ">
          {
            Data.map(artist => (
              <Link to={`/artists/${artist.id}`} key={artist.id}><ArtistItem name={artist.name} cover={artist.cover} /></Link>
            ))
          }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistsList;
