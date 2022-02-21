import { useEffect, useCallback } from "react";

const useInfiniteScroll = (bottomBoundaryRef, scrollerDispatch) => {
  const scrollManager = useCallback(
    (node) => {
      new IntersectionObserver((enteries) => {
        enteries.forEach((en) => {
          if (en.intersectionRatio > 0) {
            scrollerDispatch({ type: "SCROLL_LEFT" });
          }
        });
      }).observe(node);
    },
    [scrollerDispatch]
  );
  useEffect(() => {
    console.log("Triggered");
    if (bottomBoundaryRef.current) {
      scrollManager(bottomBoundaryRef.current);
    }
  }, [scrollManager, bottomBoundaryRef]);
};

export default useInfiniteScroll;