import React from "react";
import UserDropdown from "../Dropdown/UserDropdwon";
import Link from "next/link";

const Topbar = () => {
  return (
    <div className="hidden bg-white shadow-xl px-6 md:flex md:items-center md:justify-end h-16">
      <ul className="list-none flex gap-4 items-center">
        <li>
          <i className="fa-sharp fa-solid fa-bell"></i>
        </li>
        <li>
          <ul className="flex gap-3">
            <li>
                <span className="block">Ivo Julistira</span>
                <span>Jabatan No PN: 00323</span>
            </li>
            <li>
                <UserDropdown/>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Topbar;
