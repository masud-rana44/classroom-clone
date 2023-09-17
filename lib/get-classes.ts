import { db } from "./db";

export async function getClasses(profileId: string) {
  const classes = await db.class.findMany({
    where: {
      members: {
        some: {
          profileId,
        },
      },
    },
    include: {
      profile: true,
      members: {
        where: {
          profileId,
        },
        select: {
          role: true,
        },
      },
    },
  });

  return classes;
}
