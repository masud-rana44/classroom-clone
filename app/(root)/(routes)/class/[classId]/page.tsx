import { redirect } from "next/navigation";
import { currentUser, redirectToSignIn } from "@clerk/nextjs";

import { db } from "@/lib/db";
import { ClassContainer } from "@/components/class-container";

interface ClassIdPageProps {
  params: {
    classId: string;
  };
}

const ClassIdPage = async ({ params }: ClassIdPageProps) => {
  const user = await currentUser();

  if (!user) return redirectToSignIn();

  if (!params.classId) return redirect("/");

  const classDetails = await db.class.findUnique({
    where: {
      id: params.classId,
    },
    include: {
      members: {
        include: {
          profile: true,
        },
      },
      profile: true,
    },
  });

  if (!classDetails) return redirect("/");

  return <ClassContainer data={classDetails} />;
};

export default ClassIdPage;
