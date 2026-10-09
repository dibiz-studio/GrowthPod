"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type ServiceTabState = {
  active: number;
  /** true once the visitor has switched tabs, so the panel fade only plays on change */
  changed: boolean;
  select: (index: number) => void;
};

const ServiceTabContext = createContext<ServiceTabState | null>(null);

export function ServiceTabProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState(0);
  const [changed, setChanged] = useState(false);

  const select = (index: number) => {
    setActive(index);
    setChanged(true);
  };

  return (
    <ServiceTabContext.Provider value={{ active, changed, select }}>{children}</ServiceTabContext.Provider>
  );
}

export function useServiceTab() {
  const ctx = useContext(ServiceTabContext);
  if (!ctx) throw new Error("useServiceTab must be used inside <ServiceTabProvider>");
  return ctx;
}
