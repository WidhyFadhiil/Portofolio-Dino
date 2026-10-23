"use client";

import { createContext, useContext, useMemo, useState } from "react";

type IntroState = { ready: boolean; setReady: (v: boolean) => void };
const Ctx = createContext<IntroState>({ ready: true, setReady: () => {} });

export function IntroProvider({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  const value = useMemo(() => ({ ready, setReady }), [ready]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export const useIntro = () => useContext(Ctx);
