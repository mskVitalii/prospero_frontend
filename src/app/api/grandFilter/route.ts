import { proxyFetch } from '@shared/api/proxyFetch';
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const prosperoRes = await proxyFetch(req, "/grandFilter")
    const prosperoResBody = await prosperoRes.json()

    const newHeaders = new Headers(req.headers)
    newHeaders.delete("transfer-encoding")

    return NextResponse.json(prosperoResBody, {
      headers: newHeaders,
      status: prosperoRes.status
    })
  } catch (error) {
    console.error("[PROXY] ошибка", error)
    return NextResponse.json(error, { status: 500 })
  }
};

export const config = {
  api: {
    bodyParser: {
      responseLimit: 'false'
    },
  },
};
