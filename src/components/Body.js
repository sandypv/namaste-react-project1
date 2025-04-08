import { RestaurantCardShimmer } from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import useFetchRestaurants from "../utils/useFetchRestaurants";
import FilterRestaurants from "./FilterRestaurants";

const Body = () => {
  const [restaurantsList, isFetching] = useFetchRestaurants();
  const onlineStatus = useOnlineStatus();


  if (!onlineStatus) {
    return <h2>You are offline. Check your internet connection .</h2>;
  }

  if (isFetching) {
    return <RestaurantCardShimmer />;
  }

  if (restaurantsList.length === 0) {
    return <h2>There are no restaurants available.</h2>;
  }

  return (
    <div className="body">
      <FilterRestaurants listOfRestaurants={restaurantsList} />
    </div>
  );
};

export default Body;
