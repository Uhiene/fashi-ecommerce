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
    <div className="category-card max-w-sm rounded-lg shadow-lg overflow-hidden">
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
  );
};

export default ProductCard;
