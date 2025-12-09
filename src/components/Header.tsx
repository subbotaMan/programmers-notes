import React, { useState, useEffect } from "react";
import { RiSearchLine } from "react-icons/ri";
import {
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiGit,
} from "react-icons/si";
import { FaCode } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  const [isScrolled, setIsScrollder] = useState(false);
  const activeLinks = "text-white-600 border-b-2";
  const scrollPixele = 50;

  const iconLinks = [
    {
      to: "/layout",
      Icon: SiHtml5,
      activeClass: "shadow-[0_0_15px] shadow-orange-600/90",
      className: "text-orange-500",
    },
    {
      to: "/javascript",
      Icon: SiJavascript,
      activeClass: "shadow-[0_0_15px] shadow-yellow-600/90",
      className: "text-yellow-500",
    },
    {
      to: "/react",
      Icon: SiReact,
      activeClass: "shadow-[0_0_15px] shadow-cyan-600/90",
      className: "text-cyan-400",
    },
    {
      to: "/typescript",
      Icon: SiTypescript,
      activeClass: "shadow-[0_0_15px] shadow-blue-600/90",
      className: "text-blue-400",
    },
    {
      to: "/another",
      Icon: FaCode,
      activeClass: "shadow-[0_0_15px] shadow-gray-600/90",
      className: "text-gray-400",
    },
    {
      to: "/git",
      Icon: SiGit,
      activeClass: "shadow-[0_0_15px] shadow-white-600/90",
      className: "text-white-400",
    },
  ];

  useEffect(() => {
    const handleSrcoll = () => {
      setIsScrollder(window.scrollY > scrollPixele);
    };

    window.addEventListener("scroll", handleSrcoll);
    return () => window.removeEventListener("scroll", handleSrcoll);
  }, []);

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
        {iconLinks.map(({ to, Icon, activeClass, className }) => {
          return (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => {
                return `p-2 rounded-lg transition ${
                  isActive ? activeClass : "hover:scale-110"
                }`;
              }}
              title={to.slice(1)}
            >
              <Icon className={`w-7 h-7 ${className}`} />
            </NavLink>
          );
        })}
      </div>

      {/* Input Container */}
      <div className="flex items-center gap-2 order-2 md:order-3">
        <div className="relative">
          <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>

        <input
          className="w-40 md:w-56 h-9 pl-9 pr-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
          placeholder="Поиск по сайту..."
          type="search"
        />
        <button className="px-3 py-1.5 bg-gray-600 hover:bg-blue-700 rounded-lg text-sm transition">
          Найти
        </button>
      </div>
    </header>
  );
};

export default Header;
