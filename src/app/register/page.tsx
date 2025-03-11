"use client";
import React, { useState } from "react";
import Button from "../components/reuseableComponent/Button";
import Link from "next/link";

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Registered User Details:", formData);
    alert("Registration successful!");
  };

  return (
    <div className="min-h-screen flex justify-center p-4">
      <div className="bg-white p-6 w-full max-w-xl text-center">
        <h1 className="text-3xl font-bold mb-6">Register</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            className="w-full border border-gray-300 p-3"
            value={formData.fullName}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border border-gray-300 p-3"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border border-gray-300 p-3"
            value={formData.password}
            onChange={handleChange}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="w-full border border-gray-300 p-3"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <Button type="submit" className="w-full bg-gold text-white mb-6">
            Register
          </Button>
          <div>
          <Link href="/login" className="underline underline-offset-4 text-sm text-gray-600">OR LOGIN</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
