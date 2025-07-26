import Link from "next/dist/client/link";
import React from "react";

const Dashboard = () => {
  return (
    <>
      <div>Welcome to Dashboard</div>
      <nav className="bg-gray-200 p-4 rounded-lg shadow-md mb-4 text-gray-700">
        <ul>
          <li>
            <Link href={"/home"}>Home</Link>
          </li>
          <li>
            <Link href={"/user"}>User</Link>
          </li>
          <li>
            <Link href={"/settings"}>Settings</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Dashboard;
