import React from 'react';
const ProductCard = ({ name, price, image }) => (
    <div className="bg-white rounded shadow p-4 text-center">
      <div className="w-full h-40 bg-gray-100 rounded mb-4">
        {image ? <img src={image} alt={name} className="object-cover w-full h-full rounded" /> : null}
      </div>
      <h4 className="font-semibold">{name}</h4>
      <p className="text-sm text-gray-500">{price}</p>
      <div className="mt-2 text-yellow-400">★ ★ ★ ★ ☆</div>
    </div>
  );
  
  export default ProductCard;