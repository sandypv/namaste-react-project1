import { useState } from "react";
import { Link } from "react-router";
import RestaurantCard from "./Restaurant_Card";
import withPromotedLabel from "./withPromotedLabel";
import useFetchRestaurants from "../utils/useFetchRestaurants";
import Grocery from "./Grocery";

const FilterRestaurants = ({ listOfRestaurants }) => {
  const searchRestaurants = useFetchRestaurants();

  const [searchRestaurant, setSearchRestaurant] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] =
    useState(listOfRestaurants);

  const RestaurantCardWithPromotedLabel = withPromotedLabel(RestaurantCard);

  //filtering the restaurants based on avgRating
  const handleFilteredRestaurantData = () => {
    filteredListOfRestaurants = listOfRestaurants.filter(
      (filteredRestaurant) => {
        const filteredRestaurantInfo = filteredRestaurant.card.card.info;

        return filteredRestaurantInfo.avgRating >= 4.4;
      }
    );
    setFilteredRestaurants(filteredListOfRestaurants);
  };

  const handleSearchBtnChange = (e) => {
    setSearchRestaurant(e.target.value);
  };
  // Filter the restaurant cards and update the UI
  const handleFilterSearchBtn = () => {
    const filteredSearchedRestaurant = listOfRestaurants.filter(
      (restaurant) => {
        const restaurantSearchInfo = restaurant.card.card.info;
        return restaurantSearchInfo.name
          .toLowerCase()
          .includes(searchRestaurant.toLowerCase());
      }
    );
    setFilteredRestaurants(filteredSearchedRestaurant);
  };

  return (
    <div>
      <div className="filter flex p-4">
        <div className="p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchRestaurant}
            onChange={handleSearchBtnChange}
          />

          <button
            className=" m-4 py-1 px-2 bg-gray-400 text-white rounded-full cursor-pointer"
            onClick={handleFilterSearchBtn}
          >
            search
          </button>
        </div>
        <div className="p-4">
          <button
            className=" py-1 px-2 bg-blue-400 text-white mt-4 mb-4 rounded-full cursor-pointer"
            onClick={handleFilteredRestaurantData}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((eachRestaurant) => {
          const eachRestaurantInfo = eachRestaurant?.card?.card?.info;

          return (
            <Link
              key={eachRestaurantInfo?.id}
              to={"/restaurants/" + eachRestaurantInfo.id}
            >
              {eachRestaurantInfo.promoted ? (
                <RestaurantCardWithPromotedLabel
                  restaurant={eachRestaurantInfo}
                />
              ) : (
                <RestaurantCard restaurant={eachRestaurantInfo} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default FilterRestaurants;
