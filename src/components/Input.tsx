"use client";
import React, { useEffect, useRef, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { BiInfoCircle, BiRocket } from "react-icons/bi";

interface IProps {
  session: string;
}

interface IData {
  authorId: string;
  code: string;
  id: string;
  url: string;
}

function InputComponent({ session }: IProps) {
  const urlRef = useRef<HTMLInputElement>(null);
  const [data, setData] = useState<IData>({
    authorId: "",
    code: "",
    id: "",
    url: "",
  });
  const [isOpen, setIsOpen] = useState(false);
  // console.log(process.env.NEXTAUTH_URL);
  const handleSubmit = async () => {
    const url = urlRef.current?.value;
    if (url === "") return;
    if (session === "") return;
    try {
      const data = await fetch("/api/urls", {
        method: "POST",
        body: JSON.stringify({
          sessionId: session,
          url: url,
        }),
      });
      const res = await data.json();
      setData(res);
      setIsOpen(true);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {}, []);
  return (
    <div className="flex w-full flex-col items-center space-x-2 sm:w-[600px] md:w-[900px] ">
      <div className="flex items-center  space-x-2  sm:w-[600px] md:w-[800px]">
        <Input type="text" ref={urlRef} placeholder="Enter a URL" />
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
      <div className="flex  flex-col p-4 ">
        <Alert className={isOpen ? "" : "hidden"}>
          <BiInfoCircle className=" text-2xl" />
          <AlertTitle className="ml-2">Here is your short link!</AlertTitle>
          <AlertDescription className="ml-2">
            <Link
              className="underline-offset-2 hover:underline"
              href={data.code}
            >
              {process.env.NEXT_PUBLIC_SITE_URL + "/" + data.code}
            </Link>
          </AlertDescription>
        </Alert>

        <span></span>
      </div>
    </div>
  );
}

export default InputComponent;
