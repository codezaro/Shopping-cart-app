import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Products from "../components/header/product-tile";

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
          {cart.map((i) => (
            <Products products={i} />
          ))}
        </div>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1>Your cart is empty.</h1>
        </div>
      )}
    </div>
  );
}
