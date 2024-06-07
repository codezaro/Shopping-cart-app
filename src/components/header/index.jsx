import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav className="flex justify-between item-center h-20 max-w-6xl mx-auto">
        <Link to={"/"}>
          <div className="ml-5">
            <h1 className="text-red-900 font-bold mt-5 text-xl cursor-pointer sm:text-2xl md:text-3xl tracking-wide">
              REACT REDUX SHOPPING CART
            </h1>
          </div>
        </Link>
        <ul className="list-none space-x-6  flex flex-row items-center text-gray-800 font-semibold">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/cart"}>Cart</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
