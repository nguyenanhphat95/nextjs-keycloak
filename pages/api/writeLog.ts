// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { writeLog } from "commons/helpers/logger";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  writeLog("_app.tsx", new Date(), "App components");
}
