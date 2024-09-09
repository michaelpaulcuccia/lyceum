"use client";
import React from "react";
import Image from "next/image";
import { PrismaClient } from "@prisma/client";
import { GroupType } from "./types/types";
import styled from "styled-components";

const prisma = new PrismaClient();

async function getGroups(): Promise<GroupType[]> {
  const groups = await prisma.group.findMany();
  return groups;
}

const Test = styled.div`
  background: black;
  color: white;
`;

export default async function Home() {
  const groups = await getGroups();

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
      <Image src="/images/reading_002.jpg" height={550} width={900} alt="" />
      <Test>This is a test...</Test>
    </main>
  );
}
