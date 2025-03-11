const Grocery = ({css}) => {
  return (
    <div className={css}>
      {/* <h1>This is grocery delivery page</h1> */}
      <img
        className="rounded-lg h-40"
        alt="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/10/1/bf5549d7-78a8-475a-aa3c-334156b5f038_bbc71567-3a06-4867-83cf-daf3b5770353.jpg"
      />
    </div>
  );
};

export default Grocery;