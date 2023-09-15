import Link from "next/link";
import Image from "next/image";
import { Plus, Menu, Grip } from "lucide-react";
import { UserButton } from "@clerk/nextjs";

export const Header = () => {
  return (
    <div className="w-full px-4 py-2 border-b flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button className="h-11 w-11 hover:bg-zinc-100 rounded-full flex items-center justify-center p-2 transition ">
          <Menu stroke="#5f6368" />
        </button>
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="classroom logo" width={26} height={26} />
          <p className="font-medium text-xl text-[#5f6368] hover:text-[#20a464] transition hover:underline">
            Classroom
          </p>
        </Link>
      </div>
      <div className="flex items-center gap-2 mr-3">
        <button className="h-11 w-11 hover:bg-zinc-100 rounded-full flex items-center justify-center p-2 transition ">
          <Plus />
        </button>
        <button className=" hover:bg-zinc-200/70 rounded-full flex items-center justify-center p-2 transition ">
          <Grip stroke="#5f6368" className="h-[22px] w-[22px]" />
        </button>
        <button className="hover:ring-4 hover:ring-zinc-200/70 transition rounded-full">
          <UserButton afterSignOutUrl="/" />
        </button>
      </div>
    </div>
  );
};
