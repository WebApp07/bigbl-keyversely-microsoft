import React from "react";
import Link from "next/link";
import Image from "next/image";
import { APP_NAME } from "@/lib/constants";
import Menu from "./menu";
import CategoryDrawer from "./category-drawer";
import Search from "./search";

const Header = () => {
  return (
  <header className="w-full border-b bg-background">
  <div className="wrapper flex flex-col md:flex-row md:items-center md:justify-between gap-3 py-3">
    <div className="flex items-center justify-between w-full md:w-auto">
      <div className="flex items-center">
        <CategoryDrawer />
        <Link href="/" className="flex items-center ml-3">
          <Image
            src="/images/logo.svg"
            alt={`${APP_NAME} logo`}
            height={40}
            width={40}
            priority
          />
          <span className="hidden sm:block font-bold text-xl ml-2">
            {APP_NAME}
          </span>
        </Link>
      </div>
      {/* Mobile menu toggle */}
      <div className="md:hidden">
        <Menu />
      </div>
    </div>

    {/* Search — visible on all screens */}
    <div className="w-full md:w-[400px] lg:w-[500px]">
      <Search />
    </div>

    {/* Desktop menu */}
    <div className="hidden md:flex">
      <Menu />
    </div>
  </div>
</header>

  );
};

export default Header;
