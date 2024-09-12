"use client";
import React, { useEffect, useState } from "react";
import { GroupType } from "../types/types";

export default function Page() {
  const [groups, setGroups] = useState<GroupType[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Add loading state
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
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchGroups();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <main>
      <p>Group Data from API:</p>
      {groups.map((item: GroupType, i: number) => (
        <div key={i} style={{ margin: "10px 0" }}>
          <p>{item.name}</p>
          <p>{item.description}</p>
          <p>{item.location}</p>
          <p>{item.zipCode}</p>
        </div>
      ))}
    </main>
  );
}
