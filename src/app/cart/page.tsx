"use client";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import Button from "../components/reuseableComponent/Button";
import Image from "next/image";
import { useCart, Product } from "../components/cards/CartContext";

const ShoppingCart = () => {
  const { cart, removeFromCart } = useCart(); // Access cart and removeFromCart from context

  const handleRemoveItem = (product: Product) => {
    removeFromCart(product);
  };

  const calculateSubtotal = () =>
    cart.reduce(
      (total, item) =>
        total + parseFloat(item.price.replace("$", "")) * item.quantity,
      0
    );

  return (
    <div className="p-4 lg:p-10 pb-20">
      {/* <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1> */}

      {/* Cart Items Table */}
      <div className="overflow-x-auto flex flex-col items-center">
        <table className="w-full lg:w-3/4 border-collapse border border-gray-200">
          <thead className="border border-gray-200">
            <tr className="uppercase text-gray-800 text-base lg:text-lg">
              <th className="p-4 text-left">Image</th>
              <th className="p-4 text-left">Product</th>
              <th className="p-4 text-center">Price</th>
              <th className="p-4 text-center">Quantity</th>
              <th className="p-4 text-center">Total</th>
              <th className="text-left p-4">
                <AiOutlineClose />
              </th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index}>
                <td className="w-40 h-40 p-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </td>
                <td className="p-4">{item.name}</td>
                <td className="p-4 text-center text-gold">{item.price}</td>
                <td className="p-4 text-center">{item.quantity}</td>
                <td className="p-4 text-center text-gold">
                  ${parseFloat(item.price.replace("$", "")) * item.quantity}
                </td>
                <td className="p-4">
                  <AiOutlineClose
                    onClick={() => handleRemoveItem(item)}
                    className="cursor-pointer text-red-400"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="w-3/4 mt-6 flex justify-end ">
          <div className="p-4 bg-gray-200 w-80 space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Total:</h3>
              <span>${calculateSubtotal()}</span>
            </div>
            <Button className={`bg-black text-white w-full`}>
              {" "}
              Proceed to checkout
            </Button>
          </div>
        </div>

        {/* Cart Summary */}

        {/* Checkout Button */}
      </div>
    </div>
  );
};

export default ShoppingCart;
