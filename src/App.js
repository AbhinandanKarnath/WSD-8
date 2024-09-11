import React, { useState } from "react";
import "./index.css"

function App() {
  const initialProducts = [
    {
      id: 1,
      title: "Vegetables : tomato",
      features: "Fresh home grown vegies",
      image: "https://images.unsplash.com/photo-1517666005606-69dea9b54865?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Coffe beans",
      features: "Nostolgic coffe made with fresh coffe beans ",
      image: "https://images.unsplash.com/photo-1602101888581-ee1331659f16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29mZmUlMjBiZWFuc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 3,
      title: "fruits",
      features: "Fresh high quality fruits",
      image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
  ];

  const [products, setProducts] = useState(
    initialProducts.map((product) => ({
      ...product,
      liked: false,
    }))
  );

  const toggleLike = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, liked: !product.liked } : product
      )
    );
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-5 text-center">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="card bg-white shadow-md p-5 rounded-lg border border-gray-200"
          >
            <img
              src={product.image}
              alt={product.title}
              className="rounded-lg mb-3"
            />
            <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-600 mb-4">{product.features}</p>

            {/* Like Icon */}
            <button
              className={`text-2xl ${product.liked ? "text-red-500" : "text-gray-400"} transition-all duration-300 transform ${
                product.liked ? "scale-125" : "scale-200"
              }`}
              onClick={() => toggleLike(product.id)}
            >
              {product.liked ? "⭐" : "✰"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;