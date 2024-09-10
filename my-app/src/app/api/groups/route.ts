import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request, { params }) {
  const groups = await prisma.group.findMany();

  return NextResponse.json(groups);
}
