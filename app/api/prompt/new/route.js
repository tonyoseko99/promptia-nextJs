import { connectToDatabase } from "@utils/database";

export const POST = async (req, res) => {
  const { userId, prompt, tag } = await req.json();

  try {
  } catch (error) {
    console.error(error);
  }
};
