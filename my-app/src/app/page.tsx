"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { GroupType } from "./types/types";
import styled from "styled-components";

const Test = styled.div`
  background: black;
  color: white;
`;

export default function Home() {
  const [groups, setGroups] = useState<GroupType[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await fetch("/api/groups");
        if (!response.ok) {
          throw new Error("Failed to fetch groups");
        }
        const data = await response.json();
        setGroups(data);
      } catch {
        setError("error fetching data");
      }
    };

    fetchGroups();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

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
