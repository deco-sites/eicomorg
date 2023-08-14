import { useEffect, useRef, useState } from "preact/hooks";

export const useScrollShow = () => {
  const elementRef = useRef<HTMLDivElement | HTMLAnchorElement | null>(null);
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef && elementRef.current) {
        const { top, bottom } = elementRef.current.getBoundingClientRect();
        const isVisible = top < window.innerHeight && bottom >= 0;
        if (isVisible) setIsShown(isVisible);
      }
    };

    addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial visibility on mount

    return () => {
      removeEventListener("scroll", handleScroll);
    };
  }, []);

  return [elementRef, isShown];
};
