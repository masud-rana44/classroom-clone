import { db } from "@/lib/db";
import {
  getRandomClassCode,
  getRandomColorCode,
  getRandomImageUrl,
} from "@/lib/utils";
import { currentUser } from "@clerk/nextjs";
import { Role } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, section, subject, room } = await req.json();
    const user = await currentUser();

    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const profile = await db.profile.findUnique({
      where: {
        userId: user.id,
      },
    });

    if (!profile) {
      return new NextResponse("User not found", { status: 403 });
    }

    if (!name) {
      return new NextResponse("Class name required", { status: 403 });
    }

    let classCode;
    const defaultColor = getRandomColorCode();
    const bannerUrl = getRandomImageUrl();

    while (true) {
      classCode = getRandomClassCode();

      const isExist = await db.class.findUnique({
        where: {
          classCode,
        },
      });

      console.log(isExist);

      if (!isExist) break;
    }

    const newClass = await db.class.create({
      data: {
        name,
        subject,
        section,
        room,
        classCode,
        defaultColor,
        bannerUrl,
        profileId: profile.id,
        members: {
          create: [
            {
              role: Role.TEACHER,
              profileId: profile.id,
            },
          ],
        },
      },
    });

    console.log(newClass);

    return NextResponse.json(newClass);
  } catch (error) {
    console.log(error);
    return new NextResponse("[CLASS_POST]Internal server error", {
      status: 500,
    });
  }
}
