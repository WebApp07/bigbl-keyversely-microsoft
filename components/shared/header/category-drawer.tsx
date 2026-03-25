import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { getAllCategories } from "@/lib/actions/product.actions";
import { MenuIcon, TagsIcon } from "lucide-react";
import Link from "next/link";

const CategoryDrawer = async () => {
  const categories = await getAllCategories();

  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center gap-2 px-3 py-2 border border-input rounded-lg shadow-sm hover:bg-accent transition"
        >
          <MenuIcon className="w-5 h-5" />
          <span className="hidden sm:inline text-sm font-medium">
            Shop by category
          </span>
        </Button>
      </DrawerTrigger>

      <DrawerContent className="h-full max-w-sm p-4">
        <DrawerHeader className="mb-4">
          <DrawerTitle className="text-lg font-semibold text-muted-foreground">
            Select a Category
          </DrawerTitle>
        </DrawerHeader>

        <div className="space-y-2 px-2">
          {categories.map((x) => (
            <DrawerClose asChild key={x.category}>
              <Link href={`/search?category=${encodeURIComponent(x.category)}`}>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-base font-medium hover:bg-muted hover:text-foreground transition rounded-lg"
                >
                  <TagsIcon className="w-4 h-4 mr-2 text-muted-foreground" />
                  {x.category}{" "}
                  <span className="ml-auto text-xs text-muted-foreground">
                    ({x._count})
                  </span>
                </Button>
              </Link>
            </DrawerClose>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default CategoryDrawer;
