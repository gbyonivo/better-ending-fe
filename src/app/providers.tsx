"use client";

import { Apollo } from "../context/apollo";

interface Props {
  children: React.ReactNode;
}

export function Providers({ children }: Props) {
  return <Apollo>{children}</Apollo>;
}
