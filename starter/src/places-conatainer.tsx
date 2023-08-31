
import React, {useState, useEffect} from "react";
import Place from "./place";

export interface Def {
  id?: number;
  desc: string;
  place : string;
  img: string;
}

const PlacesContainer: React.FC = (Def) => {

  const[posts, setPosts] = useState<Def[]>([]);

  useEffect(() => {
    fetch("http://localhost:5001/places").then(res => res.json()).then(posts => {
      setPosts(posts);
    }
    )})

  return (
    <div className="places-container">

     {
       posts.map(({id, place, desc, img}) => (
         <Place key={id} place={place} desc={desc} img={img}/>
       ))}
    </div>
  );
}

export default PlacesContainer;
