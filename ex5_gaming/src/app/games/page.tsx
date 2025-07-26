import React from "react";
import { games } from "@/data/games";
import Link from "next/dist/client/link";

const GamePage = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Explore the Games
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {games.map((a) => (
          <Link key={a.id} href={`games/${a.category}/${a.slug}/${a.id}`}>
            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 cursor-pointer">
              <h2 className="text-xl font-semibold text-blue-700 mb-2">
                {a.title}
              </h2>
              <img
                src={a.image}
                alt={a.title}
                className="w-full h-40 object-cover rounded mb-3"
              />
              <p className="text-gray-600 mb-2">{a.description}</p>
              <p className="text-sm text-gray-700 mb-1">
                🎮 Rating: {a.rating}
              </p>
              <p className="text-sm text-gray-700 mb-1">
                🧑‍💻 Developer: {a.developer}
              </p>
              <p className="text-sm text-gray-700 mb-1">
                🏢 Publisher: {a.publisher}
              </p>
              <p className="text-sm text-gray-700 mb-1">
                📅 Release Date: {a.releaseDate}
              </p>
              <p className="text-sm text-gray-700">
                🕹️ Platforms: {a.platforms.join(", ")}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GamePage;
