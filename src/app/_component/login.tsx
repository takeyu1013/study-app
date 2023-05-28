"use client";

import { useSearchParams } from "next/navigation";

import { signIn } from "next-auth/react";

import { Button } from "./button";

export const Login = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";

  return (
    <Button
      onClick={() => {
        signIn("github", { callbackUrl });
      }}
    >
      GitHubでログイン
    </Button>
  );
};
