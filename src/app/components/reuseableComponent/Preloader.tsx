"use client"; // Mark the component as client-side

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // usePathname gives the current route

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname(); // Get the current pathname

  useEffect(() => {
    // When the page path changes, start the loader
    setIsLoading(true);
    
    // Simulate the loading state and set it to false after a timeout
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust the time based on your needs (e.g., after data is loaded)

    // Cleanup on component unmount
    return () => clearTimeout(timeout);
  }, [pathname]); // Dependency on pathname to trigger effect on route change

  return isLoading ? (
    <div className="preloader">
      <div className="spinner">Loading...</div> {/* Your preloader UI */}
    </div>
  ) : null;
};

export default Preloader;
