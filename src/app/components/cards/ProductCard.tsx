import React, { useState } from "react";
import { toast } from "react-toastify"; // Import toast
import { Product } from "./CartContext"; // Import Product type
import Image from "next/image";

interface CardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<CardProps> = ({ product, onAddToCart }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product);
    toast.success(`${product.name} added to cart!`); // Show toast notification
  };

  return (
    <div
      className="w-full lg:w-60 overflow-hidden relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={product.image}
        alt={product.name}
        width={600}
        height={288}
        className="w-full h-72 object-cover"
      />
      {/* Add to Cart Button that appears when image is hovered */}
      {isHovered && (
        <button
          onClick={handleAddToCart}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gold text-white px-4 py-2 text-sm shadow-lg"
        >
          Add to Cart
        </button>
      )}
      <div className="text-center mt-4 px-4">
        <h3 className="text-xs text-gray-400 tracking-widest uppercase font-light">
          {product.category}
        </h3>
        <p className="text-2xl text-gray-800">{product.name}</p>
        <p className="text-2xl text-gold">{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
