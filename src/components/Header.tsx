import React from "react";
import {
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiGit,
} from "react-icons/si";
import { FaCode } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useScrollHandler } from "../hooks/useScrollHandler";

interface IconLinksType {
  to: string;
  Icon: React.ComponentType<{ className?: string }>;
  activeClass: string;
  className: string;
  title: string;
}

type HeaderProps = {
  children?: React.ReactNode;
};

const Header: React.FC<HeaderProps> = ({ children }) => {
  const activeLinks: string = "text-white border-b-2";
  const isScrolled = useScrollHandler();

  const iconLinks: IconLinksType[] = [
    {
      to: "/layout",
      Icon: SiHtml5,
      activeClass: "shadow-[0_0_15px] shadow-orange-600/90",
      className: "text-orange-500",
      title: "HTML",
    },
    {
      to: "/javascript",
      Icon: SiJavascript,
      activeClass: "shadow-[0_0_15px] shadow-yellow-600/90",
      className: "text-yellow-500",
      title: "JavaScript",
    },
    {
      to: "/react",
      Icon: SiReact,
      activeClass: "shadow-[0_0_15px] shadow-cyan-600/90",
      className: "text-cyan-400",
      title: "React",
    },
    {
      to: "/typescript",
      Icon: SiTypescript,
      activeClass: "shadow-[0_0_15px] shadow-blue-600/90",
      className: "text-blue-400",
      title: "TypeScript",
    },
    {
      to: "/another",
      Icon: FaCode,
      activeClass: "shadow-[0_0_15px] shadow-gray-600/90",
      className: "text-gray-400",
      title: "Another",
    },
    {
      to: "/git",
      Icon: SiGit,
      activeClass: "shadow-[0_0_15px] shadow-white-600/90",
      className: "text-white",
      title: "Git",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 p-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg transition-all duration-300 z-50 text-white ${
        isScrolled ? "bg-black/80 backdrop-blur-sm" : "bg-black"
      }`}
    >
      {/* Title */}
      <NavLink
        to="/"
        className={({ isActive }) => {
          return `text-2xl font-bold md:mr-auto hover:text-blue-300 transition ${
            isActive ? activeLinks : "text-white-300"
          }`;
        }}
      >
        Заметки программиста
      </NavLink>

      {/* Links */}
      <div className="flex items-center gap-4 order-3 md:order-2">
        {iconLinks.map(({ to, Icon, activeClass, className, title }) => {
          return (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => {
                return `p-2 rounded-lg transition ${
                  isActive ? activeClass : "hover:scale-110"
                }`;
              }}
              title={title}
            >
              <Icon className={`w-7 h-7 ${className}`} />
            </NavLink>
          );
        })}
      </div>

      {children}
    </header>
  );
};

export default Header;
