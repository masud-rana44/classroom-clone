import { db } from "@/lib/db";
import { isValidClassCode } from "@/lib/utils";
import { currentUser } from "@clerk/nextjs";
import { Role } from "@prisma/client";
import { NextResponse } from "next/server";

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
