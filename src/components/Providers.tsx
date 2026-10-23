"use client";

import { MotionConfig } from "motion/react";
import { IntroProvider } from "@/components/IntroContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <IntroProvider>{children}</IntroProvider>
    </MotionConfig>
  );
}
