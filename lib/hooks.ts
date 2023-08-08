/* eslint-disable import/no-anonymous-default-export */
import { useEffect, useState, RefObject } from "react";

export const useIsIntersecting = <T extends Element>(
  ref: RefObject<T>
): boolean => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsIntersecting(entry.isIntersecting);
      });
    });
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref?.current);
      }
    };
  }, [ref]);
  return isIntersecting;
};

export default { useIsIntersecting };
