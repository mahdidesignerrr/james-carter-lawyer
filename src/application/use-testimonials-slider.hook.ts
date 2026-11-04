"use client";

import { useEffect, useRef, useState } from "react";

interface UseTestimonialsSliderOptions {
  totalItems: number;
  interval?: number;
  autoPlay?: boolean;
}

export function useTestimonialsSlider({
  totalItems,
  interval = 4500,
  autoPlay = true,
}: UseTestimonialsSliderOptions) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const goTo = (index: number) => {
    if (index >= 0 && index < totalItems) {
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    if (!autoPlay || isPaused || totalItems <= 1) return;

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalItems);
    }, interval);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [autoPlay, isPaused, totalItems, interval]);

  return {
    currentIndex,
    next,
    prev,
    goTo,
    setIsPaused,
  };
}
