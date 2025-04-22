"use client";

import { GoogleOAuth } from "@/context/google-oauth";
import { Apollo } from "../context/apollo";

interface Props {
  children: React.ReactNode;
}

export function Providers({ children }: Props) {
  return (
    <GoogleOAuth>
      <Apollo>{children}</Apollo>
    </GoogleOAuth>
  );
}
