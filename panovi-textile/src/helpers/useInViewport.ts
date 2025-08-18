import { useEffect, useRef, useState } from "react";

export function useInViewport<T extends HTMLElement>(opts?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setInView(true),
      { threshold: 0.4, ...opts }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [opts]);

  return { ref, inView } as const;
}