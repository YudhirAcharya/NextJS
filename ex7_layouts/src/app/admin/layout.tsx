import React from "react";
import Link from "next/link";
const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      Admin Panel
      <div>This is admoin</div> <div>{children}</div>
    </div>
  );
};

export default AdminLayout;
