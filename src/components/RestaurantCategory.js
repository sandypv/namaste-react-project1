import { useState } from "react";
import RestaurantCategoryItemsList from "./RestaurantCategoryItemsList";

const RestaurantCategory = (data) => {
  // console.log('data',data);
  const [showItems, setShowItems] = useState(false);

  const handleOnclickRestaurantCategoryHeader = () => {
    setShowItems((prev) => !prev);
  };

  return (
    <div>
      {/*Header*/}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleOnclickRestaurantCategoryHeader}
        >
          <span className="font-bold">
            {data.data.title}({data.data.itemCards.length})
          </span>
          <span className="text-2xl">⌄</span>
        </div>
        {showItems && (
          <RestaurantCategoryItemsList items={data.data.itemCards} />
        )}
      </div>
    </div>
  );
};

export default RestaurantCategory;
