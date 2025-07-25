import React from "react";
import Link from "next/link";
const Home = () => {
  return (
    <div>
      {" "}
      <div>
        Products:
        <Link href="/products" className=" ">
          <h2 className="text-xl font-semibold text-teal-800 mb-2">Products</h2>
        </Link>
      </div>
    </div>
  );
};

export default Home;
