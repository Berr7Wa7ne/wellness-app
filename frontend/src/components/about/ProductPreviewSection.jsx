// src/components/ProductPreviewSection.jsx
import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // You can install lucide-react if not already: npm install lucide-react
import ProductCard from "../shared/ProductCard";

const productsByCategory = {
  "Ritual Essentials": [
    { name: "Moonlight Calm", price: "$20", image: "/images/moonlight.jpg" },
    { name: "Manifest Fire – Magickal Oil", price: "$23", image: "/images/fire-oil.jpg" },
    { name: "Heart Opening – Magickal Oil", price: "$20", image: "/images/heart-oil.jpg" },
    { name: "Extra Oil", price: "$21", image: "/images/oil.jpg" },
  ],
  "Spiritual Power & Protection": [
    { name: "Energy Clearing Spray", price: "$20", image: "/images/spray.jpg" },
    { name: "Intuition Crystal Kit", price: "$23", image: "/images/crystal-kit.jpg" },
    { name: "Sacred Ritual Journal", price: "$20", image: "/images/journal.jpg" },
    { name: "Amulet Pack", price: "$25", image: "/images/amulet.jpg" },
  ],
};

const ScrollableRow = ({ products }) => {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    const { current } = containerRef;
    if (!current) return;
    const scrollAmount = 300;
    direction === "left"
      ? (current.scrollLeft -= scrollAmount)
      : (current.scrollLeft += scrollAmount);
  };

  return (
    <div className="relative">
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white border rounded-full p-2 shadow hover:bg-gray-100"
      >
        <ChevronLeft />
      </button>

      <div
        ref={containerRef}
        className="flex gap-4 overflow-x-auto scroll-smooth pb-4 no-scrollbar"
      >
        {products.map((product, index) => (
          <div key={index} className="flex-shrink-0 w-64">
            <ProductCard {...product} />
          </div>
        ))}
      </div>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white border rounded-full p-2 shadow hover:bg-gray-100"
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export const ProductPreviewSection = () => {
  return (
    <section className="px-6 py-12 bg-gray-50">
      <h2 className="text-center text-xl font-semibold mb-8">
        Explore the essence of elegance
      </h2>
      {Object.entries(productsByCategory).map(([category, products], idx) => (
        <div key={idx} className="mb-10">
          <h3 className="text-lg font-semibold mb-4">{category}</h3>
          <ScrollableRow products={products} />
        </div>
      ))}
    </section>
  );
};

