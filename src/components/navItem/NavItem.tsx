import { FC, memo } from "react";
import { NavLink } from "react-router-dom";

interface NavItemProps {
  text: string;
  link: string;
}

export const NavItem: FC<NavItemProps> = memo(({ text, link }) => {
  return (
    <li
      className={`cursor-pointer text-[#BEBEBE] text-2xl font-bold hover:text-default hover:border-default transition-all duration-100`}
    >
      <NavLink
        to={link}
        className={({ isActive }) =>
          isActive ? "border-b-4 text-default border-default" : ""
        }
      >
        {text}
      </NavLink>
    </li>
  );
});
