import { NextApiRequest } from "next";
import { config } from '@shared/lib';

export async function proxyFetch(
  req: NextApiRequest,
  url: string
) {
  let reqQuery = Object.entries(req.query).map(([k, v]) => `${k}=${v}`).join("&")
  if (reqQuery.length > 0) reqQuery = "?" + reqQuery

  return await fetch(`${config.API_ENDPOINT}${url}${reqQuery}`, {
    body: JSON.stringify(req.body),
    method: req.method
  })
}