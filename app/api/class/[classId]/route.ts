import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  {
    params,
  }: {
    params: {
      classId: string;
    };
  }
) {
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

    if (!name || !params.classId) {
      return new NextResponse("Class name and id required", { status: 403 });
    }

    const isPermission = await db.class.findUnique({
      where: {
        id: params.classId,
        profileId: profile.id,
      },
    });

    if (!isPermission) {
      return new NextResponse("Unable to perform this action.", {
        status: 403,
      });
    }

    const updatedClass = await db.class.update({
      where: {
        id: params.classId,
      },
      data: {
        name,
        section,
        subject,
        room,
      },
    });

    return NextResponse.json(updatedClass);
  } catch (error) {
    console.log(error);
    return new NextResponse("[CLASS_POST]Internal server error", {
      status: 500,
    });
  }
}
