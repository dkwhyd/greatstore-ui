import React from "react";
import menus from "../menu";

export default function Sidebar() {
  return (
    <div className="bg-red-500 w-28 pt-[10vh] h-screen">
      <ul>
        {menus.map((menu) => (
          <li
            key={menu.id}
            className="flex flex-row mb-6 cursor-pointer hover:bg-red-600 "
          >
            <div className="m-2">
              {React.cloneElement(menu.icon, { size: 30 })}{" "}
            </div>
            <span className="m-2">{menu.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
