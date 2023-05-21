"use client";
import { signIn } from "next-auth/react";

import { Button } from "./button";

export const Login = () => {
  return (
    <Button
      onClick={() => {
        signIn("github", { callbackUrl: "/dashboard" });
      }}
    >
      GitHubでログイン
    </Button>
  );
};
