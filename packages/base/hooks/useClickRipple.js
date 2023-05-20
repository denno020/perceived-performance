import { useEffect } from 'react';

export const useClickRipple = () => {
  useEffect(() => {
    const eventHandler = (e) => {
      console.log(`Is this happening?`);
      const ripple = document.createElement("div");

      ripple.className = "ripple";
      document.body.appendChild(ripple);

      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;

      ripple.style.animation = "ripple-effect .4s  linear";
      ripple.onanimationend = () => document.body.removeChild(ripple);
    }
    document.addEventListener('click', eventHandler);

  return () => {
    document.removeEventListener('click', eventHandler)
  }
  }, [])
}