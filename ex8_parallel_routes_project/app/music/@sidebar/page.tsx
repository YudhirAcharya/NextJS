import React from "react";
import { Clock, Home, TrendingUp } from "lucide-react";
const Sidebar = async () => {
  const arr = [1, 2, 3, 4, 5];

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Content loading");
    }, 3000);
  });

  return (
    <aside className="w-64 bg-[#111111] text-white flex flex-col justify-between p-4 min-h-screen">
      <section>
        <h2 className="text-xl font-bold">MENU</h2>
        <nav className="mt-4">
          <ul>
            <li className="flex items-center gap-2 p-2 hover:bg-[#171717] rounded-md cursor-pointer">
              <Home /> Discover
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-[#171717] rounded-md cursor-pointer">
              <TrendingUp /> Trending
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-[#171717] rounded-md cursor-pointer">
              <Clock /> Recent
            </li>
          </ul>
        </nav>
      </section>
      <section>
        <h2 className="mt-6 text-xl font-bold">FAVOURITE</h2>
        <ul className="mt-2 mb-[2rem]">
          {arr.map((a) => (
            <div key={a} className="flex mt-[2rem] gap-4">
              <img
                src="https://cdn.pixabay.com/photo/2014/04/02/14/04/vinyl-306070_1280.png"
                alt="a"
                className="h-15 w-15 bg-gray-700 rounded-full"
              />
              <div>
                <p className="text-white font-bold">Music</p>
                <p className="text-gray-500  text-sm">Artist</p>
              </div>
            </div>
          ))}
        </ul>
      </section>
    </aside>
  );
};

export default Sidebar;
