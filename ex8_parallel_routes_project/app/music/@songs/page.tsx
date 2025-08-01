import React from "react";
import { Clock, Heart } from "lucide-react";
import Link from "next/link";
const Songs = async () => {
  const songs = [
    {
      id: 1,
      artist: "Fumez",
      title:
        "(Zone 2) Trizzac X Kwengface X Karma X LR - Plugged In W Fumez The Engineer",
      time: "4:11",
    },
    {
      id: 2,
      artist: "Stormzy",
      title: "Vossi Bop",
      time: "3:16",
    },
    {
      id: 3,
      artist: "Dave",
      title: "Location",
      time: "4:04",
    },
    {
      id: 4,
      artist: "AJ Tracey",
      title: "Ladbroke Grove",
      time: "3:30",
    },
    {
      id: 5,
      artist: "Headie One",
      title: "18Hunna feat. Dave",
      time: "3:53",
    },
    {
      id: 6,
      artist: "J Hus",
      title: "Did You See",
      time: "3:27",
    },
  ];
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Content loading");
    }, 2000);
  });
  return (
    <div className="w-[96%] mx-auto px-4">
      <h2 className="text-3xl text-white mt-8 font-bold mb-6">
        {" "}
        Songs Collection
      </h2>
      <ul className="space-y-4">
        {songs.map((a) => (
          <div>
            <Link href={`/music/${a.id}`} key={a.id}>
              <li className="flex items-center justify-between p-3 hover:bg-[#2A2929] rounded-md cursor-pointer transition-all duration-200 ease-in-out transform hover:scale-105">
                <div className="flex items-center gap-5">
                  <img
                    src="https://media.istockphoto.com/id/157103854/vector/crows.jpg?s=1024x1024&w=is&k=20&c=g7yU1tGb9J-vA5pwnX2vsrcgh5eoHgWbuot8ycVqG5s="
                    alt=""
                    className="h-16 w-16 bg-gary-700 rounded-md flex-shrink-0"
                  />

                  <div>
                    <p className="text-white font-medium">{a.artist}</p>
                    <p className="text-sm text-gray-400">{a.title}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 text-gray-400">
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{a.time}</span>
                  </div>
                  <Heart size={18} className="hover:text-red-600"></Heart>
                  <button className="text-lg "></button>
                </div>
              </li>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Songs;
