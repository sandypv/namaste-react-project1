import { useState } from "react";
import RestaurantCategoryItemsList from "./RestaurantCategoryItemsList";

const RestaurantCategory = ({data,showItems,setShowIndex}) => {
  // console.log('data',data);
  // const [showItems, setShowItems] = useState(false);

  const handleOnclickRestaurantCategoryHeader = () => {
    setShowIndex();
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
            {data.title}({data.itemCards.length})
          </span>
          <span className="text-2xl">⌄</span>
        </div>
        {showItems && (
          <RestaurantCategoryItemsList items={data.itemCards} />
        )}
      </div>
    </div>
  );
};

export default RestaurantCategory;
