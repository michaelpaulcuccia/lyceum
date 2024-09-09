import React from "react";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function getGroups() {
  const groups = await prisma.group.findMany();
  return groups;
}

export default async function Home() {
  const groups = await getGroups();
  console.log(groups);
  return (
    <main>
      {groups.map((item, i) => (
        <div key={i}>
          <p>{item.name}</p>
        </div>
      ))}
    </main>
  );
}
