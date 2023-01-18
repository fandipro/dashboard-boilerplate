import React from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import Topbar from "@/components/Topbar/Topbar";

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-gray-100">
        <Topbar/>
      </div>
      {props.children}
    </>
  );
};

export default Layout
