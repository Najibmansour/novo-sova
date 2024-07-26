import Image from "next/image";
import React from "react";

import img from "@/assets/product_example.png";

const ProductCard = () => {
  return (
    <div className="aspect-[10/15] w-full min-w-40 cursor-pointer space-y-1 md:min-w-52">
      <div className="group aspect-[10/15] overflow-hidden rounded-lg shadow-xl md:w-full">
        <Image
          src={img}
          alt="product_image"
          className="aspect-[10/15] rounded-lg transition-transform duration-300 group-hover:scale-105 md:w-full"
        />
      </div>
      <div className="flex flex-row justify-between">
        <h5 className="text-xl">Product Title</h5>
        <p className="text-xl">90$</p>
      </div>
    </div>
  );
};

export default ProductCard;
