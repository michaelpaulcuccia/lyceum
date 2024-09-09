import React from "react";
import { PrismaClient } from "@prisma/client";
import type { Group } from "@prisma/client"; // Import the 'group' type from Prisma

const prisma = new PrismaClient();

async function getGroups(): Promise<Group[]> {
  // Ensure the return type is 'group[]'
  const groups = await prisma.group.findMany();
  return groups;
}

export default async function Home() {
  const groups = await getGroups();
  console.log(groups);

  return (
    <main>
      {groups.map(
        (
          item: Group,
          i: number // Explicitly define the type for 'item'
        ) => (
          <div key={i}>
            <p>{item.name}</p>
          </div>
        )
      )}
    </main>
  );
}
