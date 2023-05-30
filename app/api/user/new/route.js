import FutureUser from "@models/futureUser";
import { connectToDB } from "@utils/database";

export const POST = async (req, res) => {
  const { email } = await req.json();

  try {
    await connectToDB();

    const userExists = await FutureUser.findOne({ email: email });

    if (!userExists) {
      await FutureUser.create({ email: email });
    }
    return new Response("New user created", { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new user.", { status: 500 });
  }
};
