import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const RelatedProducts = ({ category, subCategory }) => {
  const [RelatedProducts, setRelatedProducts] = useState([]);
  const { products } = useContext(ShopContext);

  useEffect(() => {
    if (products.length > 0) {
      let productCopy = products.slice();

      productCopy = productCopy.filter(
        (product) => category === product.category
      );
      productCopy = productCopy.filter(
        (product) => subCategory === product.subCategory
      );
      // console.log(productCopy.slice(0, 5))
      setRelatedProducts(productCopy.slice(0, 5));
    }
  }, [products, category, subCategory]);

  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title text1={"Related"} text2={"Products"} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {RelatedProducts.map((product) => {
          const { _id, name, price, image } = product;
          return (
            <ProductItem
              key={_id}
              id={_id}
              name={name}
              price={price}
              image={image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
