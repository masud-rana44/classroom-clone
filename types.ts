import { Class, Member, Profile, Role } from "@prisma/client";

export type ClassWithMembersWithProfile = Class & {
  members: (Member & {
    profile: Profile;
  })[];
} & {
  profile: Profile;
};

export type ClassWithMember = {
  section: string | null;
  id: string;
  name: string;
  members: { role: Role }[];
  defaultColor: string;
}[];
