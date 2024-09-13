"use client";
import React from "react";
import useSWR from "swr";
import { GroupType } from "../types/types";
import GroupForm from "../../../components/GroupForm";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Page() {
  const { data: groups, error } = useSWR<GroupType[]>("/api/groups", fetcher);

  if (error) {
    return <div>Error: Failed to load groups</div>;
  }

  if (!groups) {
    return <div>Loading...</div>;
  }

  console.log(groups);
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
      <div>
        <h1>Add New Group</h1>
        <GroupForm />
      </div>
    </main>
  );
}
