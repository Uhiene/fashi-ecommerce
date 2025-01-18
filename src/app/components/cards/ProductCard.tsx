// Card.tsx
import React from 'react';

interface Product {
  image: string;
  name: string;
  category: string;
  price: string;
}

interface CardProps {
  product: Product;
}

const ProductCard: React.FC<CardProps> = ({ product }) => {
  return (
    <div className="w-full lg:w-60 overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-72 object-cover"
      />
      <div className="text-center mt-4 px-4">
        <h3 className="text-xs text-gray-400 tracking-widest uppercase font-light">{product.category}</h3>
        <p className="text-2xl text-gray-800">{product.name}</p>
        <p className="text-2xl text-gold">{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
