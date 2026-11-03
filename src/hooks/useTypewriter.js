import { useEffect, useState } from 'react';

/** Types a list of strings with one timer at a time and cleans up on unmount. */
export function useTypewriter(lines, { typingSpeed = 52, deleteSpeed = 28, pauseMs = 1800 } = {}) {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    const firstLine = lines[0] ?? '';
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (motionQuery.matches) {
      setDisplayed(firstLine);
      return undefined;
    }

    if (lines.length === 0) {
      setDisplayed('');
      return undefined;
    }

    let lineIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeoutId;
    let cancelled = false;

    const schedule = (delay) => {
      timeoutId = window.setTimeout(tick, delay);
    };

    const tick = () => {
      if (cancelled) return;

      const line = lines[lineIndex] ?? '';
      if (!deleting) {
        charIndex = Math.min(charIndex + 1, line.length);
        setDisplayed(line.slice(0, charIndex));

        if (charIndex === line.length) {
          deleting = true;
          schedule(pauseMs);
          return;
        }
      } else {
        charIndex = Math.max(charIndex - 1, 0);
        setDisplayed(line.slice(0, charIndex));

        if (charIndex === 0) {
          deleting = false;
          lineIndex = (lineIndex + 1) % lines.length;
        }
      }

      schedule(deleting ? deleteSpeed : typingSpeed);
    };

    schedule(typingSpeed);
    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
    };
  }, [lines, typingSpeed, deleteSpeed, pauseMs]);

  return displayed;
}
