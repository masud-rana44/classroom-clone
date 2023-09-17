import { Contact, Folder, MoreVertical, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Class, Profile, Role } from "@prisma/client";
import { CardFooterBtn } from "@/components/card-footer-btn";
import { auth } from "@clerk/nextjs";

interface ClassCardProps {
  cls: Class & {
    profile: Profile;
    members: {
      role: string;
    }[];
  };
}

export const ClassCard = ({ cls }: ClassCardProps) => {
  const {
    id,
    bannerUrl,
    name,
    section,
    profile: { userId, name: profileName, imageUrl: profileImage },
    members,
  } = cls;
  const { userId: currentUserId } = auth();

  return (
    <div className="h-[300px] rounded-lg overflow-hidden text-white border flex flex-col">
      <header
        className="relative h-[100px] bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerUrl})` }}
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="flex items-start justify-between p-1 relative z-10">
          <Link
            href={`/class/${id}`}
            className="group max-w-[260px] mt-3 ml-3 min-h-[47px]"
          >
            <p className="text-xl font-medium truncate text-ellipsis overflow-hidden group-hover:underline transition">
              {name}
            </p>
            <p className="text-[13px] truncate text-ellipsis overflow-hidden group-hover:underline transition font-medium">
              {section}
            </p>
          </Link>

          <button className="h-11 w-11 mt-2 flex items-center justify-center hover:bg-gray-400/20 rounded-full">
            <MoreVertical />
          </button>
        </div>
        {userId !== currentUserId && (
          <p className="text-[13px] truncate text-ellipsis overflow-hidden ml-4 font-medium mt-[2px] hover:underline transition cursor-pointer">
            {profileName}
          </p>
        )}
        {userId !== currentUserId && (
          <Image
            src={profileImage}
            width={80}
            height={80}
            alt={`Image of ${profileName}`}
            className="absolute -bottom-10 right-4 rounded-full cursor-pointer"
          />
        )}
      </header>
      <main className="flex-1"></main>
      <footer className="border-t flex items-center justify-end text-[#212121] font-medium">
        {members[0].role === Role.STUDENT && (
          <CardFooterBtn
            Icon={Contact}
            href="/"
            label={`Open your work for "${name}"`}
          />
        )}
        {members[0].role === Role.TEACHER && (
          <CardFooterBtn
            Icon={TrendingUp}
            href="/"
            label={`Open gradebook for "${name}"`}
          />
        )}
        <CardFooterBtn
          Icon={Folder}
          href="/"
          label={`Open folder for "${name}"`}
        />
      </footer>
    </div>
  );
};
