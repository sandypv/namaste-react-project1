import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router";
import { RestaurantMenuShimmer } from "../components/Shimmer";
import RestaurantCategory from "../components/RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  //   console.log("the resId is", resId);

  const restaurantMenu = useRestaurantMenu(resId);

  if (restaurantMenu === null) return <RestaurantMenuShimmer />;

  const { name, cuisines, costForTwoMessage } =
    restaurantMenu?.data?.cards[2]?.card?.card?.info;

  const itemCards =
    restaurantMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
      ?.card?.card?.itemCards ||
    restaurantMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]
      ?.card?.card?.itemCards ||
    restaurantMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR
      ?.cards[7];


  const itemCategories =
    restaurantMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) =>
        item?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log("items", itemCategories);

  return (
    <div className="text-center">
      <h1 className="font-bold text-xl my-4">{name}</h1>
      <p className="font-bold">
        {cuisines.join(" , ")} - {costForTwoMessage}
      </p>
      {itemCategories.map((category) => (
        <RestaurantCategory key={category?.card?.card?.categoryId} data={category?.card?.card} />
      ))}
    </div>
  );
};
export default RestaurantMenu;
