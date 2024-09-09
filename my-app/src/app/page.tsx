import React from "react";
import { PrismaClient } from "@prisma/client";
import { GroupType } from "./types/types";

const prisma = new PrismaClient();

async function getGroups(): Promise<GroupType[]> {
  const groups = await prisma.group.findMany();
  return groups;
}

export default async function Home() {
  const groups = await getGroups();
  console.log(groups);

  return (
    <main>
      {groups.map((item: GroupType, i: number) => (
        <div key={i}>
          <p>{item.name}</p>
          <p>{item.description}</p>
          <p>{item.location}</p>
          <p>{item.zipCode}</p>
        </div>
      ))}
    </main>
  );
}
