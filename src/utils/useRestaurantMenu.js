import { useEffect, useState } from "react";
import { Menu_Api_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);
 
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(Menu_Api_URL + resId);
    const menuJsonData = await data.json();
    setRestaurantMenu(menuJsonData);
  };
  return restaurantMenu;
};

export default useRestaurantMenu;