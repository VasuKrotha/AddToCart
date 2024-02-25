import React, { useState } from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { useSelector, useDispatch } from "react-redux";
import { addtocart, removefromcart } from "../store/listslice";
import { useEffect } from "react";
export const Productlist = ({ product }) => {
  const { id, title, price, image, rating } = product;
  const [Incart, setIncart] = useState(false);
  const dispatch = useDispatch();
  const carlist = useSelector((state) => state.cart.cartlist);
  const { rate } = rating;

  useEffect(() => {
    const caritem = carlist.find((item) => item.id === id);

    if (caritem) {
      setIncart(true);
    } else {
      setIncart(false);
    }
  }, [id, carlist]);
  return (
    <div className="max-w-sm mx-5 my-3 max-h-sm">
      <div
        className=" bg-white border-gray-400 rounded-lg  border-2 container text-center"
        key={id}
      >
        <Link to={`/product/${id}`}>
          <img
            src={image}
            alt={title}
            className="rounded-t-lg p-8 h-[240px] w-[240px] mx-auto "
          />
        </Link>
        <div className="bg-gray-700 text-white ">
          <div className="px-5 pb-5">
            <Link to={`/product/${id}`}>
              <h5 className="text-xl font-bold pt-5">
                {title.substring(0, 28)}...
              </h5>
            </Link>
            <div className="flex justify-around items-center mt-5 mb-5">
              {rate && (
                <Rating
                  name="half-rating-read"
                  value={rate}
                  precision={0.5}
                  readOnly
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
              )}

              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                {rate}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold">
                ${parseFloat(price).toFixed(1)}
              </span>
              {Incart ? (
                <button
                  className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-bold rounded-lg text-sm px-6 py-2.5 text-center "
                  onClick={() => dispatch(removefromcart({ id: product.id }))}
                >
                  Remove
                </button>
              ) : (
                <button
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-6 py-2.5 text-center "
                  onClick={() => dispatch(addtocart(product))}
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
