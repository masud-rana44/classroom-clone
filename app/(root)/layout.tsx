import { Header } from "@/components/header";
import { Sidebar } from "@/components/Sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getClasses } from "@/lib/get-classes";
import { initialProfile } from "@/lib/initial-profile";
import { redirectToSignIn } from "@clerk/nextjs";
import { Role } from "@prisma/client";

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const profile = await initialProfile();
  if (!profile) return redirectToSignIn();

  const classes = await getClasses(profile.id);

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
    <div className="h-full">
      <Header />
      <div className="flex h-[calc(100vh-61px)]">
        <Sidebar asTeacher={asTeacher} asStudent={asStudent} />
        <div className="w-[calc(100vw-300px)] h-full overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
