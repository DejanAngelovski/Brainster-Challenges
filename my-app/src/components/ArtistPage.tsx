import { type } from "@testing-library/user-event/dist/type";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import artists from "../db";
import AlbumPage from "./AlbumPage";
import AlbumsList from "./AlbumsList";
import { ArtistType } from "./ArtistItem";



const ArtistsPage = () => {
  let { id } = useParams();

  const [filtered, setfiltered] = useState(artists);

  useEffect(() => {
    setfiltered(filtered.filter((artist) => artist.id.toString() === id));
  }, [id]);

  return (
    <div className="container-fluid bga py-5">
      {filtered.map((filter) => (
        <div className="row  px-3 mb-3" key={filter.id}>
          <div
            className="col d-flex justify-content-center my-2"
            
          >
            <div className="w-50">
              <img
                className="img-fluid mb-2"
                src={`../images/covers/${filter.cover}.jpg`}
                alt=""
              />
              <h3>{filter.name}</h3>
            </div>
          </div>
          <p>{filter.bio}</p>
        </div>
      ))}
      <AlbumsList />
    </div>
  );
};

export default ArtistsPage;
