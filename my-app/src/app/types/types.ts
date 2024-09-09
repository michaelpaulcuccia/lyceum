// these types are used for data fetching, not to model data

export type GroupType = {
  id: number;
  name: string;
  description: string | null;
  location: string | null;
  zipCode: string;
};

// Define additional types as needed
export type UserType = {
  id: number;
  userId: number;
  groupId: number;
  joinedAt: Date;
};

export type EventType = {
  id: number;
  name: string;
  description: string | null;
  date: Date;
  location: string | null;
  zipCode: string;
  createdById: number;
  groupId: number;
};
