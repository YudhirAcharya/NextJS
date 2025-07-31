import React from "react";
import { Bebas_Neue } from "next/font/google";
const fontA = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const Home = () => {
  return (
    <div>
      Home
      <h1 className={`${fontA.className}`}>font bebas AVUYVUYV</h1>
    </div>
  );
};

export default Home;
