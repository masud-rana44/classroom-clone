import { Header } from "@/components/header";
import { Sidebar } from "@/components/Sidebar";
import { db } from "@/lib/db";
import { initialProfile } from "@/lib/initial-profile";
import { Role } from "@prisma/client";

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const profile = await initialProfile();

  const classes = await db.class.findMany({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
    select: {
      id: true,
      name: true,
      section: true,
      defaultColor: true,
      members: {
        where: {
          profileId: profile.id,
        },
        select: {
          role: true,
        },
      },
    },
  });

  const asTeacher = classes
    .filter((cls) => cls?.members[0].role === Role.TEACHER)
    .map((cls) => {
      return {
        label: cls.name,
        secondaryLabel: cls.section,
        color: cls.defaultColor,
        href: `/class/${cls.id}`,
      };
    });

  const asStudent = classes
    .filter((cls) => cls?.members[0].role === Role.STUDENT)
    .map((cls) => {
      return {
        label: cls.name,
        secondaryLabel: cls.section,
        color: cls.defaultColor,
        href: `/class/${cls.id}`,
      };
    });

  return (
    <div>
      <Header />
      <div className="flex ">
        <Sidebar asTeacher={asTeacher} asStudent={asStudent} />
        <div className="w-[calc(100vw-300px)] h-full">{children}</div>
      </div>
    </div>
  );
};

export default RootLayout;
