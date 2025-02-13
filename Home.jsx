import React from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const products = [
  { id: 1, name: "Keyser Menu", image: "/images/keyser1.jpg", price: "€10" },
  { id: 2, name: "Keyser Spoofer", image: "/images/keyser2.jpg", price: "€15" },
  { id: 3, name: "Compte Rockstar", image: "/images/rockstar.jpg", price: "€0.50" },
];

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 bg-black">
        <div className="text-xl font-bold">SleazCore</div>
        <input
          type="text"
          placeholder="Search our store..."
          className="p-2 rounded bg-gray-800 text-white"
        />
        <div className="flex gap-4">
          <Button variant="outline">Support</Button>
          <Button variant="outline">Account</Button>
          <Button variant="primary" className="bg-purple-600">🛒 0</Button>
        </div>
      </nav>
      
      {/* Header */}
      <header 
        className="text-center py-20 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/images/banner.jpg')" }}
      >
        <h1 className="text-4xl font-bold">Bienvenue sur SleazCore</h1>
        <p className="mt-2">Explore my new products and contact me if you need help!</p>
        <Button className="mt-4 bg-purple-600">Start shopping →</Button>
      </header>
      
      {/* Product Section */}
      <section className="p-8">
        <h2 className="text-2xl font-bold mb-4">Featured Collection</h2>
        <div className="grid grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-800 p-4 rounded-lg text-center">
              <img src={product.image} alt={product.name} className="rounded-lg" />
              <p className="mt-2">{product.name}</p>
              <p className="text-purple-400">{product.price}</p>
              <Button className="mt-2 bg-purple-600">Add to Cart</Button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
