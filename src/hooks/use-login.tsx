import { LOGIN } from "@/utils/grapqhl/login";
import { useMutation } from "@apollo/client";
import { useGoogleLogin } from "@react-oauth/google";
import { useEffect } from "react";

export const useLogin = () => {
  const [login, { loading, error }] = useMutation(LOGIN);

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  return useGoogleLogin({
    flow: "auth-code",
    onSuccess: async (codeResponse) => {
      console.log(codeResponse);
      if (loading) return;
      console.log("res");
      const res = await login({ variables: { token: codeResponse.code } });
      console.log("res");
      console.log(res);
    },
    onError: (errorResponse) => console.log(errorResponse),
  });
};
