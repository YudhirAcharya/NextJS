import React, { ReactNode } from "react";

const Layout = ({
  children,
  sidebar,
  songs,
}: {
  children: ReactNode;
  sidebar: ReactNode;
  songs: ReactNode;
}) => {
  return (
    <div className="flex">
      {sidebar}
      <div className="flex-1 p-6">{songs}</div>
      {children}
    </div>
  );
};

export default Layout;
