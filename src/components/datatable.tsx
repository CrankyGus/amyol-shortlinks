"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { BiTrash } from "react-icons/bi";
import QRCode from "react-qr-code";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Skeleton } from "./ui/skeleton";

interface IData {
  authorId: string;
  code: string;
  id: string;
  url: string;
}

function Datatable() {
  const [data, setData] = useState<IData[]>([
    {
      authorId: "",
      code: "",
      id: "",
      url: "",
    },
  ]);
  const [isLoading, setIsLoading] = useState(true);

  async function getData() {
    const res = await fetch("/api/urls");
    const data = await res.json();
    setData(data);
    setIsLoading(false);
  }

  async function deleteUrl(id: string) {
    const res = await fetch(`/api/urls/${id}`, {
      method: "DELETE",
    });
    console.log(res.json());
  }

  useEffect(() => {
    getData();
  }, []);

  console.log(data);
  return (
    <div className="mx-6">
      <div className={isLoading ? "" : "hidden"}>
        <Skeleton className="mb-4 h-8 w-full" />
        <Skeleton className="mb-4 h-8 w-full" />
        <Skeleton className="mb-4 h-8 w-full" />
        <Skeleton className="mb-4 h-8 w-full" />
        <Skeleton className="mb-4 h-8 w-full" />
        <Skeleton className="mb-4 h-8 w-full" />
        <Skeleton className="mb-4 h-8 w-full" />
      </div>
      {data.length > 0 && (
        <Table className={isLoading ? "hidden" : "w-full"}>
          <TableCaption>A list of your URLs.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[40px]">No.</TableHead>
              <TableHead className="">Full Url</TableHead>
              <TableHead>Code</TableHead>
              <TableHead className="text-right"></TableHead>
              <TableHead className="text-right"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell className="max-w-[5rem] truncate sm:max-w-[400px] md:max-w-[650px] ">
                  {item.url}
                </TableCell>
                <TableCell>{item.code}</TableCell>
                <TableCell>
                  <Dialog>
                    <DialogTrigger>QR</DialogTrigger>
                    <DialogContent>
                      <QRCode
                        size={256}
                        style={{
                          height: "auto",
                          maxWidth: "100%",
                          width: "100%",
                        }}
                        className="m-4 md:m-auto"
                        value={process.env.NEXT_PUBLIC_SITE_URL + item.code}
                        viewBox={`0 0 256 256`}
                      />
                    </DialogContent>
                  </Dialog>
                </TableCell>
                <TableCell>
                  <AlertDialog>
                    <AlertDialogTrigger>
                      <BiTrash className="text-red-500" />
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Are you absolutely sure?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently
                          delete your data from our servers.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => deleteUrl(item.id)}>
                          Continue
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
      {data.length === 0 && (
        <div>
          <p className="text-center text-gray-500">
            Add some links to get started
          </p>
        </div>
      )}
    </div>
  );
}

export default Datatable;
