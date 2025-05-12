import { useContext } from "react";
import { imagePrefixUrl } from "../utils/constants";
import userContext from "../utils/userContext";

const RestaurantCard = ({ restaurant: data }) => {
  if (!data) {
    // return <div>Data is not available</div>;
    return null;
  }
const {loggedIn} = useContext(userContext);
  
  return (
    <div className=" m-4 p-4 w-[250px] rounded-lg hover:bg-gray-400 bg-gray-200 ">
      <img
        className=" rounded-lg h-40 w-52"
        alt="res-logo"
        src={imagePrefixUrl + data.cloudinaryImageId}
      />
      <h4 className="font-bold py-4 text-lg">{data.name}</h4>
      <h4>{data.locality}</h4>
      <h4>{data.costForTwo}</h4>
      <h4>{data.avgRating} stars</h4>
      <h4>loggedIn user:{loggedIn}</h4>
    </div>
  );
};




export default RestaurantCard;
