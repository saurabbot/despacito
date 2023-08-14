import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/drizzle/db";
import { leads } from "@/drizzle/db/schema";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const result = await db.select().from(leads);
  
  // await db.insert(leads).values({
  //   email: "saurabhnamb112@gmail.com",
  // });
  res.status(200).json(result);
}
