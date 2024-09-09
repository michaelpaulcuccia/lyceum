import React from "react";
import { PrismaClient, Group } from "@prisma/client";

const prisma = new PrismaClient();

async function getGroups(): Promise<Group[]> {
  const groups = await prisma.group.findMany();
  return groups;
}

export default async function Home() {
  const groups = await getGroups();
  console.log(groups);

  return (
    <main>
      {groups.map((item: Group, i: number) => (
        <div key={i}>
          <p>{item.name}</p>
        </div>
      ))}
    </main>
  );
}
