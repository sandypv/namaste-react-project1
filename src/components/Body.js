import RestaurantCard from "./Restaurant_Card";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants,setFilteredRestaurants] = useState([]);
  const [searchRestaurant, setSearchRestaurant] = useState("");
  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const result = await response.json();
    //The first 3 cards have config info,so slicing it by 3.
    const restaurantInfo = result?.data?.cards.slice(3);
    setListOfRestaurants(restaurantInfo);
    setFilteredRestaurants(restaurantInfo);
  };

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
        return restaurantSearchInfo.name.toLowerCase().includes(searchRestaurant.toLowerCase());
      }
    );
    setFilteredRestaurants(filteredSearchedRestaurant);
  };

  // conditional rendering using ternary operator
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchRestaurant}
            onChange={handleSearchBtnChange}
          />

          <button className="search-btn" onClick={handleFilterSearchBtn}>
            search
          </button>
        </div>

        <button className="filter-btn" onClick={handleFilteredRestaurantData}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((eachRestaurant) => {
          const eachRestaurantInfo = eachRestaurant.card.card.info;

          return (
            <RestaurantCard
              key={eachRestaurantInfo?.id}
              restaurant={eachRestaurantInfo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
