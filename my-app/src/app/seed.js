// Import Prisma Client
require("dotenv").config();
const prisma = require("@prisma/client");

console.log("POSTGRES_URL:", process.env.POSTGRES_URL);

async function main() {
  // Seed Users
  const user1 = await prisma.user.create({
    data: {
      name: "User One",
      email: "userone@example.com",
      location: "City A",
      zipCode: "12345",
      bio: "This is a bio for User One.",
      createdAt: new Date(),
      // Add any associated data, like books, userGroups, or createdEvents, if needed
    },
  });

  const user2 = await prisma.user.create({
    data: {
      name: "User Two",
      email: "usertwo@example.com",
      location: "City B",
      zipCode: "67890",
      bio: "This is a bio for User Two.",
      createdAt: new Date(),
    },
  });

  // Seed Books
  const book1 = await prisma.book.create({
    data: {
      title: "Book One",
      author: "Author A",
      genre: "Fiction",
      description: "This is a description for Book One.",
      coverImage: "cover_image_url_1.jpg",
      owner: {
        connect: { id: user1.id },
      },
    },
  });

  const book2 = await prisma.book.create({
    data: {
      title: "Book Two",
      author: "Author B",
      genre: "Non-Fiction",
      description: "This is a description for Book Two.",
      coverImage: "cover_image_url_2.jpg",
      owner: {
        connect: { id: user2.id },
      },
    },
  });

  // Seed Groups
  const group1 = await prisma.group.create({
    data: {
      name: "Group One",
      description: "This is a description for Group One.",
      location: "Location A",
      zipCode: "12345",
      users: {
        create: [{ user: { connect: { id: user1.id } } }],
      },
    },
  });

  const group2 = await prisma.group.create({
    data: {
      name: "Group Two",
      description: "This is a description for Group Two.",
      location: "Location B",
      zipCode: "67890",
      users: {
        create: [{ user: { connect: { id: user2.id } } }],
      },
    },
  });

  // Seed Events
  const event1 = await prisma.event.create({
    data: {
      name: "Event One",
      description: "This is a description for Event One.",
      date: new Date("2024-09-15T10:00:00.000Z"),
      location: "Event Location A",
      zipCode: "12345",
      createdBy: {
        connect: { id: user1.id },
      },
      group: {
        connect: { id: group1.id },
      },
    },
  });

  const event2 = await prisma.event.create({
    data: {
      name: "Event Two",
      description: "This is a description for Event Two.",
      date: new Date("2024-09-20T14:00:00.000Z"),
      location: "Event Location B",
      zipCode: "67890",
      createdBy: {
        connect: { id: user2.id },
      },
      group: {
        connect: { id: group2.id },
      },
    },
  });

  // Seed UserGroup (Users joining Groups)
  await prisma.userGroup.create({
    data: {
      user: {
        connect: { id: user1.id },
      },
      group: {
        connect: { id: group1.id },
      },
      joinedAt: new Date(),
    },
  });

  await prisma.userGroup.create({
    data: {
      user: {
        connect: { id: user2.id },
      },
      group: {
        connect: { id: group2.id },
      },
      joinedAt: new Date(),
    },
  });

  console.log("Seed data has been inserted successfully!");
}

// Execute the seed function
main()
  .then(() => {
    console.log("Seeding completed!");
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
