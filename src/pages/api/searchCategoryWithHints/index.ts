import { proxyFetch } from '@shared/api/proxyFetch';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const prosperoRes = await proxyFetch(req, "/searchCategoryWithHints")
    const prosperoResBody = await prosperoRes.json()

    prosperoRes.headers.forEach((v, k) => {
      if (k === "transfer-encoding") return
      res.setHeader(k, v)
    })
    res.status(prosperoRes.status).json(prosperoResBody)
  } catch (error) {
    res.status(500).json({ error })
  }
};

export const config = {
  api: {
    bodyParser: {
      responseLimit: 'false'
    },
  },
};
