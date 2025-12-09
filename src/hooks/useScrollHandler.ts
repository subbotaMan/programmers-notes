import { useEffect, useState } from "react";

export const useScrollHandler = (threshold: number = 50) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [threshold]);

  return isScrolled;
};
