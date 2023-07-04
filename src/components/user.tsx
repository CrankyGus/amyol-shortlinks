"use client";

import { useSession } from "next-auth/react";

export const User = () => {
  const { data: session } = useSession();

  return (
    <>
      <h1>Client Session</h1>
      <pre className="h-[300px] w-[300px] overflow-y-scroll">
        {JSON.stringify(session)}
      </pre>
    </>
  );
};
