"use client";
import React, { useRef, useState } from "react";
import ProductCard from "../product card/productcard";

const CategoryGroup = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="w-[80%] space-y-5 md:w-[90%]">
        <h2>Categories</h2>
        <div className="grid gap-x-5 gap-y-10 md:grid-cols-5">
          <CategorySelector />

          {[...Array(9).keys()].map(({ i }) => (
            <ProductCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryGroup;

const CategorySelector = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-3 text-xl">
      <div className="group col-start-1 row-span-2 flex items-center justify-center rounded-lg bg-[#9F846F] shadow-xl">
        <p className="writing-mode-vertical-rl -rotate-90 transform drop-shadow-2xl transition-transform group-hover:scale-105">
          Chapka
        </p>
      </div>
      <div className="group col-start-2 flex items-center justify-center rounded-lg bg-[#9F846F] shadow-xl">
        <p className="drop-shadow-2xl transition-transform group-hover:scale-105">
          Coats
        </p>
      </div>
      <div className="group col-start-2 flex items-center justify-center rounded-lg bg-[#9F846F] shadow-xl">
        <p className="drop-shadow-2xl transition-transform group-hover:scale-105">
          Capes
        </p>
      </div>
    </div>
  );
};
