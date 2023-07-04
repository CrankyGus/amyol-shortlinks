"use client";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BiX } from "react-icons/bi";
import Link from "next/link";

interface IProps {
  children: React.ReactNode;
}

function Layout({ children }: IProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div className="bg-gray-800 ">
        <div
          className={
            isOpen
              ? "relative mx-auto flex max-w-[1200px] items-center justify-center space-x-2 p-2 text-xs text-white"
              : "hidden"
          }
        >
          <h1>This website is created by AMYOL</h1>
          <Link href={"https://amyol.dev"} className="font-bold underline">
            Visit Now!
          </Link>
          <BiX
            onClick={() => setIsOpen(!isOpen)}
            className=" absolute right-0 cursor-pointer text-xl"
          />
        </div>
      </div>
      <div className="relative mx-auto min-h-screen max-w-[1200px]">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
}

export default Layout;
