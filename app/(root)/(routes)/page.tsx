import { ClassCard } from "@/components/class-card";
import { getClasses } from "@/lib/get-classes";
import { initialProfile } from "@/lib/initial-profile";
import { redirectToSignIn } from "@clerk/nextjs";

const HomePage = async () => {
  const profile = await initialProfile();
  if (!profile) return redirectToSignIn();

  const classes = await getClasses(profile.id);

  return (
    <main className="mr-12 p-6 flex flex-wrap gap-6">
      {classes.map((cls) => (
        <ClassCard key={cls.id} cls={cls} length={classes.length} />
      ))}
    </main>
  );
};

export default HomePage;
