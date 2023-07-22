import { useContext } from "react";
import { IMG_CDN_URL } from "../content";


const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  return (
    <div className="r-card w-25 p-2 m-2 shadow-lg bg-pink-50">
      <img className="card-content" src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="card-title">{name}</h2>
      <h3 className="card-description">{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString}</h4>
    </div>
  );
};

export default RestrauntCard;