"use client";

import Link from "next/link";

import { Grid, Icon, Text } from "@tremor/react";
import { HeartIcon, SearchIcon, ShoppingCartIcon } from "lucide-react";
import { signOut } from "next-auth/react";

export const Menu = () => {
  return (
    <Grid numCols={3} className="fixed bottom-0 left-0 w-screen">
      <Link href="/dashboard">
        <Grid className="place-items-center">
          <Icon icon={SearchIcon} />
          <Text>検索</Text>
        </Grid>
      </Link>
      <Link
        href="#"
        onClick={() => {
          signOut();
        }}
      >
        <Grid className="place-items-center">
          <Icon icon={HeartIcon} />
          <Text>お気に入り</Text>
        </Grid>
      </Link>
      <Link href="/dashboard/shopping">
        <Grid className="place-items-center">
          <Icon icon={ShoppingCartIcon} className="block" />
          <Text>お買い物</Text>
        </Grid>
      </Link>
    </Grid>
  );
};
