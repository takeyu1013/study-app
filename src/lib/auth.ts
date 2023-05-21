import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

import { GITHUB_ID, GITHUB_SECRET } from "./env";

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: GITHUB_ID,
      clientSecret: GITHUB_SECRET,
    }),
  ],
};
