import { NextResponse } from "next/server";
import { prisma } from "../../../../prisma";

export async function POST(request: Request) {
  try {
    const { name, description, location, zipCode } = await request.json();

    const newGroup = await prisma.group.create({
      data: {
        name,
        description,
        location,
        zipCode,
      },
    });

    return NextResponse.json(newGroup, { status: 201 });
  } catch (error) {
    console.error("Failed to create group:", error);
    return NextResponse.json(
      { error: "Failed to create group." },
      { status: 500 }
    );
  }
}
