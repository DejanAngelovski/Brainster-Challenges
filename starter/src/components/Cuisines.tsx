import { useContext } from "react";
import { Link } from "react-router-dom";
import { AllRestaurantsContrext } from "../context/AllRestaurantsContrext";

export default function Cuisines() {

  const { alldata,  } = useContext(AllRestaurantsContrext);
  const allRestaurantTypes = alldata.map((d) => d.restauranttype);
  const uniqueData = [...new Set(allRestaurantTypes)];



  return (
    <div className="border-1 border-bottom border-1 border-top py-5 d-flex justify-content-center flex-column">
      <h2 className="text-center text-uppercase mb-4">Cuisines</h2>

    <div className="mx-lg-auto">
    {uniqueData.map((type, idx) => (
        <Link key={idx} className="btn btn-danger mx-1 my-2 d-block d-lg-inline-block" to={`/${type}`}>{type}</Link>
      ))}
    </div>
    </div>
  );
}