"use client";
import React, { useState } from "react";
import Button from "../components/reuseableComponent/Button";
import Link from "next/link";

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [savePassword, setSavePassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login Details:", formData);
    alert("Login successful!");
  };

  return (
    <div className="min-h-screen flex justify-center p-4">
      <div className="bg-white p-6 w-full max-w-xl text-center">
        <h1 className="text-3xl font-bold mb-6">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
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
           <div className="flex items-center justify-between text-sm text-gray-600">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={savePassword}
                onChange={(e) => setSavePassword(e.target.checked)}
                className="form-checkbox"
              />
              Save Password
            </label>
            <Link href="/forgot-password" className="underline underline-offset-4">
              Forgot Password?
            </Link>
          </div>
          <Button type="submit" className="w-full bg-gold text-white mb-6">
            Login
          </Button>
          <div>
            <Link
              href="/login"
              className="underline underline-offset-4 text-sm text-gray-600"
            >
              OR CREATE AN ACCOUNT
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
