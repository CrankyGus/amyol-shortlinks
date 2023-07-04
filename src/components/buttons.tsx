"use client";

import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { Button } from "./ui/button";
import { BiLogoDiscord, BiLogoGithub, BiLogoGoogle } from "react-icons/bi";

export const GitHubButton = () => {
  return (
    <Button onClick={() => signIn("github")} className="mb-2 w-full">
      <BiLogoGithub className="mr-2 text-center text-lg " />
      Sign in with Github
    </Button>
  );
};

export const GoogleButton = () => {
  return (
    <Button
      className="mb-2 w-full overflow-hidden"
      variant="outline"
      onClick={() => signIn("google")}
    >
      <BiLogoGoogle className="mr-2 text-center text-lg" />
      Sign in with Google
    </Button>
  );
};

export const DiscordButton = () => {
  return (
    <Button
      className="mb-2 w-full bg-[#7289da] hover:bg-[#6289da] active:bg-[#5289da]"
      onClick={() => signIn("discord")}
    >
      <BiLogoDiscord className="mr-2 text-center text-lg" />
      Sign in with Discord
    </Button>
  );
};

export const LogoutButton = () => {
  return (
    <button style={{ marginRight: 10 }} onClick={() => signOut()}>
      Sign Out
    </button>
  );
};
