import Input from "@/components/Input";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Datatable from "@/components/datatable";
import { getServerSession } from "next-auth/next";
import { authOpts } from "@/lib/auth";

export default async function Home() {
  const cookieStore = cookies();
  const session = await getServerSession(authOpts);
  const sessionCookie = cookieStore.get("next-auth.session-token");
  const sessionCookieSecure = cookieStore.get(
    "__Secure-next-auth.session-token"
  );

  if (!sessionCookie || !sessionCookieSecure) return redirect("/signin");
  console.log(session);

  return (
    <div className="mt-24 flex max-w-[1200px] flex-col items-center justify-center">
      <h1 className="mb-8 font-bold md:text-3xl">
        Paste the <span className="text-red-500">URL</span> to be shortened
      </h1>
      <div className="">
        <Input
          session={sessionCookie?.value || sessionCookieSecure?.value || ""}
        />
        <Datatable />
      </div>
    </div>
  );
}
