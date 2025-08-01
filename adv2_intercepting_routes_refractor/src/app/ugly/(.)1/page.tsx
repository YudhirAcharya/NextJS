"use client";
import React from "react";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

const InterceptedRoute = () => {
  const router = useRouter();

  const closeModel = () => router.push("/ugly");
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center relative">
        <button className="text-black border rounded-full  ml-60">
          <X size={24} onClick={closeModel} className="cursor-pointer" />
        </button>
        <h1 className="text-2xl font-bold text-black">Macbook Pro</h1>
        <img
          src="https://images.unsplash.com/photo-1580522154071-c6ca47a859ad?auto=format&fit=crop&w=800&q=80"
          alt="efsef"
          className="w-64 h-64 object-cover my-4"
        />
        <p className="text-xl text-black">$1000</p>
      </div>
    </div>
  );
};

export default InterceptedRoute;
