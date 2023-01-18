import React, { useState } from "react";

const UserDropdown = () => {
  const [dropdownShow, setDropdownShow] = useState<boolean>(false);

  return (
    <>
      <button className="w-12 h-12 text-sm text-white bg-gray-200 rounded-full">
        <img
          src="/team-1-800x800.jpg"
          alt="..."
          className="w-full rounded-full align-middle border-none shadow-lg"
        />
      </button>
    </>
  );
};

export default UserDropdown;
