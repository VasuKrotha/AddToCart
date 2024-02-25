import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

// Static components

export const Header = () => {
  const location = useLocation();
  const cartlist = useSelector((state) => state.cart.cartlist);
  return (
    <header>
      <nav className="bg-gray-900 text-white h-16  max-w-full container">
        <div className="flex  justify-around   items-center">
          {" "}
          <div className="pr-48 flex flex-col justify-around p-1 cursor-pointer">
            <Link to={"/"}>
              <div className="font-bold text-2xl text-yellow-200">CartFilp</div>
              <div className="text-xs font-semibold pl-2">
                Explore <span className="text-gray-500">Pluse</span>
              </div>
            </Link>
          </div>
          <div>
            <ul className="hidden md:flex gap-10 justify-center items-center">
              <li
                className={`mr-4 font-bold ${
                  location.pathname === "/"
                    ? "text-white border-b-4 border-yellow-500"
                    : "text-white"
                }`}
              >
                <Link to={"/"}>Home</Link>
              </li>

              <li
                className={`mr-4 font-bold flex items-center ${
                  location.pathname === "/cart"
                    ? "text-white border-b-4 border-yellow-500"
                    : "text-white"
                }`}
              >
                <Link to={"/cart"}>Cart</Link>
                <Link to={"/cart"} className="relative inline-flex ml-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                  <div class="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900 ">
                    {cartlist.length}
                  </div>
                </Link>
              </li>
              <li
                className={`mr-4 font-bold ${
                  location.pathname === "/about"
                    ? "text-white border-b-4 border-yellow-500"
                    : "text-white"
                }`}
              >
                <Link to={"/about"}>About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
