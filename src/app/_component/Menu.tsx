"use client";

import {
  HeartIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { Grid, Icon, Text } from "@tremor/react";

export default function Menu() {
  return (
    <Grid numCols={3} className="fixed bottom-0 left-0 w-screen">
      <Grid className="place-items-center">
        <Icon icon={SearchIcon} />
        <Text>検索</Text>
      </Grid>
      <Grid className="place-items-center">
        <Icon icon={HeartIcon} />
        <Text>お気に入り</Text>
      </Grid>
      <Grid className="place-items-center">
        <Icon icon={ShoppingCartIcon} className="block" />
        <Text>お買い物</Text>
      </Grid>
    </Grid>
  );
}
