import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removefromcart } from "./store/listslice";
export const Cart = () => {
  const cartitem = useSelector((state) => state.cart.cartlist);
  const total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();
  console.log(cartitem);

  function Emptycart() {
    return (
      <section className="text-xl text-center max-w-4xl mx-auto my-10 py-5  border dark:border-slate-700 rounded text-black">
        <div className="my-5">
          <p className="bi bi-cart text-green-600 text-7xl mb-5"></p>
          <p>Oops! Your cart is empty!</p>
        </div>
        <Link
          to="/"
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none"
        >
          Continue Shopping <i className="ml-2 bi bi-cart"></i>
        </Link>
      </section>
    );
  }

  function Caritems({ product }) {
    return (
      <div className="flex flex-wrap justify-between border-b dark:border-slate-700 max-w-4xl m-auto p-2 mb-5 animate__animated animate__fadeInLeft">
        <div className="flex">
          <Link to={`/product/${product.id}`}>
            <img
              className="w-32 rounded"
              src={product.image}
              alt={product.title}
            />
          </Link>
          <div className="mt-5">
            <Link to={`/product/${product.id}`}>
              <p className="text-lg ml-2 text-black">{product.title}</p>
            </Link>
            <button
              onClick={() => dispatch(removefromcart({ id: product.id }))}
              className="text-base ml-2 text-red-400"
            >
              Remove
            </button>
          </div>
        </div>
        <div className="text-lg m-2 text-black">
          <span>{parseFloat(product.price).toFixed(1)}</span>
        </div>
      </div>
    );
  }

  function Totalamount() {
    return (
      <section className="max-w-4xl m-auto animate__animated animate__fadeInRight">
        <div className="flex flex-col p-2 border-b text-black">
          <p className="flex justify-between my-2">
            <span className="font-semibold">Total Amount:</span>
            <span>${parseFloat(total).toFixed(1)}</span>
          </p>
        </div>
      </section>
    );
  }

  return (
    <div>
      <div>
        {cartitem.length ? (
          <div>
            {cartitem.map((product) => (
              <Caritems key={product.id} product={product} />
            ))}
            <Totalamount />
          </div>
        ) : (
          <Emptycart />
        )}
      </div>
    </div>
  );
};
