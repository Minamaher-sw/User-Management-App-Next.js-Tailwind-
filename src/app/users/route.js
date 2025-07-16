import  { users } from "./data";

export async function GET() {
    return Response.json(users);
}

export async function POST(req) {
  const user = await req.json();
  const newUser = { id: users.length + 1, name: user.name };
  users.push(newUser);
  return Response.json(newUser, { status: 201 });
}

export async function DELETE(req) {
  try {
    const { id } = await req.json();
    const index = users.findIndex((u) => u.id === id);
    if (index === -1) {
      return Response.json({ message: "User not found" }, { status: 404 });
    }
    users.splice(index, 1);
    return Response.json({ message: "User deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json({ message: "Failed to delete user" }, { status: 500 });
  }
}