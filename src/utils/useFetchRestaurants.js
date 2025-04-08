import { useState, useEffect } from "react";

const useFetchRestaurants = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

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
    setIsFetching(false);
  };

  return [listOfRestaurants, isFetching];
};
export default useFetchRestaurants;
