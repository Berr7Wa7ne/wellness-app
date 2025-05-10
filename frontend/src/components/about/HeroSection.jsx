import React from 'react';
import Navbar from "../layout/Navbar";
import heroPic from "../../assets/hero-pic.png"

export const HeroSection = () => {
  return (
    <section className="relative h-[80vh] md:h-screen w-full">
      {/* Background Image */}
      <img
        src={heroPic} // Replace with your actual image path
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute" />

      {/* Navbar */}
      <Navbar />

      {/* Hero Text */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-[108px] md:text-5xl font-bold leading-tight">
          Get to know us better,<br /> about our brand
        </h1>
        <p className="mt-4 max-w-xl text-sm md:text-base">
          We’re here to inspire a mindful journey through ancient knowledge, rituals,
          and healing. Learn how our brand can help you reconnect with your own clarity,
          purpose, and inner peace.
        </p>
        <button className="mt-6 px-6 py-2 bg-white text-black rounded-md font-semibold hover:bg-gray-200">
          Shop now →
        </button>
      </div>
    </section>
  );
};

