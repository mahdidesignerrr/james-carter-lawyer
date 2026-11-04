"use client";

export function useScrollNavigation() {
  const scrollTo = (elementId: string) => {
    const target = document.getElementById(elementId);
    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return { scrollTo };
}
