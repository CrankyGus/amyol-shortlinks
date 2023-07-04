import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="absolute bottom-0 w-full text-center text-xs text-gray-500 md:text-sm">
      Copyright &copy; 2023{" "}
      <Link
        href="https://amyol.dev"
        className="font-bold underline-offset-4 hover:underline"
      >
        AMYOL.
      </Link>
      All Rights Reserved
    </div>
  );
}

export default Footer;
