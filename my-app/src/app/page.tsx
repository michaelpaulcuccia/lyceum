import React from "react";
import { createPool } from "@vercel/postgres";

export default function page() {
  const client = createPool({
    connectionString: process.env.POSTGRES_URL, // Ensure this is correctly set in your .env file
  });

  async function seed() {
    try {
      // Connect to the database
      await client.connect();

      // Seed users table
      await client.query(`
      INSERT INTO users (name, email) VALUES
      ('John Doe', 'john@example.com'),
      ('Jane Doe', 'jane@example.com');
    `);

      // Seed books table
      await client.query(`
      INSERT INTO books (title, author, genre) VALUES
      ('1984', 'George Orwell', 'Dystopian'),
      ('To Kill a Mockingbird', 'Harper Lee', 'Classic');
    `);

      console.log("Database seeded successfully.");
    } catch (error) {
      console.error("Error seeding the database:", error);
    } finally {
      // Close the connection
      await client.end();
    }
  }

  seed();
  return <div>page</div>;
}
