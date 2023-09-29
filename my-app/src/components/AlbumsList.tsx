import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import artists from "../db";

type Album ={
  
    albumId: string;
    title: string;
    year: number;
    cover: string;
    price: number;

}

const AlbumsList = () => {
  let { id } = useParams();

  let {albumId} = useParams()

  const [filtered, setfiltered] = useState(artists);

  useEffect(() => {
    setfiltered(artists.filter((artist) => artist.id.toString() === id));
  }, [id]);

  
  return (
    <div className="row px-3 ">
      {filtered.map((filter) =>
        filter.albums.map((album) => (
          <div className="col-6 px-0" key={album.albumId}>
            <Link to={`${album.albumId}`} className="d-inline-block">
              <img
                className="img-fluid"
                src={`/images/albums/${album.cover}.jpg`}
                alt=""
              />
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default AlbumsList;
