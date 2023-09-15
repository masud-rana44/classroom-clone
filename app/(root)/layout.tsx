import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { db } from "@/lib/db";
import { initialProfile } from "@/lib/initial-profile";

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
  });

  return (
    <div>
      <Header />
      <div className="flex ">
        <Sidebar />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default RootLayout;
