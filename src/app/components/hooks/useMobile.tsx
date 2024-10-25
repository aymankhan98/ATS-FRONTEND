"use client";

import * as React from "react";

/**
 * Custom hook to detect if the current device is mobile based on screen width
 * @param breakpoint - Optional breakpoint in pixels (defaults to 768px)
 * @returns boolean indicating if the device is considered mobile
 */
export function useIsMobile(breakpoint: number = 768): boolean {
  const [isMobile, setIsMobile] = React.useState<boolean>(false);

  React.useEffect(() => {
    // Check if we're on the client-side
    if (typeof window === "undefined") return;

    // Initial check
    const checkMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    // Run initial check
    checkMobile();

    // Add resize listener
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, [breakpoint]);

  return isMobile;
}
