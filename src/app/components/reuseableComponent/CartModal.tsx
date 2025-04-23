"use client";
import React from "react";
import { useCart } from "../cards/CartContext";
import Button from "./Button";
import Link from "next/link";
import Image from "next/image";

interface CartModalProps {
  isOpen: boolean;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen }) => {
  const { cart } = useCart();

  const calculateTotal = () =>
    cart.reduce(
      (total, item) =>
        total + parseFloat(item.price.replace("$", "")) * item.quantity,
      0
    );

  if (!isOpen) return null;

  return (
    <div className="absolute top-full right-0 bg-white shadow-lg rounded-lg w-80 p-4 mt-2 z-50">
      {cart.length > 0 ? (
        <>
          <ul className="space-y-4 max-h-60 overflow-auto">
            {cart.map((item, index) => (
              <li key={index} className="flex items-center justify-between">
               <Image
      src={item.image}
      alt={item.name}
      width={48} 
      height={48} 
      className="object-cover rounded-md"
    />
                <div className="flex-1 mx-4">
                  <p className="font-medium text-sm">{item.name}</p>
                  <p className="text-xs text-gray-500">
                    {item.price} x {item.quantity}
                  </p>
                </div>
                <p className="font-medium text-gold text-sm">
                  ${parseFloat(item.price.replace("$", "")) * item.quantity}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-4">
            <div className="flex justify-between items-center">
              <h3 className="text-base font-semibold">Total:</h3>
              <span className="text-base font-medium text-gold">
                ${calculateTotal()}
              </span>
            </div>
            <Link href="/checkout">
              <Button className="w-full bg-black text-white py-2 mt-4">
                Proceed to Checkout
              </Button>
            </Link>
          </div>
        </>
      ) : (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartModal;
