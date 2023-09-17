import { ClassCard } from "@/components/class-card";
import { getClasses } from "@/lib/get-classes";
import { initialProfile } from "@/lib/initial-profile";
import { redirectToSignIn } from "@clerk/nextjs";

const HomePage = async () => {
  const profile = await initialProfile();
  if (!profile) return redirectToSignIn();

  const classes = await getClasses(profile.id);

  return (
    <main className="p-6 grid grid-cols-3 gap-6">
      {classes.map((cls) => (
        <ClassCard key={cls.id} cls={cls} />
      ))}
    </main>
  );
};

export default HomePage;
