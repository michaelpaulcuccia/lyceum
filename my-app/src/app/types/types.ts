// types.ts

export type GroupPrisma = {
  id: number;
  name: string;
  description: string | null;
  location: string | null;
  zipCode: string;
};

// Define additional types as needed
export type UserGroup = {
  id: number;
  userId: number;
  groupId: number;
  joinedAt: Date;
};

export type Event = {
  id: number;
  name: string;
  description: string | null;
  date: Date;
  location: string | null;
  zipCode: string;
  createdById: number;
  groupId: number;
};
