import { useEffect } from "react";

/**
 * One orchestrated page-load reveal: every `.reveal` element fades and lifts into
 * place once, staggered by its DOM order within the same parent. No scattered
 * micro-interactions.
 */
export function useScrollReveal() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.classList.add("is-in"));
      return;
    }

    const stagger = new Map<Element, number>();
    nodes.forEach((n) => {
      const parent = n.parentElement;
      if (!parent) return;
      stagger.set(parent, (stagger.get(parent) ?? 0) + 1);
      n.style.transitionDelay = `${Math.min((stagger.get(parent)! - 1) * 70, 420)}ms`;
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
}
