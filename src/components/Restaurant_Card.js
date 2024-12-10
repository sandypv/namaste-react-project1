import { imagePrefixUrl } from "../utils/constants";

const RestaurantCard = ({ restaurant: data }) => {
  if (!data) {
    // return <div>Data is not available</div>;
    return null;
  }

  const imageSrcUrl = imagePrefixUrl.concat(data.cloudinaryImageId);

  return (
    <div className="res-card" style={{ backgroundColor: "lightGrey" }}>
      <img className="res-logo" alt="res-logo" src={imageSrcUrl} />
      <h4>{data.name}</h4>
      <h4>{data.locality}</h4>
      <h4>{data.costForTwo}</h4>
      <h4>{data.avgRating} stars</h4>
    </div>
  );
};

export default RestaurantCard;
