"use client";
import { Separator } from "@/components/ui/separator";
import React, { useEffect, useState } from "react";
import { GoogleButton, DiscordButton, GitHubButton } from "./buttons";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
import { useSearchParams } from "next/navigation";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

function SignInComponent() {
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);
  const params = useSearchParams();
  const errorParams = params.get("error");

  useEffect(() => {
    if (errorParams) {
      setError(errorParams);
      setIsError(true);
    } else {
      setIsError(false);
    }
  }, [errorParams]);

  return (
    <Card className="mx-4 w-96">
      <CardHeader>
        {/* <div className="flex items-center justify-center">
            <Image
              src="/assets/logo.png"
              alt="Logo"
              width={100}
              height={100}
              className="my-2 rounded-full bg-gray-800 p-4"
            />
          </div> */}
        <CardTitle className=" text-sm md:text-xl">Sign In</CardTitle>
        <CardDescription className="text-xs md:text-sm">
          need to <span className="font-bold">Sign In</span> to access your
          account
        </CardDescription>
        <div
          className={
            isError
              ? "mt-4 flex items-center justify-center rounded-md bg-red-500 p-2"
              : "hidden"
          }
        >
          {isError && (
            <h1 className="text-xs text-white md:text-sm">
              Something went wrong. try anoter method
            </h1>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center">
        <GoogleButton />
        <DiscordButton />
        <GitHubButton />
        <Separator className="my-4" />
        <div className="flex w-full items-center">
          <Button
            className="w-full overflow-hidden"
            variant="destructive"
            disabled
          >
            Need Help?
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default SignInComponent;
