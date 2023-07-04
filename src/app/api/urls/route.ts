import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { cookies } from "next/headers";

export async function GET(request: Request) {
  const cookieStore = cookies();
  const session = cookieStore.get("next-auth.session-token");
  const sessionId = session?.value;

  if (sessionId) {
    const sessionFind = await prisma.session.findUnique({
      where: {
        sessionToken: sessionId,
      },
      include: {
        user: true,
      },
    });

    const urls = await prisma.urls.findMany({
      where: {
        authorId: sessionFind?.userId,
      },
    });
    return NextResponse.json(urls);
  }

  if (!sessionId) {
    return NextResponse.json({ message: "Not Authorized" });
  }
}

export async function POST(request: Request) {
  const cookieStore = cookies();
  // const session = cookieStore.get("next-auth.session-token");

  const body = await request.json();

  const shortCode = Math.random().toString(36).substring(2, 10);

  const session = await prisma.session.findUnique({
    where: {
      sessionToken: body.sessionId,
    },
    include: {
      user: true,
    },
  });

  if (!session) {
    return NextResponse.json({ message: "Not Authorized" });
  }

  const urlCheck = await prisma.urls.findFirst({
    where: {
      url: body.url,
    },
  });

  if (urlCheck) {
    const newUrl = await prisma.urls.create({
      data: {
        url: body.url,
        code: urlCheck.code,
        author: {
          connect: {
            id: session.userId,
          },
        },
      },
    });

    return NextResponse.json(newUrl);
  }

  const url = await prisma.urls.create({
    data: {
      url: body.url,
      code: shortCode,
      author: {
        connect: {
          id: session.userId,
        },
      },
    },
  });

  // console.log(session?.value);
  return NextResponse.json(url);
}
