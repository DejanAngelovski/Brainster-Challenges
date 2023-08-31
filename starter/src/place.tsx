
import { Def } from "./places-conatainer";



const Place: React.FC<Def> = ({desc, place, img}) => {

 
  return (
    <div className="place">
      <div className="wrapper">
        <h2>{place}</h2>
        <p>{desc}</p>
      </div>
      <img src={img} alt="" />
    </div>
  );
}

export default Place;