"use client";
import React, { useContext } from "react";
import { ModalContext } from "@/components/provider/ModalProvider";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

function ModalComponent() {
  const { isOpen, setIsOpen, isCookieAccepted, setIsCookieAccepted } =
    useContext(ModalContext);
  const { theme, setTheme } = useTheme();
  return (
    <div
      className={
        isOpen
          ? "fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-[rgba(0,0,0,0.5)]"
          : "hidden"
      }
    >
      <Card className="w-96">
        <CardHeader>
          <CardTitle>Setting</CardTitle>
          <CardDescription>Manage appearance and cookies</CardDescription>
        </CardHeader>
        <CardContent className="text-xs">
          <div className="mb-4 flex items-center">
            <h1 className="capitalize">appearance </h1>
            <Select onValueChange={(e) => setTheme(e)}>
              <SelectTrigger className="mx-4 h-6 w-[180px]">
                <SelectValue placeholder="Select Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="mb-6 flex items-center">
            <h1 className="capitalize">show profile </h1>
            <Select>
              <SelectTrigger className="mx-4 h-6 w-[180px]">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="show">Show</SelectItem>
                <SelectItem value="hidden">Hidden</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="items-top flex space-x-2 ">
            <Checkbox
              id="terms1"
              checked={isCookieAccepted}
              onClick={() => setIsCookieAccepted(!isCookieAccepted)}
            />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="terms1"
                className=" font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Cookie Policy
              </label>
              <p className=" text-muted-foreground">
                You have control over the use of cookies, allowing you to manage
                and customize your preferences. This includes the ability to
                withdraw or revoke your consent at any time.
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-end">
          <div className="flex items-center justify-end space-x-2">
            <Button variant="default" onClick={() => setIsOpen(false)}>
              Save
            </Button>
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Close
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default ModalComponent;
