import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { useScrollHandler } from "../hooks/useScrollHandler";

export const ButtonToTopAnchor: React.FC = () => {
  const isScrolled = useScrollHandler(100);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isScrolled) return null;

  return (
    <button
      className="fixed bottom-4 right-4 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors"
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <div onClick={scrollToTop} style={{ pointerEvents: "none" }}>
        <FaArrowUp size={24} />
      </div>
    </button>
  );
};
