"use client";

import { useState } from "react";
import { Navbar, Typography, IconButton } from "@material-tailwind/react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function NavbarLayout() {
  const [openNav, setOpenNav] = useState(false);

  const handleNavToggle = () => setOpenNav(!openNav);

  return (
    <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 font-bold"
        >
          MyBrand
        </Typography>
        <div className="hidden lg:block">
          <ul className="flex items-center gap-6">
            <li>
              <Link href="/" className="text-base font-medium text-gray-700 hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-base font-medium text-gray-700 hover:text-blue-500">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-base font-medium text-gray-700 hover:text-blue-500">
                Services
              </Link>
            </li>
            <li>
              <Link href="/admin/create" className="text-base font-medium text-gray-700 hover:text-blue-500">
                Events
              </Link>
            </li>
          </ul>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          onClick={handleNavToggle}
        >
          {openNav ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </IconButton>
      </div>
      {openNav && (
        <ul className="mt-4 flex flex-col gap-4">
        <li>
          <Link href="/" className="text-base font-medium text-gray-700 hover:text-blue-500">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-base font-medium text-gray-700 hover:text-blue-500">
            About
          </Link>
        </li>
        <li>
          <Link href="/services" className="text-base font-medium text-gray-700 hover:text-blue-500">
            Services
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-base font-medium text-gray-700 hover:text-blue-500">
            Contact
          </Link>
        </li>
      </ul>
      )}
    </Navbar>
  );
}
