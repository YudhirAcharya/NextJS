"use client";
import { useRouter } from "next/navigation";
import React from "react";

const page2 = () => {
  const router = useRouter();

  const navigate = (path: string) => {
    router.push(path);
  };
  return (
    <div>
      Page 2<p>This is the content of Page 2</p>
      <button onClick={() => navigate("page1")}>Go to Page 1</button>
    </div>
  );
};

export default page2;
