/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";

function CounterAnimation({ targetNumber, increment = 1 }) {
  const countRef = useRef(0);
  const elementRef = useRef(null);

  useEffect(() => {
    const updateCount = () => {
      if (countRef.current < targetNumber) {
        countRef.current += increment;
        if (elementRef.current) {
          elementRef.current.innerHTML = countRef.current;
        }
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);

    return () => {
      // Cleanup if necessary
    };
  }, [targetNumber, increment]);

  return (
    <p ref={elementRef} className="sm:text-2xl">
      {countRef.current}
    </p>
  );
}

export default CounterAnimation;
