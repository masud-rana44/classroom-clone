import { Class, Member, Profile } from "@prisma/client";

export type ClassWithMembersWithProfile = Class & {
  members: (Member & {
    profile: Profile;
  })[];
} & {
  profile: Profile;
};
