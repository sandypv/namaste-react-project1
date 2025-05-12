import RestaurantCategory from "./RestaurantCategory";
import useRestaurantMenuPage from "../utils/useRestaurantMenu";
import { imagePrefixUrl } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../Redux/cartSlice";

const RestaurantCategoryItemsList = (items) => {
  //   console.log("itemCards", items.items);
  const itemsCategory = items.items;

  const dispatch = useDispatch(); //useDispatch hook is used for dispatching an action

  const handleAddItem = (item) => {
    //dispatch an action
    //This addItem goes to the cartSLice reducer function and added to the payload as payload:{"pizza"}
    dispatch(addItem(item));
  };

  return (
    <div>
      {itemsCategory.map((item) => (
        <div
          key={item.card.info.id}
          className="text-left p-2 m-2 border-b-2 border-gray-200"
        >
          <div className="flex">
            <div className="w-9/12">
              <div className="py-2">{item.card.info.name}</div>
              <div>
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </div>
              <div className="py-4">
                <span className="text-emerald-800 text-sm">
                  ★{item.card.info.ratings.aggregatedRating.rating}
                </span>
                <span>
                  ({item.card.info.ratings.aggregatedRating.ratingCountV2})
                </span>
              </div>

              <p className="text-sm">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 p-4 flex">
              <div>
                {item.card.info.imageId ? (
                  <img
                    className="bg-gray-300 rounded-2xl w-96 h-36"
                    alt="category-items"
                    src={imagePrefixUrl + item.card.info.imageId}
                  />
                ) : (
                  " "
                )}
              </div>

              <div className="absolute">
                <button
                  className="text-emerald-700 font-bold border border-solid bg-white rounded-l px-7 mx-6"
                  onClick={()=>handleAddItem(item)}
                >
                  ADD
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantCategoryItemsList;
