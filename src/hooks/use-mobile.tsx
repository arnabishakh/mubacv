
import { useState, useEffect } from 'react';

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function checkIsMobile() {
      setIsMobile(window.innerWidth < 768);
    }

    // Initial check
    checkIsMobile();

    // Add event listener for resize
    window.addEventListener('resize', checkIsMobile);

    // Clean up event listener on unmount
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return isMobile;
}
