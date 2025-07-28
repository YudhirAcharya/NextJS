"use client";
import Link from "next/link";
import React from "react";
import "../globals.css";

const LayoutPage = () => {
  const [name, setName] = React.useState("");
  return (
    <div>
      <input
        type="text"
        className="border border-black"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>

      <Link href="/analytics/stats">Stats</Link>
      <Link href="/analytics/revenue">Revenue</Link>
    </div>
  );
};

export default LayoutPage;
