import { db } from "@/lib/db";
import {
  getRandomClassCode,
  getRandomColorCode,
  getRandomImageUrl,
  isValidClassCode,
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

    return NextResponse.json(newClass);
  } catch (error) {
    console.log(error);
    return new NextResponse("[CLASS_POST]Internal server error", {
      status: 500,
    });
  }
}

export async function PATCH(req: Request) {
  try {
    const { code } = await req.json();
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

    if (!isValidClassCode(code)) {
      return new NextResponse(
        "Class codes are 5-7 characters including letters and numbers, and no spaces or symbols",
        { status: 403 }
      );
    }

    const isClassExist = await db.class.findUnique({
      where: {
        classCode: code,
      },
    });

    if (!isClassExist) {
      return new NextResponse("Class not found", { status: 404 });
    }

    const isAlreadyMember = await db.class.findUnique({
      where: {
        classCode: code,
        members: {
          some: {
            profileId: profile.id,
          },
        },
      },
    });

    if (isAlreadyMember) {
      return NextResponse.json(isAlreadyMember);
    }

    const updatedClass = await db.class.update({
      where: {
        classCode: code,
      },
      data: {
        members: {
          create: {
            profileId: profile.id,
            role: Role.STUDENT,
          },
        },
      },
    });

    return NextResponse.json(updatedClass);
  } catch (error) {
    console.log(error);
    return new NextResponse("[CLASS_PATCH]Internal server error", {
      status: 500,
    });
  }
}
