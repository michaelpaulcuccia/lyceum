import React from "react";
import { PrismaClient } from "@prisma/client";
import { GroupPrisma } from "./types/types";

const prisma = new PrismaClient();

async function getGroups(): Promise<GroupPrisma[]> {
  const groups = await prisma.group.findMany({
    // Remove include if you don't need related data
  });
  return groups;
}

export default async function Home() {
  const groups = await getGroups();
  console.log(groups);

  return (
    <main>
      {groups.map((item: GroupPrisma, i: number) => (
        <div key={i}>
          <p>{item.name}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </main>
  );
}
