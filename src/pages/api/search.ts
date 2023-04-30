import type { NextApiRequest, NextApiResponse } from 'next'
import { Article, mockArticles } from "@/pages/api/news";

type Override<T1, T2> = Omit<T1, keyof T2> & T2;
type NextApiRequestWithBody<Body> = Override<NextApiRequest, { body: Body }>


export default async function searchHandler(
  request: NextApiRequestWithBody<{ search: string }>,
  response: NextApiResponse<{ data: Article[] }>) {

  const search = request.body.search.toLowerCase()
  console.log('/api/search', search)
  if (search.length < 2) return

  const data = mockArticles.filter(article =>
    article.name.toLocaleLowerCase().includes(search) ||
    article.description.toLocaleLowerCase().includes(search)
  )

  response.status(200).json({ data })
}
