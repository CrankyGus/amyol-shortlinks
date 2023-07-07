"use client";
import React, { useContext } from "react";
import Image from "next/image";
import {
  BiCog,
  BiLoaderAlt,
  BiLogIn,
  BiQuestionMark,
  BiUser,
} from "react-icons/bi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { signOut } from "next-auth/react";
import Modal from "../modal";
import { ModalContext } from "../provider/ModalProvider";
import Link from "next/link";
import { Button } from "../ui/button";

function Navbar() {
  const { data: session } = useSession();
  const { setIsOpen } = useContext(ModalContext);

  return (
    <div>
      <div className="mx-4 flex w-full  items-center justify-between px-10 py-5">
        <Link
          href="/"
          className="flex w-full items-center space-x-4 text-lg font-bold"
        >
          <Image src="/assets/logo.png" alt="logo" width={50} height={50} />
          <div>
            <h1>AMYOL</h1>
            <p className="text-xs font-medium text-gray-500">ShortLink</p>
          </div>
        </Link>
        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger>
              {session ? (
                <Avatar className="mx-4">
                  <AvatarImage src={session?.user?.image as string} />
                  <AvatarFallback>
                    <BiLoaderAlt className="animate-spin" />
                  </AvatarFallback>
                </Avatar>
              ) : null}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem disabled>
                <BiUser className="mr-2" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => console.log("first")}>
                <BiQuestionMark className="mr-2" />
                FAQ
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setIsOpen(true)}>
                <BiCog className="mr-2" />
                Setting
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => signOut()}>
                <BiLogIn className="mr-2" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {!session ? <Button disabled>FAQ</Button> : null}
        </div>
      </div>
      <Modal />
    </div>
  );
}

export default Navbar;
