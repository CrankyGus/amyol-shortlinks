import Input from "@/components/Input";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Datatable from "@/components/datatable";

export default async function Home() {
  const cookieStore = cookies();
  const session = cookieStore.get("next-auth.session-token");
  if (!session) return redirect("/signin");

  return (
    <div className="mt-24 flex max-w-[1200px] flex-col items-center justify-center">
      <h1 className="mb-8 font-bold md:text-3xl">
        Paste the <span className="text-red-500">URL</span> to be shortened
      </h1>
      <div className="">
        <Input session={session?.value || ""} />
        <Datatable />
      </div>
    </div>
  );
}
