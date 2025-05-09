"use client";

import { GoogleOAuth } from "@/context/google-oauth";
import { Apollo } from "../context/apollo";
import StoreProvider from "@/context/store";

interface Props {
  children: React.ReactNode;
}

export function Providers({ children }: Props) {
  return (
    <StoreProvider>
      <GoogleOAuth>
        <Apollo>{children}</Apollo>
      </GoogleOAuth>
    </StoreProvider>
  );
}
