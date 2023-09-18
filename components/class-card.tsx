import Link from "next/link";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import { Contact, Folder, TrendingUp } from "lucide-react";

import { Role } from "@prisma/client";
import { CardFooterBtn } from "@/components/card-footer-btn";
import { ClassCardDropdown } from "@/components/dropdown/class-card-dropdown";
import { ClassWithProfile } from "@/types";
import { useRouter } from "next/navigation";

interface ClassCardProps {
  cls: ClassWithProfile;
  length: number;
}

export const ClassCard = ({ cls, length }: ClassCardProps) => {
  const {
    id,
    bannerUrl,
    name,
    section,
    profile: { userId, name: profileName, imageUrl: profileImage },
    members,
  } = cls;
  const { user } = useUser();
  const router = useRouter();

  if (!user || !user.id) {
    router.push("/");
    return null;
  }

  return (
    <div className="h-[300px] w-[294px] rounded-lg overflow-hidden bg-white/90 text-white  border border-[#dadce0] flex flex-col cursor-pointer hover:shadow-md transition">
      <div
        className="relative h-[100px] bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerUrl})` }}
      >
        <div className="flex items-start justify-between p-1 relative z-10">
          <Link
            href={`/class/${id}`}
            className="group max-w-[240px] mt-3 ml-3 min-h-[47px]"
          >
            <p className="text-xl font-medium truncate text-ellipsis overflow-hidden group-hover:underline transition">
              {name}
            </p>
            <p className="text-[13px] truncate text-ellipsis overflow-hidden group-hover:underline transition font-medium">
              {section}
            </p>
          </Link>

          <ClassCardDropdown
            cls={cls}
            length={length}
            isInvited={user.id !== userId}
          />
        </div>
        {members[0].role === Role.STUDENT && (
          <p className="text-[13px] truncate text-ellipsis overflow-hidden ml-4 font-medium mt-[2px] hover:underline transition cursor-pointer relative">
            {profileName}
          </p>
        )}
        {members[0].role === Role.STUDENT && (
          <Image
            src={profileImage}
            width={80}
            height={80}
            alt={`Image of ${profileName}`}
            className="absolute -bottom-10 right-4 rounded-full cursor-pointer "
          />
        )}
      </div>
      <div className="flex-1"></div>
      <div className="border-t border-[#dadce0] flex items-center justify-end text-[#212121] font-medium">
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
      </div>
    </div>
  );
};
