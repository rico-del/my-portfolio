import { useEffect, useRef, useState } from 'react';

export function useCountUp(target, { duration = 1400 } = {}) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let animationFrame = 0;
    const startTime = Date.now();

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(tick);
      }
    };

    animationFrame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(animationFrame);
  }, [duration, target]);

  return { ref, value };
}
