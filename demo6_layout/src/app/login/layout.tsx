import Link from "next/link";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">Login Main</Link>
        </li>
        <li>
          <Link href="/login/loginuser">Login User</Link>
        </li>
        <li>
          <Link href="/login/loginadmin">Login Admin</Link>
        </li>
        {children}
      </ul>
    </div>
  );
};

export default Layout;
