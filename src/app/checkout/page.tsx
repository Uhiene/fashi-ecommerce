"use client";
import React, { useState } from "react";
import { useCart } from "../components/cards/CartContext";
import Button from "../components/reuseableComponent/Button";

const CheckoutPage: React.FC = () => {
  const { cart } = useCart();

  // Form state for user details
  const [userDetails, setUserDetails] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    country: "",
    postalCode: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  // Calculate subtotal
  const calculateSubtotal = () =>
    cart.reduce(
      (total, item) =>
        total + parseFloat(item.price.replace("$", "")) * item.quantity,
      0
    );

  // Add tax and shipping cost (example values)
  const TAX_RATE = 0.1; // 10%
  const SHIPPING_COST = 10;

  const tax = calculateSubtotal() * TAX_RATE;
  const total = calculateSubtotal() + tax + SHIPPING_COST;

  const handlePlaceOrder = () => {
    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    if (
      !userDetails.fullName ||
      !userDetails.email ||
      !userDetails.address ||
      !userDetails.city ||
      !userDetails.country ||
      !userDetails.postalCode
    ) {
      alert("Please fill in all the required fields.");
      return;
    }

    alert("Order placed successfully!");
    // Add logic to process order (e.g., send data to backend)
  };

  return (
    <div className="p-6 lg:p-10 space-y-8 flex justify-center">
      <div className="w-[75%]">
      <h1 className="text-2xl font-bold text-gray-800">Checkout</h1>
      <div className="flex flex-row-reverse justify-between mt-10">
        {/* Cart Summary */}
        <div className="space-y-6 w-1/3">
          <h2 className="text-lg font-semibold text-gray-800">Order Summary</h2>
          <ul className="divide-y divide-gray-200">
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center py-4"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">
                      {item.price} x {item.quantity}
                    </p>
                  </div>
                </div>
                <p className="font-medium text-gold">
                  ${parseFloat(item.price.replace("$", "")) * item.quantity}
                </p>
              </li>
            ))}
          </ul>
          <div className="p-4 bg-gray-100 rounded-lg space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal:</span>
              <span>${calculateSubtotal().toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Tax (10%):</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Shipping:</span>
              <span>${SHIPPING_COST.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <Button
              className="w-full bg-black text-white py-3 mt-6"
              onClick={handlePlaceOrder}
            >
              Place Order
            </Button>
          </div>
        </div>

        {/* User Details */}
        <div className="space-y-6 w-1/2">
          <h2 className="text-lg font-semibold text-gray-800">
            Billing Details
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded-lg p-3"
              value={userDetails.fullName}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-lg p-3"
              value={userDetails.email}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="address"
              placeholder="Street Address"
              className="w-full border border-gray-300 rounded-lg p-3"
              value={userDetails.address}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              className="w-full border border-gray-300 rounded-lg p-3"
              value={userDetails.city}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              className="w-full border border-gray-300 rounded-lg p-3"
              value={userDetails.country}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="postalCode"
              placeholder="Postal Code"
              className="w-full border border-gray-300 rounded-lg p-3"
              value={userDetails.postalCode}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
