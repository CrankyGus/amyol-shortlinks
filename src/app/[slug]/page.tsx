import prisma from "@/lib/prisma";
import React from "react";
import { notFound, redirect } from "next/navigation";

async function RedirectPage({ params }: { params: { slug: string } }) {
  const url = await prisma.urls.findFirst({
    where: {
      code: params.slug,
    },
  });

  if (!url) {
    return notFound();
  }

  return redirect(url.url);
}

export default RedirectPage;
