import { useEffect, useState } from 'react';

/**
 * Types a list of strings character by character, then waits and
 * starts typing the next string. Returns the currently visible text.
 */
export function useTypewriter(lines, { typingSpeed = 38, deleteSpeed = 18, pauseMs = 1600 } = {}) {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeout = 0;

    const tick = () => {
      const currentLine = lines[lineIndex] ?? '';

      if (!isDeleting) {
        charIndex += 1;
        setDisplayed(currentLine.slice(0, charIndex));

        if (charIndex === currentLine.length) {
          timeout = window.setTimeout(() => {
            isDeleting = true;
            tick();
          }, pauseMs);
          return;
        }
      } else {
        charIndex -= 1;
        setDisplayed(currentLine.slice(0, charIndex));

        if (charIndex === 0) {
          isDeleting = false;
          lineIndex = (lineIndex + 1) % lines.length;
        }
      }

      timeout = window.setTimeout(tick, isDeleting ? deleteSpeed : typingSpeed);
    };

    timeout = window.setTimeout(tick, typingSpeed);
    return () => window.clearTimeout(timeout);
  }, [lines, typingSpeed, deleteSpeed, pauseMs]);

  return displayed;
}
