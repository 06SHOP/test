import React from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const products = [
  { id: 1, name: "Group", image: "/images/group1.jpg" },
  { id: 2, name: "Group", image: "/images/group2.jpg" },
  { id: 3, name: "Rockstar", image: "/images/rockstar.jpg" },
];

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
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
        </div>
      </nav>
      <header className="text-center py-20 bg-cover bg-center" style={{ backgroundImage: "url('/images/banner.jpg')" }}>
        <h1 className="text-4xl font-bold">Bienvenue sur SleazCore</h1>
        <p className="mt-2">Explore my new products and contact me if you need help!</p>
        <Button className="mt-4">Start shopping →</Button>
      </header>
      <section className="p-8">
        <h2 className="text-2xl font-bold mb-4">Featured Collection</h2>
        <div className="grid grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-800 p-4 rounded-lg">
              <img src={product.image} alt={product.name} className="rounded-lg" />
              <p className="mt-2 text-center">{product.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
