import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { useSelector, useDispatch } from "react-redux";
import { addtocart, removefromcart } from "./store/listslice";
export const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [Incart, setIncart] = useState(false);
  const [Isloading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const carlist = useSelector((state) => state.cart.cartlist);
  useEffect(() => {
    async function singleproduct() {
      try {
        setLoading(true);
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();

        setProduct(result);
        setLoading(false);
        const caritem = carlist.find((item) => item.id === result.id);
        console.log(id);
        if (caritem) {
          setIncart(true);
        } else {
          setIncart(false);
        }
      } catch (error) {
        return error;
      }
    }
    singleproduct();
  }, [id, carlist]);
  const SkeletonLoader = () => {
    return (
      <div className="animate-pulse">
        <h1 className="mt-10 mb-5 text-4xl text-center font-bold text-gray-300">
          Loading Title
        </h1>
        <p className="mb-5 text-lg text-center text-gray-300">
          Loading Overview
        </p>
        <div className="flex flex-wrap justify-around">
          <div className="max-w-xl my-3">
            <div className="rounded h-[340px] w-[340px] bg-gray-300"></div>
          </div>
          <div className="max-w-xl my-3">
            <p className="text-3xl font-bold text-gray-300">
              <span className="mr-1">$</span>
              <span className="">Loading Price</span>
            </p>
            <div className="my-3 flex justify-start items-center mt-5 mb-5">
              <div className="bg-gray-300 text-gray-300 text-xs font-semibold px-2.5 py-0.5 rounded mr-10">
                Loading Rating
              </div>
            </div>

            <p className="my-3">
              <button className="inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-gray-300 rounded-lg hover:bg-gray-400">
                Loading Button
              </button>
            </p>
            <p className="text-lg text-gray-300">Loading Description</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {Isloading ? (
        <SkeletonLoader />
      ) : (
        <main>
          <section>
            <h1 className="mt-10 mb-5 text-4xl text-center font-bold text-gray-900 ">
              {product?.title}
            </h1>
            <p className="mb-5 text-lg text-center text-gray-900 ">
              {product?.overview}
            </p>
            <div className="flex flex-wrap justify-around">
              <div className="max-w-xl my-3">
                <img
                  className="rounded h-[340px] w-[340px]"
                  src={product?.image}
                  alt={product?.title}
                />
              </div>
              <div className="max-w-xl my-3">
                <p className="text-3xl font-bold text-gray-900 ">
                  <span className="mr-1">$</span>
                  <span className="">{product?.price}</span>
                </p>
                <div className="my-3 flex justify-start items-center mt-5 mb-5">
                  {product.rating?.rate && (
                    <Rating
                      name="half-rating-read"
                      value={product.rating?.rate}
                      precision={0.5}
                      readOnly
                      emptyIcon={
                        <StarIcon
                          style={{ opacity: 0.55 }}
                          fontSize="inherit"
                        />
                      }
                    />
                  )}

                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ml-10">
                    {product.rating?.rate}
                  </span>
                </div>

                <p className="my-3">
                  {Incart ? (
                    <button
                      className="inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 "
                      onClick={() =>
                        dispatch(removefromcart({ id: product.id }))
                      }
                    >
                      Remove
                    </button>
                  ) : (
                    <button
                      className="inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"
                      onClick={() => dispatch(addtocart(product))}
                    >
                      Add to Cart
                    </button>
                  )}
                </p>
                <p className="text-lg text-gray-900">{product.description}</p>
              </div>
            </div>
          </section>
        </main>
      )}
    </div>
  );
};
