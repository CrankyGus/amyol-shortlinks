import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;

  const find = await prisma.urls.findUnique({
    where: {
      id: slug,
    },
  });

  if (find) {
    const deleteUrl = await prisma.urls.delete({
      where: {
        id: slug,
      },
    });
  }

  return NextResponse.json({ find, slug });
}
