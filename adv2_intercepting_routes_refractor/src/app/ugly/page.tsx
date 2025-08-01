import React from "react";
import Link from "next/link";
const Ugly = () => {
  const products = [
    {
      id: 1,
      name: "Macbook Pro",
      price: "$1000",
      image:
        "https://images.unsplash.com/photo-1580522154071-c6ca47a859ad?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "iPhone 14",
      price: "$899",
      image:
        "https://th.bing.com/th/id/OIP.JZpdZI_rbVcH7Q84ZhaITgHaHa?w=198&h=198&c=7&r=0&o=7&pid=1.7&rm=3",
    },
    {
      id: 3,
      name: "Sony WH-1000XM4 Headphones",
      price: "$350",
      image:
        "https://th.bing.com/th/id/OIP.zYL9rxkCyKVTi0CGoADCqwHaD4?w=340&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
    },
    {
      id: 4,
      name: "Samsung Galaxy Tab S8",
      price: "$699",
      image:
        "https://images.unsplash.com/photo-1611078489935-ef933d733003?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      name: "Dell XPS 13",
      price: "$1199",
      image:
        "https://images.unsplash.com/photo-1587614382346-4ecb900f9f22?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div>
      <section className="m-[4rem]">
        <div>
          <h1 className="text-3xl mb-3">Ecommerce</h1>
        </div>
        <section className="flex gap-3">
          {products.map((products) => (
            <div className="w-[200px] border" key={products.id}>
              <Link href={`/ugly/${products.id}`}>
                <img src={products.image} alt="" />
                <p>{products.name}</p>
                <p>{products.price}</p>
              </Link>
            </div>
          ))}
        </section>
      </section>
    </div>
  );
};

export default Ugly;
