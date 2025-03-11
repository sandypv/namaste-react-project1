export const RestaurantCardShimmer = () => {
  return(
  <>
    <div className="restaurantCard-container">
      <div className="restaurantShimmer-card"></div>
      <div className="restaurantShimmer-card"></div>
      <div className="restaurantShimmer-card"></div>
      <div className="restaurantShimmer-card"></div>
      <div className="restaurantShimmer-card"></div>
      <div className="restaurantShimmer-card"></div>
      <div className="restaurantShimmer-card"></div>
    </div>
    ;
  </>
  )
};

export const RestaurantMenuShimmer = () => {
  return ( 
    <div className="restaurantMenu-container">
      <h1 className="restaurantShimmer-menu"></h1>
      <div className="restaurantShimmer-cuisines"></div>
      <h1 className="restaurantShimmer-menuTitle"></h1>
      <p className="restaurantShimmer-menuItems"></p>
    </div>

  )
}