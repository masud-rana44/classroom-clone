"use client";

import { ClassWithMembersWithProfile } from "@/types";

interface ClassCodeProps {
  data: ClassWithMembersWithProfile;
}

export const Upcoming = ({ data }: ClassCodeProps) => {
  const { defaultColor } = data;

  return (
    <div className="relative px-4 py-6 rounded-md border border-[#dadce0] flex flex-col -space-y-2">
      <p className=" font-semibold text-[14px] text-muted-foreground text-[#3e4245] mb-6">
        Upcoming
      </p>
      <div className="mb-10">
        <p className="text-sm text-gray-400 mb-8">No work due soon</p>
      </div>
      <button
        style={{ color: defaultColor }}
        className="absolute bottom-2 right-2 text-sm font-semibold px-2 py-2 rounded-sm hover:bg-gray-100 transition"
      >
        View all
      </button>
    </div>
  );
};
