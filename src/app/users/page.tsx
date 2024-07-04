// src/app/movies/page.tsx
import { ogm } from "@/lib/neo4j";

export default async function AllUsersPage() {
  await ogm.init(); // Initialize OGM before using it

  const User = ogm.model("user");

  const Users = await User.find();
  const newUser = await User.create({
    input: {
      userId: 1223, // Change "userID" to "userId"
      Name: "Abhishek",
      Email: "abhishek@gmail.com",
      Password: "password",
      Role: "EMPLOYER",
    },
  });
  return (
    <div>
      <h1>All Users</h1>
      <ul>
        {Users.map((user) => (
          <li key={user.userId}>
            <h2>{user.Name}</h2>
            <p>{user.Email}</p>
            <p>{user.Role}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
