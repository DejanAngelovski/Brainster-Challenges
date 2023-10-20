import React, { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  AllRestaurantsType,
  AllRestaurantsTypeFull,
  ContextData,
  ReviewsType,
} from "../interfaces/AllInterfaces";

type Props = {
  children: React.ReactNode;
};

export const AllRestaurantsContrext = createContext<ContextData>({
  alldata: [],
  filtereddata: [],
  setfiltereddata: (value: React.SetStateAction<AllRestaurantsType[]>) => [],
  handleFavoritesToggle: (id: string | undefined) => [],
  favorite: [],
  median: (numbers: number[]) => 0,
  setname: (value: React.SetStateAction<string>) => "",
  setcomment: (value: React.SetStateAction<string>) => "",
  setstar: (value: React.SetStateAction<number>) => 1,
  star: 1,
  name: "",
  comment: "",
});

export default function AllRestaurantsContrextProvider({ children }: Props) {
  const [data, setdata] = useState<AllRestaurantsTypeFull[]>([]);
  const [filtered, setfiltered] = useState<AllRestaurantsType[]>([]);
  const [favorite, setfavorite] = useState<AllRestaurantsTypeFull[]>([]);
  const [name, setname] = useState("");
  const [comment, setcomment] = useState("");
  const [star, setstar] = useState(1);

  useEffect(() => {
    fetch("http://localhost:5001/restaurants")
      .then((res) => res.json())
      .then((datas) => {
        setdata(datas);
        setfiltered(datas);
      });
  }, []);

  

  const handleFavoritesToggle = (id: string | undefined) => {
    const images = data.map((res) => {
      if (res.id === id) {
        res.favs = !res.favs;
        res.favs
          ? setfavorite([...favorite, res])
          : setfavorite(favorite.filter((res) => res.favs === true));
      }
      return res;
    });
    setdata(images);
  };

  const median = function median(numbers: number[]) {
    const sorted = Array.from(numbers).sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
      return (sorted[middle - 1] + sorted[middle]) / 2;
    }

    return sorted[middle];
  };

  return (
    <AllRestaurantsContrext.Provider
      value={{
        alldata: data,
        filtereddata: filtered,
        setfiltereddata: setfiltered,
        handleFavoritesToggle,
        favorite,
        median,
        setname,
        setcomment,
        setstar,
        star,
        name,
        comment,
      }}
    >
      {children}
    </AllRestaurantsContrext.Provider>
  );
}