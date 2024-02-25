import React, { useEffect, useState } from "react";
import { Productlist } from "./list";

import { Skeletondata } from "../components";
export const Home = () => {
  const [products, setProducts] = useState([]);
  const [Isloading, setIsloading] = useState(true);
  const [filterdata, setFilterdata] = useState(products);
  const [cateories, setCategories] = useState("");

  useEffect(() => {
    const fetchproduct = async () => {
      try {
        setIsloading(true);
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setProducts(result);
        setFilterdata(result);
        setIsloading(false);
      } catch (error) {
        throw new Error(error);
      }
    };
    fetchproduct();
  }, []);

  const filterProduct = (cat) => {
    const updatelist = products.filter((item) => item.category === cat);
    setCategories(cat);

    setFilterdata(updatelist);
  };

  return (
    <div>
      <div className="bg-gray-500 text-white flex flex-col md:flex-row items-center justify-between p-8  ">
        <div className="md:max-w-md">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate__animated animate__fadeInRight ">
            Buy Latst Product's from{" "}
            <span className="text-yellow-200">CartFilp</span>
          </h1>
          <p className="text-lg animate__animated animate__fadeInRight ">
            Get Rewards On Your Each Products
          </p>
        </div>
        <div className="flex-shrink-0 mt-4 md:mt-0 md:ml-4 animate__animated animate__fadeInLeft ">
          <img
            src="https://t3.ftcdn.net/jpg/04/72/51/52/360_F_472515256_Du3swmADaJcEK5oTY5YBxoQNqzEDnDK7.jpg"
            className="w-[500px] h-[300px] rounded"
            alt="title"
          />
        </div>
      </div>

      <div className="container my-6">
        <div className="text-center font-bold my-4 text-4xl ">
          Latest Products
        </div>

        <div className="flex gap-5 items-center justify-center">
          <button
            className={`py-2 px-4 border-2 border-gray-500 rounded-xl font-bold text-lg hover:bg-gray-700 hover:text-white ${
              filterdata === products
                ? "bg-gray-700 text-white"
                : "bg-white text-black"
            }`}
            onClick={() => setFilterdata(products)}
          >
            All
          </button>
          <button
            className={`py-2 px-4 border-2 border-gray-500 rounded-xl font-bold text-lg hover:bg-gray-700 hover:text-white ${
              cateories === "men's clothing"
                ? "bg-gray-700 text-white"
                : "bg-white text-black"
            }`}
            onClick={() => filterProduct("men's clothing")}
          >
            Men's
          </button>
          <button
            className={`py-2 px-4 border-2 border-gray-500 rounded-xl font-bold text-lg hover:bg-gray-700 hover:text-white ${
              cateories === "women's clothing"
                ? "bg-gray-700 text-white"
                : "bg-white text-black"
            }`}
            onClick={() => filterProduct("women's clothing")}
          >
            Women's
          </button>
          <button
            className={`py-2 px-4 border-2 border-gray-500 rounded-xl font-bold text-lg hover:bg-gray-700 hover:text-white ${
              cateories === "jewelery"
                ? "bg-gray-700 text-white"
                : "bg-white text-black"
            }`}
            onClick={() => filterProduct("jewelery")}
          >
            Jewelery's
          </button>
          <button
            className={`py-2 px-4 border-2 border-gray-500 rounded-xl font-bold text-lg hover:bg-gray-700 hover:text-white 
            ${
              cateories === "electronics"
                ? "bg-gray-700 text-white"
                : "bg-white text-black"
            }`}
            onClick={() => filterProduct("electronics")}
          >
            Electronic
          </button>
        </div>
      </div>
      {Isloading ? (
        <Skeletondata />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  item-center">
          {filterdata.map((product) => (
            <Productlist key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};
