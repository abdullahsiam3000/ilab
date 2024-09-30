"use client";
import React from "react";
import Image from "next/image";

import telephone from "@/assets/icons/telephone.svg";
import location from "@/assets/icons/location.svg";
import search from "@/assets/icons/search.svg";
import cart from "@/assets/icons/cart.svg";
import avatar from "@/assets/icons/avatar.svg";
import logo from "@/assets/images/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menus = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Service",
    href: "/service",
  },
  {
    name: "Shop",
    href: "/shop",
  },
  {
    name: "Accessorise",
    href: "/accessorise",
  },
  {
    name: "Blog",
    href: "/blog",
  },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header>
      <nav className="flex items-center py-3 w-wrapper mx-auto">
        <div className="flex gap-2">
          <Image src={telephone} alt="logo" width={15.93} height={16} />
          <p className="text-[#333333]">+8806666-000000</p>
        </div>
        <div className="h-4 w-[1px] bg-[#cac3c3] mx-6"></div>
        <div className="flex gap-2">
          <Image src={location} alt="logo" width={12.8} height={16} />
          <p className="text-[#333333]">
            Here is your shop Location, and City Name
          </p>
        </div>
      </nav>
      <nav className="bg-[#FFF7EB] py-4">
        <div className="wrapper flex justify-between items-center">
          <div className="">
            <Image src={logo} alt="logo" />
          </div>
          <ul className="flex gap-8">
            {menus.map((menu) => {
              console.log(menu.href === pathname);
              return (
                <li key={menu.name} className="relative group  py-2">
                  <Link
                    href={menu.href}
                    className="relative text-[#333333] transition-colors "
                  >
                    {menu.name}
                  </Link>

                  <span
                    className={`absolute left-0 right-0 bottom-0 h-0.5 transition-all duration-300 ${
                      pathname === menu.href
                        ? "bg-[#FBB03B]"
                        : "bg-transparent group-hover:bg-[#FBB03B]"
                    }`}
                  ></span>
                </li>
              );
            })}
          </ul>
          <div className="flex gap-4">
            <div>
              <Image
                src={search}
                alt="search"
                height={16}
                width={16}
                className="cursor-pointer"
              />
            </div>
            <div>
              <Image
                src={cart}
                alt="search"
                height={16}
                width={16}
                className="cursor-pointer"
              />
            </div>
            <div>
              <Image
                src={avatar}
                alt="search"
                height={16}
                width={16}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
