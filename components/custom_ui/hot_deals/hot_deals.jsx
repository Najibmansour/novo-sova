"use client";
import React, { useRef, useState } from "react";
import ProductCard from "../product card/productcard";

const HotDeals = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="w-[90%] space-y-5">
        <h2>Hot Deals</h2>
        <div className="flex w-full flex-col justify-center">
          <div className="grid gap-x-5 gap-y-10 md:grid-cols-4">
            {[...Array(4).keys()].map(({ i }) => (
              <ProductCard key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotDeals;
