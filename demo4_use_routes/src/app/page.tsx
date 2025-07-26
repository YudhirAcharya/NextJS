"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { log } from "console";
const Home = () => {
  const router = useRouter();

  console.log(router);

  const navigate = (page: string) => {
    if (page === "login") {
      router.push("/login");
    }
    if (page === "about") {
      router.push("/about");
    }
    if (page === "colors") {
      router.push("/colors");
    }
    console.log(`Navigating to ${page} page`);
  };

  const refresh = () => {
    router.refresh();
    console.log("Page refreshed");
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <button onClick={() => navigate("login")}>Go to Login Page</button>
      <button onClick={() => navigate("about")}>Go to About Page</button>
      <button onClick={() => navigate("colors")}>Go to colors</button>
      <button
        onClick={() => {
          refresh();
        }}
      >
        Refresh
      </button>
    </div>
  );
};

export default Home;
