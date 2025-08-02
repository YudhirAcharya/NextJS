import GameCard from "@/app/components/GameCard";
import { games } from "@/app/db/data";
import Sidebar from "@/app/components/Sidebar";

const Games = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 bg-gray-100 p-5">
        <h1 className="text-2xl font-bold mb-4 text-black">Featured Games</h1>
        <div className="flex gap-4">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Games;
