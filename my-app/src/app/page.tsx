import React from "react";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default function page() {
  async function getUsers() {
    const users = await prisma.user.findMany();
    console.log(users);
  }

  getUsers();

  return <div>page</div>;
}
