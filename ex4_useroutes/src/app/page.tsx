import React from "react";
import Link from "next/link";
const Home = () => {
  return (
    <div>
      <Link href="/page1">
        <button>Go to Page 1</button>
      </Link>
      <Link href="/page2">
        <button>Go to Page 2</button>
      </Link>
    </div>
  );
};

export default Home;
