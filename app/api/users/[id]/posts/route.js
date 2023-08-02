import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (req, { params }) => {
  await connectToDB();

  const prompts = await Prompt.find({
    creator: params.id,
  }).populate("creator");

  try {

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify("Failed to fetch prompts", { status: 500 })
    );
  }
};