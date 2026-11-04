"use client";

import { useState } from "react";

export function useFaqAccordion(initialOpenId: string | null = null) {
  const [openId, setOpenId] = useState<string | null>(initialOpenId);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const isOpen = (id: string) => openId === id;

  return { openId, toggle, isOpen };
}
