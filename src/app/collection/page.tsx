"use client";
import React, { useState } from "react";
import { productsData } from "../components/utils/productsData";
import ProductCard from "../components/cards/ProductCard";

const CategoryPage = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<keyof typeof productsData>("women");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number>(50);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSize, setSelectedSize] = useState<string>("M");

  // Toggle brand filter
  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  // Toggle color filter
  const toggleColor = (color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  // Handle size selection
  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };

  interface Product {
    name: string;
    category: string;
    image: string;
    price: string;
    brand: string;
    color: string;
    size: string;
  }

  const filteredProducts = productsData[selectedCategory];

  return (
    <div className="flex justify-center pb-20">
      <div className="flex flex-col-reverse lg:flex-row gap-10 mt-6 lg:mt-14 w-full lg:w-[76%]">
        {/* Sidebar */}
        <div className="lg:w-1/4 p-4 gap-10 grid grid-cols-2 lg:grid-cols-1 h-fit">
          {/* Categories */}
          <div>
            <h3 className="font-medium text-xl lg:text-2xl mb-2">Categories</h3>
            <ul>
              {(["women", "men"] as const).map((category) => (
                <li
                  key={category}
                  className={`cursor-pointer mb-2 text-gray-600 ${
                    selectedCategory === category ? "text-yellow-500" : ""
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </li>
              ))}
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h3 className="font-medium text-xl lg:text-2xl mb-2">Brands</h3>
            <div className="space-y-2">
              {["Nike", "Adidas", "Puma"].map((brand) => (
                <label key={brand} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    onChange={() => toggleBrand(brand)}
                    checked={selectedBrands.includes(brand)}
                  />
                  <span className="text-gray-600 ">{brand}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h3 className="font-medium text-xl lg:text-2xl mb-2">Price</h3>
            <input
              type="range"
              min="0"
              max="200"
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="w-full bg-yellow-400"
            />
            <p className="border border-gray-400 w-fit px-3">${priceRange}</p>
          </div>

          {/* Colors */}
          <div>
            <h3 className="font-medium text-xl lg:text-2xl mb-2">Colors</h3>
            <div>
              {["Red", "Blue"].map((color) => (
                <label key={color} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    onChange={() => toggleColor(color)}
                    checked={selectedColors.includes(color)}
                    className="mr-2"
                  />
                  <span
                    className={`inline-block w-4 h-4 rounded-full ${
                      color === "Red" ? "bg-red-500" : "bg-blue-500"
                    }`}
                  ></span>
                  <span>{color}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div >
            <h3 className="font-medium text-xl lg:text-2xl mb-2">Sizes</h3>
            <div className="space-x-2">
              {["S", "M", "L", "XS"].map((size) => (
                <button
                  key={size}
                  className={`p-2 lg:px-4 border rounded ${
                    selectedSize === size ? "bg-black text-white" : "bg-white"
                  }`}
                  onClick={() => handleSizeChange(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>
        {/* Product Cards */}
        <div className="w-full lg:w-3/4 p-4">
          <h2 className="text-3xl font-bold mb-6 capitalize">
            {selectedCategory} Items
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProducts.map((product: Product, index: number) => (
              <div key={index}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
