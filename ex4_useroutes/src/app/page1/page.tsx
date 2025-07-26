"use client";
import React from "react";
import { useRouter } from "next/navigation";
const Page1 = () => {
  const router = useRouter();

  const navigate = (path: string) => {
    router.push(path);
  };
  const home = (path: string) => {
    router.push(path);
  };
  return (
    <div>
      Page 1<p>This is the content of Page 1</p>
      <button onClick={() => navigate("page2")}>Go to Page 2</button>
      <button onClick={() => home("/")}>Go to Home</button>
    </div>
  );
};

export default Page1;
