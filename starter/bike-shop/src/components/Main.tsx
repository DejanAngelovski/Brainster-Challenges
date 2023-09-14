import React, { useEffect, useState } from "react";
import Card from "./Card";
import Filters from "./Filters";

export default function Main() {
  const [products, setProducts] = useState<any>();
  useEffect(() => {
    fetch("https://challenges.brainster.tech/ajax_data/data.json")
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);

  const [filterized, setFilterized] = useState(products);
  const [active, setActive] = useState("all");

  const brandFilter = (e: React.MouseEvent<HTMLLIElement>) => {
    const dataType = e.currentTarget.children[0].innerHTML;
 
    const fill = products.filter(function (product: any) {
      return product.brand == dataType;
    });
    setFilterized(fill);
  };
  const genderFilter = (e: React.MouseEvent<HTMLLIElement>) => {
    const dataType = e.currentTarget.children[0].innerHTML.toLocaleUpperCase();
    const fill = products.filter(function (product: any) {
      return product.gender == dataType;
    });
    setFilterized(fill);
  };

  return (
    <div>
      <Filters
        showAll={() => {
          setFilterized(products);
        }}
        showBrand={brandFilter}
        showGender={genderFilter}
        bikes={products}
      />

      {filterized ? <Card bikearr={filterized} /> : <Card bikearr={products} />}
    </div>
  );
}
