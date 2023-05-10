import { MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/_component/ui/dropdown-menu";

const Page = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <MoreVertical color="#6F6E77" />
        <span className="sr-only">More</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>レシピ詳細を見る</DropdownMenuItem>
        <DropdownMenuItem>上へ移動する</DropdownMenuItem>
        <DropdownMenuItem>下へ移動する</DropdownMenuItem>
        <DropdownMenuItem>買うものを追加する</DropdownMenuItem>
        <DropdownMenuItem className="text-[#E54D2E]">
          リストから削除する
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Page;
