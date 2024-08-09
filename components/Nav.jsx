"use client";

import Link from "next/link";
import Image from "next/image";
import IconButton from "./IconButton";
import ShopIcon from "@public/assets/icons/shop.svg";
import ChartIcon from "@public/assets/icons/chart.svg";
import { GraduationIcon } from "@public/assets/icons";

const Nav = () => {
  return (
    <nav className="flex-col w-full h-full bg-cyan-700 pt-8">
      <Link href="/" className="flex pb-20 flex-center">
        <IconButton Icon={GraduationIcon} id="home" className="fill-white" />
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
