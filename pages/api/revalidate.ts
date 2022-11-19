import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { path } = req.query;

  await res.revalidate(path as string);

  console.log(`Revalidated ${path}`);

  res.status(200).end();
}
