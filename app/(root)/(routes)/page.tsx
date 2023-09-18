import { redirectToSignIn } from "@clerk/nextjs";

import { getClasses } from "@/lib/get-classes";
import { initialProfile } from "@/lib/initial-profile";
import { InitialPage } from "@/components/initial-page";

const HomePage = async () => {
  const profile = await initialProfile();
  if (!profile) return redirectToSignIn();

  const classes = await getClasses(profile.id);

  return <InitialPage classes={classes} />;
};

export default HomePage;
