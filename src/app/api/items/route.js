import dbConnect from "@/lib/dbConnect";

export async function GET() {
  const data = await dbConnect("items").find({}).toArray();

  return Response.json({ data });
}

export async function POST(req) {
  const postedData = await req.json();

  const result = await dbConnect("items").insertOne(postedData);

  return Response.json(result);
}
