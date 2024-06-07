import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../../store/slices/cart-slice";

export default function Products({ products }) {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);

  function handleAddToCart() {
    dispatch(addToCart(products));
  }
  function handleRemovefrmCart() {
    dispatch(removeFromCart(products.id));
  }

  return (
    <div className="flex justify-center items-center mx-0 my-0">
      <div className="group flex flex-col w-[240px] items-center border-2 border-red-900 gap-3 p-4 h-[360px]  rounded-xl">
        <div className="h-[180px] w-[160px] ">
          <img
            src={products?.image}
            className="object-cover h-full w-full"
            alt=""
          />
        </div>
        <div>
          <h1 className="truncate w-40 mt-3 font-bold text-lg text-gray-700">
            {products?.title}
          </h1>
          <h2 className=" flex justify-center items-center font-bold text-lg text-gray-700">
            ${products?.price}
          </h2>
        </div>
        <div className="flex items-center justify-center w-full ">
          <button
            onClick={
              cart.some((item) => item.id === products.id)
                ? handleRemovefrmCart
                : handleAddToCart
            }
            className="bg-red-950 text-white p-3 rounded-lg px-6 font-bold tracking-wide"
          >
            {cart.some((item) => item.id === products.id)
              ? "Remove from cart"
              : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
