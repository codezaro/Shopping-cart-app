import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Products from "../components/header/product-tile";
import { Link } from "react-router-dom";

export default function Cart() {
  const [totalCart, setTotalCart] = useState(0);

  const { cart } = useSelector((state) => state);
  console.log(cart, totalCart);

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div>
      {cart && cart.length > 0 ? (
        <div>
          <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3  gap-6 lg:grid-cols-4 mx-auto max-w-6xl p-3">
            {cart.map((i) => (
              <Products products={i} />
            ))}
          </div>
          <div className="flex flex-col justify-center items-end p-[50px] pt-0">
            <h1 className="font-bold text-2xl text-red-800">
              Your Cart Summary:
            </h1>
            <p>
              <span className="text-gray-800 text-xl font-bold">
                Total Item
              </span>
              <span className="text-xl">: {cart.length}</span>
            </p>
            <p>
              <span className="text-gray-800 text-xl font-bold">
                Total Amount
              </span>
              <span className="text-xl">: ${totalCart}</span>
            </p>
          </div>
        </div>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-800 font-bold text-xl mb-2">
            Your cart is empty.
          </h1>
          <Link to="/">
            <button className="bg-red-950 text-white p-3 rounded-lg px-6 font-bold tracking-wide">
              SHOP NOW
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
