import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";

interface Props {
  children: React.ReactNode;
}

export function GoogleOAuth({ children }: Props) {
  const clientId =
    process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID! ||
    "665602308560-h1o0v8icefcdot57452tk6jiq5488ist.apps.googleusercontent.com";
  return (
    <GoogleOAuthProvider clientId={clientId}>{children}</GoogleOAuthProvider>
  );
}
