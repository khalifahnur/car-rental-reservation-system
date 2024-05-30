import React from "react";
import NavLink from "./NavLink";

export const MenuOverlay = ({ Links }) => {
  return (
    <ul className="flex flex-col py-4 items-center bg-[#fff]">
      {Links.map((item, index) => (
        <li key={index}>
          <NavLink href={item.path} title={item.title} />
        </li>
      ))}
    </ul>
  );
};
