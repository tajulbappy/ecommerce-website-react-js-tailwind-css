import React, { useContext, useEffect, useState } from "react";
import Title from "./Title";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((product) => (product.bestseller));
    // console.log(bestProduct);
    setBestSeller(bestProduct.slice(0, 5));
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"Best"} text2={"Sellers"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod libero
          culpa quas eum ab odit!
        </p>
      </div>

      {/* rendering products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 ">
        {bestSeller.map((product) => {
          const { _id, image, name, price } = product;
          return (
            <ProductItem
              key={_id}
              id={_id}
              image={image}
              name={name}
              price={price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BestSeller;
