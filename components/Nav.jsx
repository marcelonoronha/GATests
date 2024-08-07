"use client";

import Link from "next/link";
import Image from "next/image";
import IconButton from "./IconButton";
import ShopIcon from "@public/assets/icons/shop.svg";
import ChartIcon from "@public/assets/icons/chart.svg";

const Nav = () => {
  return (
    <nav className="flex-col w-16 h-full pt-3 bg-cyan-700 pt-8 fixed top-0 left-0">
      <Link href="/" className="flex flex-center pb-20">
        <Image
          src="/assets/images/logo.svg"
          alt="Logo"
          width={30}
          height={30}
          className="object-contain"
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="flex-col flex-center">
        <Link href="/results" className="flex pb-10">
          <IconButton Icon={ChartIcon} id="home" className="fill-white" />
        </Link>

        <Link href="/shop" className="flex pb-6">
          <IconButton Icon={ShopIcon} id="menu" className="fill-white" />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
