"use client";
import React, { useState } from "react";
import { productsData } from "../components/utils/productsData"; // Import data from the utils folder

const CategoryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof productsData>("women");
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
    <div className="flex p-4 gap-10">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-100 p-4 rounded-lg">
        {/* Categories */}
        <h3 className="font-bold mb-4">Categories</h3>
        <ul>
          <li
            className={`cursor-pointer mb-2 ${selectedCategory === "women" ? "text-blue-500" : ""}`}
            onClick={() => setSelectedCategory("women")}
          >
            Women
          </li>
          <li
            className={`cursor-pointer mb-2 ${selectedCategory === "men" ? "text-blue-500" : ""}`}
            onClick={() => setSelectedCategory("men")}
          >
            Men
          </li>
        </ul>

        {/* Brands */}
        <h3 className="font-bold mb-4">Brands</h3>
        <div>
          <label>
            <input
              type="checkbox"
              onChange={() => toggleBrand("Nike")}
              checked={selectedBrands.includes("Nike")}
            />
            Nike
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              onChange={() => toggleBrand("Adidas")}
              checked={selectedBrands.includes("Adidas")}
            />
            Adidas
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              onChange={() => toggleBrand("Puma")}
              checked={selectedBrands.includes("Puma")}
            />
            Puma
          </label>
        </div>

        {/* Price Range */}
        <h3 className="font-bold mb-4">Price</h3>
        <input
          type="range"
          min="0"
          max="200"
          value={priceRange}
          onChange={(e) => setPriceRange(Number(e.target.value))}
          className="w-full"
        />
        <p>Max Price: ${priceRange}</p>

        {/* Colors */}
        <h3 className="font-bold mb-4">Colors</h3>
        <div>
          <label>
            <input
              type="checkbox"
              onChange={() => toggleColor("Red")}
              checked={selectedColors.includes("Red")}
            />
            <span className="inline-block w-4 h-4 bg-red-500 rounded-full"></span> Red
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              onChange={() => toggleColor("Blue")}
              checked={selectedColors.includes("Blue")}
            />
            <span className="inline-block w-4 h-4 bg-blue-500 rounded-full"></span> Blue
          </label>
        </div>

        {/* Sizes */}
        <h3 className="font-bold mb-4">Sizes</h3>
        <div>
          <button
            className={`p-2 rounded ${selectedSize === "S" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            onClick={() => handleSizeChange("S")}
          >
            S
          </button>
          <button
            className={`p-2 rounded ${selectedSize === "M" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            onClick={() => handleSizeChange("M")}
          >
            M
          </button>
          <button
            className={`p-2 rounded ${selectedSize === "L" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            onClick={() => handleSizeChange("L")}
          >
            L
          </button>
        </div>
      </div>

      {/* Product Cards */}
      <div className="w-3/4 p-4">
        <h2 className="text-3xl font-bold mb-6 capitalize">{selectedCategory} Items</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product: Product, index: number) => (
            <div className="category-card max-w-sm rounded-lg shadow-lg overflow-hidden" key={index}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-60 object-cover rounded-lg"
              />
              <div className="text-center mt-4 px-4">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.category}</p>
                <p className="text-2xl text-gold">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
