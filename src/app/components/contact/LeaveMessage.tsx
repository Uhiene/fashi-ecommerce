"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import Button from "../reuseableComponent/Button";

interface FormData {
  name: string;
  email: string;
  comment: string;
}

const LeaveMessageForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    comment: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to an API)
    console.log("Message submitted:", formData);
  };

  return (
    <div className="w-full lg:w-3/6">
      <div className="mb-10">
        <h2 className="text-2xl font-semibold">Leave a Message</h2>
        <p className="font-light text-gray-400">Our staff will call back later and answer your questions.</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border border-gray-300 py-2 px-4 w-full placeholder:font-light focus:ring-0 focus:outline-none"
          />
        </div>

        <div>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-gray-300 py-2 px-4 w-full placeholder:font-light focus:ring-0 focus:outline-none"
          />
        </div>

        <div>
          <textarea
            id="comment"
            name="comment"
            placeholder="Your Comment"
            value={formData.comment}
            onChange={handleChange}
            rows={4}
            required
            className="border border-gray-300 py-2 px-4 w-full placeholder:font-light focus:ring-0 focus:outline-none"
          />
        </div>

        <div>
          <Button className={`bg-gold text-white px-4 p-2`}>
            {" "}
            Send Message
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LeaveMessageForm;
