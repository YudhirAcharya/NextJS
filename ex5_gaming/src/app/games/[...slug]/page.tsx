import React from "react";
import { games } from "@/data/games";

interface Info {
  slug: string[];
  title: string;
  category: string;
  id: string;
  description: string;
  image: string;
  rating: number;
  developer: string;
  publisher: string;
  releaseDate: string;
  platforms: string[];
  gameplayMechanics: string[];
  story: string;
  setting: string;
  combatStyle: string;
  worldDesign: string;
  playerChoiceImpact: boolean;
  multiplayer: boolean;
  expansionContent: string[];
  difficulty: string;
  progressionSystem: string;
}

const MainGamePage = ({ params }: { params: Info }) => {
  //object destructuring the slug from params
  const { slug } = params;
  // Extracting category, gameSlug, and id from the slug array
  const [category, gameSlug, id] = slug;
  const game = games.find(
    (g) => g.category === category && g.slug === gameSlug && g.id === id
  );
  return (
    <div className="p-6 bg-white rounded-lg shadow-md space-y-3">
      <h1 className="text-3xl font-bold text-gray-800">{game?.title}</h1>
      <p className="text-gray-600">{game?.description}</p>

      <img
        src={game?.image}
        alt={game?.title}
        className="w-full h-60 object-cover rounded mb-4"
      />

      <p className="text-sm text-gray-700">
        <span className="font-semibold">🎮 Rating:</span> {game?.rating}
      </p>
      <p className="text-sm text-gray-700">
        <span className="font-semibold">🧑‍💻 Developer:</span> {game?.developer}
      </p>
      <p className="text-sm text-gray-700">
        <span className="font-semibold">🏢 Publisher:</span> {game?.publisher}
      </p>
      <p className="text-sm text-gray-700">
        <span className="font-semibold">📅 Release Date:</span>{" "}
        {game?.releaseDate}
      </p>
      <p className="text-sm text-gray-700">
        <span className="font-semibold">🕹️ Platforms:</span>{" "}
        {game?.platforms.join(", ")}
      </p>
      <p className="text-sm text-gray-700">
        <span className="font-semibold">⚙️ Gameplay Mechanics:</span>{" "}
        {game?.gameplayMechanics.join(", ")}
      </p>
      <p className="text-sm text-gray-700">
        <span className="font-semibold">📖 Story:</span> {game?.story}
      </p>
      <p className="text-sm text-gray-700">
        <span className="font-semibold">🌍 Setting:</span> {game?.setting}
      </p>
      <p className="text-sm text-gray-700">
        <span className="font-semibold">⚔️ Combat Style:</span>{" "}
        {game?.combatStyle}
      </p>
      <p className="text-sm text-gray-700">
        <span className="font-semibold">🏗️ World Design:</span>{" "}
        {game?.worldDesign}
      </p>
      <p className="text-sm text-gray-700">
        <span className="font-semibold">🎭 Player Choice Impact:</span>{" "}
        {game?.playerChoiceImpact ? "Yes" : "No"}
      </p>
      <p className="text-sm text-gray-700">
        <span className="font-semibold">👥 Multiplayer:</span>{" "}
        {game?.multiplayer ? "Yes" : "No"}
      </p>
      <p className="text-sm text-gray-700">
        <span className="font-semibold">📦 Expansion Content:</span>{" "}
        {game?.expansionContent.join(", ")}
      </p>
      <p className="text-sm text-gray-700">
        <span className="font-semibold">🧠 Difficulty:</span> {game?.difficulty}
      </p>
      <p className="text-sm text-gray-700">
        <span className="font-semibold">📈 Progression System:</span>{" "}
        {game?.progressionSystem}
      </p>
    </div>
  );
};

export default MainGamePage;
