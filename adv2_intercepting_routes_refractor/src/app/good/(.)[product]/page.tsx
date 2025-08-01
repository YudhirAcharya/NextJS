import React from "react";

const InterceptedDynamic = async ({
  params,
}: {
  params: { product: string };
}) => {
  const { product } = await params;
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
  const oneProduct = products.find((a) => a.id === +product);
  return (
    <div>
      <div className="p-4">
        <h1 className="text-2xl font-bold">{oneProduct?.name}</h1>
        <img
          src={oneProduct?.image}
          alt={oneProduct?.name}
          className="w-64 h-64 object-cover my-4"
        />
        <p className="text-xl">{oneProduct?.price}</p>
      </div>
    </div>
  );
};

export default InterceptedDynamic;
