import React, { PropsWithChildren } from "react";
import { Metadata } from "next";
import AdminNavigation from "./Navigations";

interface AdminLayoutProps {}

export const metadata: Metadata = {
  title: "Admin - Zchool",
  description: "School Management System by Ziqx",
};

const AdminLayout: React.FC<PropsWithChildren<AdminLayoutProps>> = (props) => {
  return (
    <main className="flex">
      <AdminNavigation />
      <div className="flex flex-col flex-grow w-full pb-14 relative min-h-screen overflow-x-hidden">
        {/* <div className="h-20 bg-white px-[5%] flex items-center justify-between text-zinc-700 text-2xl font-semibold">
          <p>Admin Dashboard</p>
        </div> */}
        <div className="p-10 px-6">{props.children}</div>
        {/* <Footer /> */}
      </div>
    </main>
  );
};

export default AdminLayout;
