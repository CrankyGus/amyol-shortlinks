import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Image from "next/image";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DiscordButton,
  GitHubButton,
  GoogleButton,
} from "@/components/buttons";
import { Separator } from "@/components/ui/separator";
import SignInComponent from "@/components/signIn";

function LoginPage() {
  const cookieStore = cookies();
  const session = cookieStore.get("next-auth.session-token");
  if (session) redirect("/");
  return (
    <div className=" flex min-h-[70vh] items-center justify-center">
      <SignInComponent />
    </div>
  );
}

export default LoginPage;
