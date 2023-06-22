import { config } from '@shared/lib';
import { NextRequest } from 'next/server';

export async function proxyFetch(
  req: NextRequest,
  url: string
) {
  const reqQuery = "?" + req.nextUrl.searchParams.toString()
  console.log(reqQuery);
  console.log(`${config.API_ENDPOINT}${url}${reqQuery}`);

  return await fetch(`${config.API_ENDPOINT}${url}${reqQuery}`, {
    body: JSON.stringify(req.body),
    method: req.method
  })
}