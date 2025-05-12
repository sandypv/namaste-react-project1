import { useDispatch, useSelector } from "react-redux";
import RestaurantCategoryItemsList from "../components/RestaurantCategoryItemsList";
import { clearCart } from "../Redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <div className="text-center m-4 p-4">
        <h1 className="text-2xl font-bold">cart</h1>
        <div className="w-1/2 m-auto">
          <button
            className="p-2 m-2 bg-black text-white rounded-lg"
            onClick={handleClearCart}
          >
            clear cart
          </button>
          {cartItems.length === 0 && (
            <h1>The cart is empty.Add items to the cart</h1>
            )
            }
          <RestaurantCategoryItemsList items={cartItems} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
